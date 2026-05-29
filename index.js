const uris = [
    "https://www.youtube.com/watch?v=FnHMY0wTnLE",
    "https://www.youtube.com/watch?v=F-Gk5_qBRR0",
    "https://www.youtube.com/watch?v=FyaYkfgVyog",
    "https://www.youtube.com/shorts/WHh8mUtqEN4",
    "https://www.youtube.com/shorts/xGtw5XgJPIw",
];

function randomNum() {
    console.log("key length", Object.keys(uris).length)
    return Math.floor(Math.random()*Object.keys(uris).length);
}

function randomUri(e) {
    let num = randomNum();
    console.log(num);
    console.log(e);
    document.querySelector("#link").href = uris[num];
}

document.querySelector("#link").addEventListener("click", randomUri);
