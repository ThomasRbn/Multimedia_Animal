import {getURLLanguage, initAnimalsTranslation} from "./functions/LanguageFunctions.js";
import {initChangingLanguageEvent, initClickingOnAnimalEvent,} from "./functions/EventFunctions.js";
import {initLanguageSelector} from "./functions/HTMLFunctions.js";

let languageSelected = getURLLanguage();

window.onload = function () {
    initLanguageSelector(languageSelected);
    initChangingLanguageEvent();
    initAnimalsTranslation(languageSelected);
    initClickingOnAnimalEvent(languageSelected);
}
