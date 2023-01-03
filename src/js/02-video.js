import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const setTime = () => {
    try { 
        const savedTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));
        
        if (savedTime === null) {
            return;
        }

        player.setCurrentTime(savedTime);
    }
    catch (err) {
        console.error(err);
    }
}

setTime();

const saveTime = (event) => {
    localStorage.setItem("videoplayer-current-time", event.seconds);
}

player.on('timeupdate', throttle(saveTime, 1000));