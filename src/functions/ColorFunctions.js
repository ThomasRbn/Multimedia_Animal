import {gameState} from "../GameState.js";

/**
 * Recolors the images
 * Green for the good answer, red for the wrong answer
 */
export function recolorImage(){
    let images = document.querySelector('.grid').children;
    for(let i = 0; i < images.length; i++){
        if (images[i].alt === gameState.currentAnimal){
            toggleAnimation('green-border', images[i])
        } else {
            toggleAnimation('red-border', images[i])
        }
    }
}

function toggleAnimation(name, node) {
    node.classList.toggle(name);
    setTimeout(function() {
        node.classList.toggle(name);
    }, 1500);
}