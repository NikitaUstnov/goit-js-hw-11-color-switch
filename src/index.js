// import colors from '/colors-arr';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');

// startBtnRef.addEventListener('click', startColorCahenge);
// stopBtnRef.addEventListener('click', stopColorsChange);

startBtnRef.addEventListener('click', () => {
  startBtnRef.disabled = true;
  itervalId = setInterval(colorRamdomSwocherBody, 1000);
});
stopBtnRef.addEventListener('click', () => {
  startBtnRef.disabled = false;
  clearInterval(itervalId);
});

let itervalId = null;

// function startColorCahenge() {
//   startBtnRef.disabled = true;
//   itervalId = setInterval(colorRamdomSwocherBody, 1000);
// }

function colorRamdomSwocherBody() {
  document.body.style.background =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

// function stopColorsChange() {
//   startBtnRef.disabled = false;
//   clearInterval(itervalId);
// }

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
