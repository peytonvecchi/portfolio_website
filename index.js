const uris = [
    "https://www.youtube.com/watch?v=FnHMY0wTnLE",
    "https://www.youtube.com/watch?v=F-Gk5_qBRR0",
    "https://www.youtube.com/watch?v=FyaYkfgVyog"
];

function randomNum() {
    return Math.floor(Math.random()*3);
}

function randomUri(e) {
    let num = randomNum();
    console.log(num);
    console.log(e);
    document.querySelector("#link").href = uris[num];
}

document.querySelector("#link").addEventListener("click", randomUri);
