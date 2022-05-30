"use strict";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
        'X-RapidAPI-Key': 'b9ac490da3msh2c4a06731f81988p1ec50djsn31f64a4b89eb'
    }
};

function setTweetButton(quote, author) {
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - ${author}`);
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function displayAuthor(author) {
    const quoteAuthor = document.querySelector("#js-quote-author");
    quoteAuthor.textContent = author;
}

async function getQuote() {
    let response = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
    if (response.ok) {
        let quoteData = await response.json();
        let text = quoteData.content;
        let author = quoteData.originator.name;
        displayQuote(text);
        displayAuthor(author);
        setTweetButton(text, author);
    }
    else {
        alert("There is a problem with " + response.status + " " + response.statusText);
    }

}

let newQuoteButton = document.querySelector('#js-new-quote');
let twitterButton = document.querySelector('#js-twitter');

newQuoteButton.addEventListener("click", getQuote);

getQuote();


