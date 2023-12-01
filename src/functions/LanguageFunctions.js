import {ALL_ANIMALS, LANGUAGES} from "../Constants.js";


/**
 * Get the translation of an animal in a specific language
 * @param animalInEnglish the animal in English
 * @param selectedLanguage the language to translate to
 * @returns {string} the animal in the specified language
 */
export function getAnimalTranslation(animalInEnglish, selectedLanguage){
    let languageIndex = getLanguageIndex(selectedLanguage);
    for (let i = 0; i < ALL_ANIMALS.length; i++) {
        if (ALL_ANIMALS[i][0] === animalInEnglish) {
            return ALL_ANIMALS[i][languageIndex];
        }
    }
    return "Animal not found";
}

/**
 * Get the language from the URL
 * @returns {string|string} the language from the URL or "en-US" by default
 */
export function getURLLanguage() {
    let url = window.location.search;
    let urlParams = new URLSearchParams(url);
    let selectedLanguage = urlParams.get("lang");

    // If lang is not defined, set default language to English
    return selectedLanguage ? selectedLanguage : "en-US";
}


/**
 * Initialize the translation of animals
 * with the default language
 */
export function initAnimalsTranslation(selectedLanguage) {
    let animals = document.querySelectorAll("img");

    for (let i = 0; i < animals.length; i++) {
        let animalImg = animals[i];
        let animalNameInEnglish = animalImg.getAttribute("id");
        let translation = getAnimalTranslation(animalNameInEnglish, selectedLanguage);
        animalImg.setAttribute("alt", translation);
    }
}

/**
 * Get the index of a language in the LANGUAGES array
 * @param selectedLanguage the language to get the index of
 * @returns {number} the index of the language in the LANGUAGES array
 */
export function getLanguageIndex(selectedLanguage) {
    return Object.values(LANGUAGES).indexOf(selectedLanguage);
}

