import {gameState} from "../GameState.js";

/**
 * Recolors the images
 * Green for the good answer, red for the wrong answer
 */
export function recolorImage(){
    let images = document.querySelector('.grid').children;
    for(let i = 0; i < images.length; i++){
        if (images[i].alt === gameState.currentAnimal){
            images[i].style.border = '5px solid green';
        } else {
            images[i].style.border = '5px solid red';
        }
    }
}