let apiurl = "https://api.quotable.io/quotes/random";
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let copy = document.getElementById("copy");

async function getquote(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  quote.innerHTML = data[0].content;
  author.innerHTML = data[0].author;
  copy.addEventListener("click", () => {
    copyTextToClipboard(data[0].content);
  });
}

async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Text copied to clipboard");
  } catch (err) {
    console.error("Failed to copy text:", err);
  }
}

getquote(apiurl);
