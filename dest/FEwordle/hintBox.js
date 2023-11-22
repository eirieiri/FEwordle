"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("*** Hello World from FEwordle/hintBox.tsx ***");
const importCharacters_1 = require("./importCharacters");
function characterSelector(domNode) {
    let selector = domNode.querySelector("select");
    if (!selector) {
        selector = document.createElement("select");
        selector.name = "character";
        selector.id = "character";
        domNode.appendChild(selector);
    }
    let index = 0;
    importCharacters_1.characters.forEach(char => {
        console.log(index++);
        let opt = document.createElement("option");
        opt.textContent = char.name;
        opt.value = char.name;
        selector.appendChild(opt);
        console.log(opt.textContent);
    });
    let title = document.createElement("h2");
    title.textContent = "Hi";
    let container = document.createElement("div");
    container.appendChild(selector);
    container.appendChild(title);
    domNode.appendChild(container);
}
characterSelector(document.body);