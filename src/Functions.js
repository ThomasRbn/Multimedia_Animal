import {ALL_ANIMALS, LANGUAGES} from "./Constants.js";

export function getAnimalTranslation(animalInEnglish, language){
    let languageIndex = Object.values(LANGUAGES).indexOf(language);
    for (let i = 0; i < ALL_ANIMALS.length; i++) {
        if (ALL_ANIMALS[i][0] === animalInEnglish) {
            return ALL_ANIMALS[i][languageIndex];
        }
    }
    return "Animal not found";
}