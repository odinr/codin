export const RunKit =
    new Promise<GlobalRunKit>((resolve) => {
        const src = "https://embed.runkit.com";
        const loaded = () => resolve(window.RunKit);
        if (!document.head.querySelector(`[src="${src}"]`)) {
            const el = document.createElement('script');
            el.setAttribute('src', src);
            el.addEventListener('load', loaded, { once: true });
            document.head.appendChild(el);
        } else {
            loaded();
        }
    });