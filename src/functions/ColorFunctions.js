import {gameState} from "../GameState.js";

/**
 * Recolors the images
 * Green for the good answer, red for the wrong answer
 */
export function recolorImage(animalClicked) {
    let images = document.querySelector('.grid').children;
    for (let i = 0; i < images.length; i++) {
        if(images[i] === animalClicked && images[i].alt === gameState.currentAnimal){
            toggleAnimation('green-border', images[i])
            continue;
        }
        if(images[i] === animalClicked){
            toggleAnimation('red-border', images[i])
            continue;
        }
        if (images[i].alt === gameState.currentAnimal) {
            toggleAnimation('green-border_other', images[i])
            continue;
        }
        toggleAnimation('red-border_other', images[i])
    }
}

function toggleAnimation(name, node) {
    node.classList.toggle(name);
    setTimeout(function () {
        node.classList.toggle(name);
    }, 1500);
}