const photos = [
  "https://randomuser.me/api/portraits/men/37.jpg",
  "https://randomuser.me/api/portraits/women/21.jpg",
  "https://randomuser.me/api/portraits/lego/6.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/men/25.jpg"
]

const quotes = [
  "When you eat, use your mouth - Haris",
  "When you sleep, close your eyes - Another Haris",
  "When you code, use your keyboard - AI",
  "When you read, use your eyes - Another AI",
  "When you write, use your pen - Yet Another AI"
]

function setQuote() {
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomPhotos = photos[randomIndex];
  const randomQuote = quotes[randomIndex];
  const quoteParts = randomQuote.split(' - ');
  console.log(quoteParts);
  document.getElementById('photo').src = randomPhotos;
  quote.innerHTML = quoteParts[0];
  author.innerHTML = `- ${quoteParts[1]}`;
}