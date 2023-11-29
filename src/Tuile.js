export default class Tuile {
    constructor(image, word) {
        this.image = image;
        this.word = word;
    }

    pronounceWord() {
        let speechSynthesisUtterance = new SpeechSynthesisUtterance(this.word);
        speechSynthesisUtterance.lang = "fr-FR";
        return speechSynthesisUtterance;
    }
}
