const emojis = [
    "👽",
    "👽",
    "👻",
    "👻",
    "🦒",
    "🦒",
    "🐸",
    "🐸",
    "🦓",
    "🦓",
    "🐼",
    "🐼",
    "🐶",
    "🐶",
    "😸",
    "😸",
];
let openCards = [];

let shuffEmojis = emojis.sort(() => (Math.random() > .5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffEmojis[i];

    document.querySelector(".game").appendChild(box);
}