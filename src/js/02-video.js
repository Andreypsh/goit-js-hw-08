import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log('player', VimeoPlayer);

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

const keys = {
  names: 'videoplayer-current-time',
};

const onPlay = function (data) {
  const currentTime = data.seconds;
  localStorage.setItem(keys.names, currentTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

const playTime = localStorage.getItem(keys.names);
console.log(playTime);
if (playTime) {
  player.setCurrentTime(playTime);
}
