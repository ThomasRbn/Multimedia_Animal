import {SENTENCES_TRANSLATIONS} from "../ConstantsSentenceGame.js";
import {gameState} from "../GameState.js";

/**
 * Get a random sentence from the list of sentences
 * @param selectedLanguage - langue sélectionnée
 * @returns {*} - phrase aléatoire
 */
export function getRandomSentence(selectedLanguage) {
    //selections d'un index aléatoire entre 0 et 8
    let animalIndex = Math.floor(Math.random() * Object.keys(SENTENCES_TRANSLATIONS).length);
    let sentence =  SENTENCES_TRANSLATIONS[animalIndex][selectedLanguage.split('-')[0]][Math.floor(Math.random() * 3)];
    replaceAnimalInSentence(sentence);
    return sentence;
}

/**
 * Get the animal associated to the sentence
 * @param sentence - sentence to get the animal
 * @returns {string} - animal associated to the sentence
 */
export function replaceAnimalInSentence(sentence){
    let sentenceSplitted = sentence.split(' ');
    let animal = sentenceSplitted.filter(word => word.toUpperCase() === word).toString();
    gameState.currentAnimal = animal;
    sentenceSplitted[sentenceSplitted.indexOf(animal)] = '______';
}

/**
 * Check if the animal is the same as the one in the sentence
 * @param animal - animal to check
 * @returns {boolean} - true if the animal is the same as the one in the sentence
 */
export function checkAnimal(animal){
    return gameState.currentAnimal === animal;
}
