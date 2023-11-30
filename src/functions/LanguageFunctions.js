import {ALL_ANIMALS, LANGUAGES} from "../Constants.js";

/**
 * Get the translation of an animal in a specific language
 * @param animalInEnglish the animal in English
 * @param language the language to translate to
 * @returns {string} the animal in the specified language
 */
export function getAnimalTranslation(animalInEnglish, language){
    let languageIndex = Object.values(LANGUAGES).indexOf(language);
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
    let language = urlParams.get("lang");

    // If lang is not defined, set default language to English
    return language ? language : "en-US";
}


/**
 * Initialize the translation of animals
 * with the default language
 */
export function initAnimalsTranslation(language) {
    let animals = document.querySelectorAll("img");

    for (let i = 0; i < animals.length; i++) {
        let animalImg = animals[i];
        let animalNameInEnglish = animalImg.getAttribute("id");
        let translation = getAnimalTranslation(animalNameInEnglish, language);
        animalImg.setAttribute("alt", translation);
    }
}

