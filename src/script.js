import Tuile from './Tuile.js';

window.onload = function () {
    let chat = new Tuile("assets/img/CAT.png", "Poulet à la boconaise");
    let voix = chat.pronounceWord();
    window.speechSynthesis.speak(voix);
}
