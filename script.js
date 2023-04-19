const button = document.getElementById("new-quote-btn");
const quoteDiv = document.getElementById("quote-output");
const authorDiv = document.getElementById("author-output");

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "— Steve Jobs",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "— Theodore Roosevelt",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "— Thomas Edison",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "— Confucius",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "— Winston Churchill",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "— Socrates",
  },
  {
    quote: "The truth will set you free.",
    author: "— the Bible",
  },
  {
    quote: "All that glitters is not gold.",
    author: "— William Shakespeare",
  },
  {
    quote: "Knowledge is power.",
    author: "— Sir Francis Bacon",
  },
  {
    quote: "That’s one small step for a man, a giant leap for mankind.",
    author: "— Neil Armstrong",
  },
  {
    quote: "United we stand, divided we fall.",
    author: "— Aesop",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "— Mahatma Ghandi",
  },
  {
    quote: "I have a dream.",
    author: "— Martin Luther King Jr",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "— Walt Disney",
  },
];

button.addEventListener("click", function () {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  if (quoteDiv.innerText !== randomQuote.quote) {
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  } else {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  }
});
