const getImgUrl = async () => {
    const res = await fetch('https://meme-api.com/gimme/unixporn');
    const data = await res.json();
    const result = { url: data.url, title: data.title, postLink: data.postLink };
    return result;
};

export { getImgUrl };
