const words = [
  "welcome",
  "home",
  "cool",
  "stuff",
  "links",
  "pics",
  "anime",
  "love",
  "fun",
  "music",
  "game",
  "web",
  "page",
  "under construction",
  "email",
  "chat",
  "star",
  "sparkle",
  "neon",
  "cyber",
  "retro",
  "90s",
  "geocities",
  "button",
  "banner",
  "guestbook",
  "portal",
  "zone",
  "world",
  "magic",
  "dream",
  "space",
  "fire",
  "ice",
];
const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

export async function getGifCities(searchTerm?: string) {
  const randomWord = searchTerm?.trim() || getRandomWord();

  const url = `https://gifcities.archive.org/api/v1/gifsearch?q=${encodeURIComponent(randomWord)}&limit=5`;

  const response = await fetch(url);
  const data = await response.json();

  const urls = data.map((item: any) => {
    return {
      gifUrl: "https://web.archive.org/web/" + item.gif,
      gifPageUrl: item.page,
    };
  });

  const random = urls[Math.floor(Math.random() * urls.length)];

  const randomUrlFormatted = random.gifUrl.replace(
    /\/web\/(\d+)\//,
    "/web/$1if_/",
  );

  return {
    randomWord,
    gifUrl: randomUrlFormatted,
    gifPageUrl: random.gifPageUrl,
  };
}
