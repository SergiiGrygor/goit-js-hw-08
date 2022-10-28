import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


player.on('timeupdate', throttle(getCurrentTime, 1000));

function getCurrentTime({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds)
}


if (localStorage.getItem('videoplayer-current-time')) {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    player.setCurrentTime(currentTime);
}

