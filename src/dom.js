// src/dom.js

// this file contains the js logic for dom manipulation

// example on how to import classes --> import { RandomApp } from './application';

import cheerfulEggImage from "./images/cheerfull_egg.png";

const cheerfulEggImg = new Image();
cheerfulEggImg.src = cheerfulEggImage;
cheerfulEggImg.classList.add("hero-image");
document.getElementById("image-container").appendChild(cheerfulEggImg);

document.getElementById("button-jump").addEventListener("click", () => {
    document.getElementById('signup-section').scrollIntoView({
        behavior: 'smooth'
    });
});