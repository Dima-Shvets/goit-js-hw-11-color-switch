import colors from './data.js'
import refs from './refs.js'

const INTERVAL = 1000;
let intervalId = null;
let currentColor = "";

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomOriginalColorGenerator = () => {
  let newColor = "";
  do {
    newColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    console.log('newcolor', newColor)
  } while (currentColor === newColor);

  currentColor = newColor;
}


const setBackgroundColor = () => {
  randomOriginalColorGenerator()
  refs.body.style.backgroundColor = currentColor;
  console.log('current color', currentColor);
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




