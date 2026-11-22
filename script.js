const quotes = [
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Happiness depends upon ourselves.",
        author: "Aristotle"
    },
    {
        quote: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        quote: "Great things never come from comfort zones.",
        author: "Anonymous"
    },
    {
        quote: "Success is the sum of small efforts repeated daily.",
        author: "Robert Collier"
    }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("newQuote");
const shareButton = document.getElementById("shareQuote");

let lastQuoteIndex = -1;

function generateQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);

    lastQuoteIndex = randomIndex;

    quoteElement.textContent = `"${quotes[randomIndex].quote}"`;
    authorElement.textContent = `— ${quotes[randomIndex].author}`;
}

newQuoteButton.addEventListener("click", generateQuote);

shareButton.addEventListener("click", async function () {
    const text = `${quoteElement.textContent} ${authorElement.textContent}`;

    if (navigator.share) {
        try {
            await navigator.share({ text: text });
        } catch (error) {
            console.log("Sharing cancelled.");
        }
    } else {
        try {
            await navigator.clipboard.writeText(text);
            alert("Quote copied to clipboard!");
        } catch (error) {
            alert("Sharing is not supported on this device.");
        }
    }
});

generateQuote();
