const quotes = [
  "No matter where you go, everyone's connected.",
  "People only have substance within the memories of other people.",
  "Why? Why did you die?",
  "I am not what you think I am. I am everything and nothing.",
  "The world is but a reflection of our own minds.",
  "If you don't want to be used, then you must control yourself.",
  "It's not good to be so disconnected from reality.",
  "In this world, everyone has their own truths.",
  "Don't think of it as a place; it's an experience.",
  "It's easy to forget what is real.",
];

const quoteLeft = document.getElementById("quote-left");
const quoteRight = document.getElementById("quote-right");
let quoteIndex = 0;

function rotateQuotes() {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  quoteLeft.textContent = quotes[quoteIndex];
  quoteRight.textContent = quotes[quoteIndex];
}

setInterval(rotateQuotes, 2000);
