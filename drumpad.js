import { SOUNDS, KEY_MAP } from "./constants.js";

const pads = document.querySelectorAll('.pad');
const visual = document.querySelector('.visual');


const playSound = (sounds, index) => {
    const sound = sounds[index];
    const audio = new Audio(sound);
    audio.load();
    audio.play();
};

const animatePad = (index) => {    
    pads[index].style.animation = 'dance 0.1s';
    pads[index].addEventListener('animationend', () => {
        pads[index].style.animation = 'none';
    })
};

const createBubble = (index) => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);

}

const play = (index) => {
    playSound(SOUNDS, index);
    animatePad(index);
    createBubble(index);
};

const keyPressHandler = (evt) => {
    switch (evt.key) {
        case KEY_MAP.kick:
            play(0);
            break;
        case KEY_MAP.cymbal:
            play(1);
            break;
        case KEY_MAP.snare:
            play(2);
            break;
        case KEY_MAP.openhat:
            play(3);
            break;
        case KEY_MAP.longCrash:
            play(4);
            break;
        case KEY_MAP.hihat:
            play(5);
            break;
    
        default:
            break;
    }
}

document.addEventListener('keypress', keyPressHandler);