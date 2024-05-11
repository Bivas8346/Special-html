"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 10;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
    if (play) {
        noCount++;
        const imageIndex = Math.min(noCount, MAX_IMAGES);
        changeImage(imageIndex);
        resizeYesButton();
        updateNoButtonText();
        if (noCount === MAX_IMAGES) {
            play = false;
        }
    }
});

function handleYesClick() {
    titleElement.innerHTML = "¡Thank You!!!<br/>This Is My First Digital Proposal Thank You For Accapting This But I will Conafacing My Fellings";
    buttonsContainer.classList.add("hidden");
    changeImage("yes");
}

function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.6;

    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
    const messages = [
        "No",
        "Are you sure? 🌷🌷",
        "Really safe? 🥺",
        "Please 🫶",
        "It's Not Only a FriendShip It's more then Friend!! 💖",
        "A chocolate For You 🍫",
        "I'll buy you a pizza 🍕",
        "We will watch movies 🎥",
        "We will go to the beach 🏖️",
        "We will play video games together 👾",
        "¡I'm going to cry...! 😭",
        "You are breaking my heart 💔",
    ];

    const messageIndex = Math.min(noCount, messages.length - 1);
    return messages[messageIndex];
}

function changeImage(image) {
    catImg.src = `assets/img/cat-${image}.jpg`;
}

function updateNoButtonText() {
    noButton.innerHTML = generateMessage(noCount);
}