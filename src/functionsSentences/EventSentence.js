import {checkAnimal, getRandomSentence} from "./SentencesFunctions.js";
import {getAnimalTranslation} from "../functions/LanguageFunctions.js";
import {ALL_ANIMALS} from "../ConstantsAnimalsGame.js";
import {gameState} from "../GameState.js";
import {toggleAnimation} from "../functions/ColorFunctions.js";
import {audioScore, audioLose, playAudio} from "../functions/AudioFunctions.js";

let phraseARemplir = document.getElementById("phraseARemplirText");

/**
 * Initialise la phrase à remplir
 * @param selectedLanguage
 */
export function initPhraseARemplir(selectedLanguage) {
    phraseARemplir.innerHTML = getRandomSentence(selectedLanguage);
}

/**
 * Initiation des animaux à ajouter, avec leurs boutons et leur mot associés
 * @param selectedLanguage
 */
export function initAnimauxAAjouter(selectedLanguage) {
    let animauxAAjouter = document.getElementById("animaux");
    for (let i = 0; i < ALL_ANIMALS.length; i++) {
        let currentAnimal = getAnimalTranslation(ALL_ANIMALS[i][0], selectedLanguage).toUpperCase();
        let button = document.createElement("button");
        button.setAttribute("id", "choices");
        button.innerHTML = currentAnimal;
        animauxAAjouter.appendChild(button);
    }
}

/**
 * Méthode initiant les boutons lorsque l'on clique (en fonction de si la réponse est bonne ou non)
 * @param selectedLanguage
 */
export function initClickingOnAnimalEvent(selectedLanguage) {
    let animauxAAjouter = document.getElementById("animaux");
    let animaux = animauxAAjouter.querySelectorAll("button");
    for (let i = 0; i < animaux.length; i++) {
        let animal = animaux[i];
        animal.addEventListener('click', function () {
            let alt = animal.innerHTML;
            if (checkAnimal(alt)) {
                let speech = new SpeechSynthesisUtterance(animal.innerHTML);
                speech.lang = selectedLanguage;
                window.speechSynthesis.speak(speech);
                phraseARemplir.innerHTML = gameState.completeSentence;
                playAudio(audioScore)
                toggleAnimation('green-border', animal);
                initNextSentenceEvent(selectedLanguage);
                return;
            }
            playAudio(audioLose)
            toggleAnimation('red-border', animal)
        })
    }
}

/**
 * Création d'une initialisation pour changer d'évènement
 * @param selectedLanguage
 */
export let initNextSentenceEvent = function (selectedLanguage) {
    let nextSentence = document.getElementById("nextSentence");
    if (nextSentence.innerHTML === "") {
        toggleAnimation("slideUp", nextSentence)
        let button = document.createElement("button");
        button.innerHTML = "Next sentence";
        nextSentence.appendChild(button);
        nextSentence.addEventListener('click', function () {
            initPhraseARemplir(selectedLanguage);
            removeNextSentenceEvent();
        })
    }
}

/**
 * Méthode permettant de supprimer le bouton une fois le bouton appuyé
 */
export let removeNextSentenceEvent = function () {
    let nextSentence = document.getElementById("nextSentence");
    nextSentence.innerHTML = "";
}