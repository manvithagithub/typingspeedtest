let cont = document.getElementById("speedTypingTest");
let textarea = document.getElementById("quoteInput");
let timer = document.getElementById("timer");
let quote = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let subbtn = document.getElementById("submitBtn");
let resetbtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");
let count = 51;
spinner.classList.remove("d-none");

function getquote() {
    let options = {
        method: "GET"
    }
    spinner.classList.add("d-none");
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(req) {
            return req.json();
        })
        .then(function(data) {
            quote.textContent = data.content;
        });
}
getquote();

let interval = setInterval(function() {
    count = count - 1;
    timer.textContent = (count) + " seconds"
    if (count === 0) {
        result.textContent = "Time Out";
    }
}, 1000);

subbtn.addEventListener("click", function() {
    if (textarea.value === quote.textContent) {
        result.textContent = "You have typed in " + (50 - count) + " seconds";
        clearInterval(interval);
    } else {
        result.textContent = "You typed incorrect answer.";
    }
});
resetbtn.addEventListener("click", function() {
    getquote();
    textarea.value = "";
    spinner.classList.remove("d-none");
});