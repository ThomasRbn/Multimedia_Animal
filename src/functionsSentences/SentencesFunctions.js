import {SENTENCES_TRANSLATIONS} from "../ConstantsSentenceGame.js";
import {gameState} from "../GameState.js";

/**
 * Get a random sentence from the list of sentences
 * @param selectedLanguage - langue sélectionnée
 * @returns {*} - phrase aléatoire
 */
function getRandomSentence(selectedLanguage) {
    //selections d'un index aléatoire entre 0 et 8
    let animalIndex = Math.floor(Math.random() * Object.keys(SENTENCES_TRANSLATIONS).length);
    return SENTENCES_TRANSLATIONS[animalIndex][selectedLanguage.split('-')[0]][Math.floor(Math.random() * 3)];
}

/**
 * Get the animal associated to the sentence
 * @param sentence - sentence to get the animal
 * @returns {string} - animal associated to the sentence
 */
function getAssociatedAnimal(sentence){
    let sentenceSplitted = sentence.split(' ');
    let animal = sentenceSplitted.filter(word => word.toUpperCase() === word).toString();
    gameState.currentAnimal = animal;
    return animal;
}

/**
 * Check if the animal is the same as the one in the sentence
 * @param animal - animal to check
 * @returns {boolean} - true if the animal is the same as the one in the sentence
 */
function checkAnimal(animal){
    return gameState.currentAnimal === animal;
}
