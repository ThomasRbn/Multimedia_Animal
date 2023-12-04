import {getRandomSentence} from "./SentencesFunctions.js";

export function initPhraseARemplir(selectedLanguage){
    let sentence = getRandomSentence(selectedLanguage);
    let phraseARemplir = document.getElementById("phraseARemplir");
    phraseARemplir.innerHTML = sentence;
}