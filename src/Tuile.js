export default class Tuile {
    constructor(image, word) {
        this.image = image;
        this.word = word;
    }

    getPronunciation(language) {
        let speechSynthesisUtterance = new SpeechSynthesisUtterance(this.word);
        speechSynthesisUtterance.lang = language;
        console.log(speechSynthesisUtterance);
        return speechSynthesisUtterance;
    }
}
