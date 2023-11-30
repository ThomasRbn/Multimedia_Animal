import {LANGUAGES} from "../Constants.js";


/**
 * Initialize the language selector
 * with all available languages
 * saved in Constants.js
 * @param language - The default language
 * @returns {string} - The selected language
 */
export function initLanguageSelector(language) {
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