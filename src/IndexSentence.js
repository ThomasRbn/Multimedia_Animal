import {
    initChangingLanguageEvent,
} from "./functions/EventFunctions.js";
import {initLanguageSelector} from "./functions/HTMLFunctions.js";
import {getURLLanguage} from "./functions/LanguageFunctions.js";
import {
    initAnimauxAAjouter,
    initClickingOnAnimalEvent,
    initPhraseARemplir
} from "./functionsSentences/EventSentence.js";

let selectedLanguage = getURLLanguage();

window.onload = function () {
    initLanguageSelector(selectedLanguage);
    initChangingLanguageEvent();
    initPhraseARemplir(selectedLanguage);
    initAnimauxAAjouter(selectedLanguage);
    initClickingOnAnimalEvent(selectedLanguage)
}