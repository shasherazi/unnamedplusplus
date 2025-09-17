const memeSubreddits = ['memes',
    'dankmemes',
    'me_irl',
    'okbuddyretard',
    'wholesomememes',
    'historymemes',
    'PrequelMemes',
    'SequelMemes',
    'Animemes',
    'ProgrammerHumor',
    'linuxmemes',
    'ITMemes',
    'techsupportgore',
    'softwaregore',
    'linux',
    'commandline',
    'bash',
    '2meirl4meirl',
    'bonehurtingjuice',
    'comedyheaven',
    'surrealmemes',
    'deepfriedmemes',
    'boottoobig',
    'shittyadviceanimals',
    'antimeme']

const getMemeUrl = async () => {
    const randomSubreddit = memeSubreddits[Math.floor(Math.random() * memeSubreddits.length)];
    console.log(`Fetching meme from r/${randomSubreddit}`);
    const res = await fetch(`https://meme-api.com/gimme/${randomSubreddit}`);
    const data = await res.json();
    const result = { url: data.url, subreddit: data.subreddit, title: data.title };
    return result;
};

export { getMemeUrl };
