/**
 * Initialize the event when the user
 * changes the language
 * The page is refreshed with the new language
 * and load new translations for images
 */
export function initChangingLanguageEvent() {
    let languageSelector = document.querySelector("#languageSelector");
    languageSelector.addEventListener("change", function () {
        let languageSelected = languageSelector.value;
        window.location.href = "?lang=" + languageSelected;
    });
}

/**
 * Initialize the event when the user
 * clicks on an animal
 * The animal is translated in the language selected
 * @param {string} languageSelected - The language selected by the user
 */
export function initClickingOnAnimalEvent(languageSelected) {
    let animals = document.querySelectorAll("img");

    for (let i = 0; i < animals.length; i++) {
        let animalImg = animals[i];
        animalImg.addEventListener("click", function () {
            let speech = new SpeechSynthesisUtterance(animalImg.getAttribute("alt"));
            speech.lang = languageSelected;
            window.speechSynthesis.speak(speech);
        });
    }
}