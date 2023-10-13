// music should be an object with title, artist, and album properties
const music = {
  title: "The Search",
  artist: "NF",
  album: "The Search Album"
};

// Write code between the backticks tags to output the data from the music object above.
const songSnippet = `The song you are listening to is ${music.title}!
It was written by ${music.artist} and was a part of their album ${music.album}!`;

console.log(songSnippet)

