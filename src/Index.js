import {LANGUAGES} from "./Constants.js";
import {getAnimalTranslation} from "./Functions.js";


window.onload = function () {
    let languageSelected = getURLLanguage();
    console.log(languageSelected)
    initLanguageSelector(languageSelected);
    initChangingLanguageEvent();
    initAnimalsTranslation(languageSelected);
}

/**
 * Initialize the language selector
 * with all available languages
 * saved in Constants.js
 */
function initLanguageSelector(language) {
    let parent = document.querySelector(".selectors");

    let labelSelector = document.createElement("label");
    labelSelector.setAttribute("for", "languageSelector");
    labelSelector.innerHTML = "Language: ";

    let languageSelector = document.createElement("select");
    languageSelector.setAttribute("id", "languageSelector");


    // Create an option for each language
    for (let i = 0; i < Object.keys(LANGUAGES).length; i++) {
        let option = document.createElement("option");

        // Set default language to English
        if (Object.values(LANGUAGES)[i] === language) {
            option.setAttribute("selected", "selected");
        }

        option.setAttribute("value", Object.values(LANGUAGES)[i]);
        option.innerHTML = Object.keys(LANGUAGES)[i];
        languageSelector.appendChild(option);
    }

    parent.appendChild(labelSelector);
    parent.appendChild(languageSelector);
    return languageSelector.value;
}

/**
 * Initialize the event when the user
 * changes the language
 * The page is refreshed with the new language
 * and load new translations for images
 */
function initChangingLanguageEvent() {
    let languageSelector = document.querySelector("#languageSelector");
    languageSelector.addEventListener("change", function () {
        let languageSelected = languageSelector.value;
        window.location.href = "?lang=" + languageSelected;
    });
}

/**
 * Initialize the translation of animals
 * with the default language
 */
function initAnimalsTranslation(language) {
    let animals = document.querySelectorAll("img");

    for (let i = 0; i < animals.length; i++) {
        let animalImg = animals[i];
        let animalNameInEnglish = animalImg.getAttribute("id");
        let translation = getAnimalTranslation(animalNameInEnglish, language);
        animalImg.setAttribute("alt", translation);
    }
}


function getURLLanguage() {
    let url = window.location.search;
    let urlParams = new URLSearchParams(url);

    // Obtenir la valeur du paramètre "lang" de l'URL
    let language = urlParams.get("lang");

    // Vérifier si la valeur de la langue est définie, sinon retourner "en-US" par défaut
    return language ? language : "en-US";
}

