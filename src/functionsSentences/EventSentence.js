import {checkAnimal, getRandomSentence} from "./SentencesFunctions.js";
import {getAnimalTranslation} from "../functions/LanguageFunctions.js";
import {ALL_ANIMALS} from "../ConstantsAnimalsGame.js";
import {gameState} from "../GameState.js";
import {toggleAnimation} from "../functions/ColorFunctions.js";

let phraseARemplir = document.getElementById("phraseARemplirText");
let audioScore = new Audio("assets/sound/score.mp3")
audioScore.volume = 0.5;
let audioLose = new Audio("assets/sound/WrongSound.mp3")

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
            if(checkAnimal(alt)){
                let speech = new SpeechSynthesisUtterance(animal.innerHTML);
                speech.lang = selectedLanguage;
                window.speechSynthesis.speak(speech);
                phraseARemplir.innerHTML = gameState.completeSentence;
                playAudio(audioScore);
                toggleAnimation('green-border', animal)
                return;
            }
            playAudio(audioLose)
            toggleAnimation('red-border', animal)
       })
    }
}

/**
 * Fonction permettant de jouer un son mis en paramètre
 * @param audio
 */
export function playAudio(audio){
    if(audio.played){
        audio.pause();
        audio.currentTime = 0;
    }
    audio.play();
}