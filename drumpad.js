import { SOUNDS, KEY_MAP } from "./constants";

const pads = document.querySelectorAll('.pad');



const loadSounds = (sounds) => {
    sounds.forEach((sound) => {
        const audio = new Audio(sound);
        audio.load()
    })
}

loadSounds(SOUNDS);

const keyPressHandler = (evt) => {
    console.log(evt.key);
}

document.addEventListener('keypress', keyPressHandler);