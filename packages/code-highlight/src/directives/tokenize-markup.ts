import { directive, Part, NodePart } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

// @ts-ignore
import Prism from 'prismjs';
import { templateLoader } from '../utils/template-loader';

interface Content {
  code: string;
  language: string;
}

const previousValues = new WeakMap<Part, Content>();

const loadTemplate = templateLoader({ cdn: 'https://unpkg.com/prismjs@1.20.0' });

const renderTemplate = (part: Part) => (template: any) => {
  const { code, language } = previousValues.get(part)!;
  const tokens = Prism.highlight(code, template, language);
  part.setValue(unsafeHTML(tokens));
  part.commit();
};

export const tokenizeMarkup = directive((code: string, language: string) => (part: NodePart): void => {

  const current = previousValues.get(part);

  previousValues.set(part, { ...current, code, language });

  if (!current || code !== current.code || language !== current.language) {
    loadTemplate(language).then(renderTemplate(part));
  }
});

export default tokenizeMarkup;
