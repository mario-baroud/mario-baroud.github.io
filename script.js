// ============================================================
// COMP208 AT3 - Mario Baroud
// Random Teaching Quote Generator
// Features: Fade-in animation + no immediate repeats
// ============================================================

// Array of quotes
const quotes = [
  "“Education is the most powerful weapon which you can use to change the world.” – Nelson Mandela",
  "“The best teachers are those who show you where to look, but don’t tell you what to see.” – Alexandra K. Trenfor",
  "“It is the supreme art of the teacher to awaken joy in creative expression and knowledge.” – Albert Einstein",
  "“Teaching kids to count is fine, but teaching them what counts is best.” – Bob Talbert",
  "“A teacher affects eternity; he can never tell where his influence stops.” – Henry Adams",
  "“Good teaching is more a giving of right questions than a giving of right answers.” – Josef Albers",
  "“The art of teaching is the art of assisting discovery.” – Mark Van Doren",
  "“Tell me and I forget. Teach me and I remember. Involve me and I learn.” – Benjamin Franklin",
  "“Education is not the filling of a pail, but the lighting of a fire.” – William Butler Yeats",
  "“One child, one teacher, one book, one pen can change the world.” – Malala Yousafzai",
  "“A good teacher can inspire hope, ignite the imagination, and instill a love of learning.” – Brad Henry",
  "“It’s the teacher that makes the difference, not the classroom.” – Michael Morpurgo",
  "“To teach is to learn twice.” – Joseph Joubert",
  "“The influence of a good teacher can never be erased.” – Unknown",
  "“Teachers can change lives with just the right mix of chalk and challenges.” – Joyce Meyer",
  "“What the teacher is, is more important than what he teaches.” – Karl A. Menninger",
  "“Great teachers empathize with kids, respect them, and believe that each one has something special that can be built upon.” – Ann Lieberman",
  "“The mind is not a vessel to be filled but a fire to be kindled.” – Plutarch",
  "“Teachers encourage minds to think, hands to create, and hearts to love.” – Anonymous",
  "“The beautiful thing about learning is that no one can take it away from you.” – B.B. King"
];

const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");

let lastIndex = -1; // keeps track of the previously displayed quote

// Function to get a new random index that's not the same as the last one
function getNewIndex() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (newIndex === lastIndex);
  lastIndex = newIndex;
  return newIndex;
}

// Function to show the quote with fade-in effect
function showQuote() {
  const index = getNewIndex();
  quoteElement.style.opacity = 0; // fade out current text
  setTimeout(() => {
    quoteElement.textContent = quotes[index];
    quoteElement.style.transition = "opacity 0.6s ease";
    quoteElement.style.opacity = 1; // fade in new text
  }, 200); // short delay before changing quote
}

// Event listener for button
newQuoteButton.addEventListener("click", showQuote);
