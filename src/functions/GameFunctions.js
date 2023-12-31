import {
    ALL_ANIMALS,
    GOOD_ANSWER_TRANSLATIONS,
    LANGUAGES, PLAY_STATE_PLAYING,
    PLAY_STATE_STOPPED,
    WRONG_ANSWER_TRANSLATIONS
} from "../ConstantsAnimalsGame.js";
import {getLanguageIndex, getURLLanguage} from "./LanguageFunctions.js";
import {gameState} from "../GameState.js";
import {recolorImage} from "./ColorFunctions.js";
import {audioScore, audioLose, playAudio} from "./AudioFunctions.js";

/**
 * Initialize the game by saying a random animal in the language selected
 * @param selectedLanguage - The language selected by the user
 */
export function initGame(selectedLanguage){
    let randomAnimal = getRandomWord(selectedLanguage);

    gameState.currentAnimal = randomAnimal;

    let images = document.querySelector(".grid").children;
    for (let i = 0; i < images.length; i++) {
        images[i].style.border = "none";
    }

    let speech = new SpeechSynthesisUtterance(randomAnimal);
    speech.lang = Object.values(LANGUAGES)[getLanguageIndex(selectedLanguage)];
    window.speechSynthesis.speak(speech);
}

/**
 * Check if the user answer is correct or not
 * If the answer is correct, the browser will say "Good answer" in the language selected
 * If the answer is wrong, the browser will say "Wrong answer" in the language selected
 * @param animalImg
 * @param selectedLanguage - The language selected by the user
 */
export function checkUserAnswer(animalImg, selectedLanguage) {
    let userAnswer = animalImg.getAttribute("alt");
    let languageIndex = getLanguageIndex(selectedLanguage);
    let speech = new SpeechSynthesisUtterance();

    if (userAnswer === gameState.currentAnimal) {
        speech.text = GOOD_ANSWER_TRANSLATIONS[languageIndex];
        playAudio(audioScore);
    } else {
        speech.text = WRONG_ANSWER_TRANSLATIONS[languageIndex];
        playAudio(audioLose);
    }

    speech.lang = Object.values(LANGUAGES)[languageIndex];
    window.speechSynthesis.speak(speech);
    recolorImage(animalImg);

    setTimeout(function () {
        initGame(selectedLanguage);
    }, 2750);

}

export function playGame() {
    let playButton = document.getElementById("playButton");
    if (gameState.playState === PLAY_STATE_STOPPED) {
        gameState.playState = PLAY_STATE_PLAYING;
        initGame(getURLLanguage())
        console.log("Game is playing");
        playButton.innerHTML = "Stop";
        return;
    }
    gameState.playState = PLAY_STATE_STOPPED;
    console.log("Game is stopped");
    playButton.innerHTML = "Play";
}


/**
 * Get a random word from the list of animals
 * @param selectedLanguage - The language selected by the user
 * @returns {string} - A random word from the list of animals in the selected language
 */
export function getRandomWord(selectedLanguage){
    let randomAnimal = gameState.currentAnimal;
    while (randomAnimal === gameState.currentAnimal){
        randomAnimal = ALL_ANIMALS[Math.floor(Math.random() * ALL_ANIMALS.length)];
    }
    let languageIndex = getLanguageIndex(selectedLanguage);
    return randomAnimal[languageIndex];
}