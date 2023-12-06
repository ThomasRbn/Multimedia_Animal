export let audioScore = new Audio("assets/sound/score.mp3");
audioScore.volume = 0.5;
export let audioLose = new Audio("assets/sound/WrongSound.mp3");

/**
 * Fonction permettant de jouer un son mis en paramètre
 * @param audio
 */
export function playAudio(audio) {
    if (audio.played) {
        audio.pause();
        audio.currentTime = 0;
    }
    if (audio.paused) {
        audio.play();
    }
}