const getImgUrl = async () => {
    const res = await fetch('https://meme-api.com/gimme/unixporn');
    const data = await res.json();
    return data.postLink;
};

export { getImgUrl };