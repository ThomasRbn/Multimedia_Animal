import {getURLLanguage, initAnimalsTranslation} from "./functions/LanguageFunctions.js";
import {
    initChangingLanguageEvent,
    initClickingOnAnimalEvent,
    initClickingPlayButtonEvent,
} from "./functions/EventFunctions.js";
import {initLanguageSelector} from "./functions/HTMLFunctions.js";

let selectedLanguage = getURLLanguage();

window.onload = function () {
    initLanguageSelector(selectedLanguage);
    initChangingLanguageEvent();
    initAnimalsTranslation(selectedLanguage);
    initClickingOnAnimalEvent(selectedLanguage);
    initClickingPlayButtonEvent();
}
