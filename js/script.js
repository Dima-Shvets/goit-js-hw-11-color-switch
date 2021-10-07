import colors from './data.js'
import refs from './refs.js'

const INTERVAL = 1000;
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setBackgroundColor = () => {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
}

const onStartBtnPress = () => {
  intervalId = setInterval(() => {
  setBackgroundColor()
},
    INTERVAL)
  
  refs.startBtn.disabled = true;
}

const onStopBtnPress = () => {
  clearInterval(intervalId);

  refs.startBtn.disabled = false;
}

refs.startBtn.addEventListener('click', onStartBtnPress);
refs.stopBtn.addEventListener('click', onStopBtnPress);




