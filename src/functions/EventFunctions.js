import {playGame} from "./GameFunctions.js";

import {checkUserAnswer} from "./GameFunctions";
import {gameState} from "../GameState";

/**
 * Initialize the event when the user
 * changes the language
 * The page is refreshed with the new language
 * and load new translations for images
 */
export function initChangingLanguageEvent() {
    let languageSelector = document.querySelector("#languageSelector");
    languageSelector.addEventListener("change", function () {
        let selectedLanguage = languageSelector.value;
        window.location.href = "?lang=" + selectedLanguage;
    });
}

/**
 * Initialize the event when the user
 * clicks on an animal
 * The animal is translated in the language selected
 * @param {string} selectedLanguage - The language selected by the user
 */
export function initClickingOnAnimalEvent(selectedLanguage) {
    let animals = document.querySelectorAll("img");

    for (let i = 0; i < animals.length; i++) {
        let animalImg = animals[i];
        animalImg.addEventListener("click", function () {
            let speech = new SpeechSynthesisUtterance(animalImg.getAttribute("alt"));
            speech.lang = selectedLanguage;
            window.speechSynthesis.speak(speech);
        });
    }
}

export function initClickingOnAnimalGameEvent(selectedLanguage) {
    let animals = document.querySelectorAll("img");

    for (let i = 0; i < animals.length; i++) {
        let animalImg = animals[i];
        animalImg.addEventListener("click", function () {
            let animalName = animalImg.getAttribute("alt");
            checkUserAnswer(animalName, gameState.currentAnimal, selectedLanguage)
        });
    }
}

/**
 * Initialize the event when the user clicks the button
 * to play the game
 */
export function initClickingPlayButtonEvent() {
    let playButton = document.getElementById("playButton");
    playButton.addEventListener("click", function () {
        playGame();
    });
}