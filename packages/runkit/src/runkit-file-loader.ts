export const getFileContent = async (src: string) => {
    const response = await fetch(src);
    if (!response || !response.ok) {
        throw new Error('bad response');
    }
    const content = await response.text();
    if (!content) {
        throw new Error('bad content');
    }
    return content.trim();
};

export default getFileContent;