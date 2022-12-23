const memeSubreddits = [
    'dankmemes',
    'memes',
    'funny',
    'meirl',
    'wholesomememes',
    'historymemes',
    'programmerhumor',
];

const getRandomMeme = async () => {
    const subreddit = memeSubreddits[Math.floor(Math.random() * memeSubreddits.length)];
    const res = await fetch(`https://meme-api.com/gimme/${subreddit}`);
    const data = await res.json();
    return {
        url: data.url,
        subreddit: data.subreddit,
    };
};

const getMeme = async (subreddit) => {
    const res = await fetch(`https://meme-api.com/gimme/${subreddit}`);
    const data = await res.json();
    return data.url;
};

export { getRandomMeme, getMeme };