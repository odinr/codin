import { getLanguages } from './template-dependencies';
import { resolveAlias } from './template-aliases';

// @ts-ignore
import Prism from 'prismjs';
import {Grammar} from 'prismjs';

interface LoaderConfig {
  cdn: string;
  attr: string;
}

const loadLanguage = (cdn: string, attr: string) => (language: string) =>
  new Promise<Grammar>((resolve) => {
    const template = Prism.languages[language];
    if (!template && !document.head.querySelector(`[${attr}="[${language}]"`)) {
      const el = document.createElement('script');
      el.setAttribute(attr, language);
      el.setAttribute('src', `${cdn}/components/prism-${language}.min.js`);
      el.addEventListener('load', () => resolve(Prism.languages[language]));
      document.head.appendChild(el);
    } else {
      resolve(template);
    }
  });

export function templateLoader(config?: Partial<LoaderConfig>) {
  const { cdn, attr } = { ...config, cdn: 'https://unpkg.com/prismjs', attr: 'data-prism-language' };
  return async (language: string): Promise<Grammar> => {
    const loader = loadLanguage(cdn, attr);
    await Promise.all(getLanguages(resolveAlias(language)).filter(lang => !!lang).map(loader));
    return Prism.languages[language];
  };
}

export default templateLoader;
