import {gameState} from "../GameState.js";
import {PLAY_STATE_PLAYING, PLAY_STATE_STOPPED} from "../Constants.js";

export function playGame() {
    let playButton = document.getElementById("playButton");
    if (gameState.gameState === PLAY_STATE_STOPPED) {
        gameState.gameState = PLAY_STATE_PLAYING;
        console.log("Game is playing");
        playButton.innerHTML = "Stop";
        return;
    }
    gameState.gameState = PLAY_STATE_STOPPED;
    console.log("Game is stopped");
    playButton.innerHTML = "Play";
}
