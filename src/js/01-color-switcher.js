

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
  }
  
  let intervalId;
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  
  startButton.addEventListener('click', () => {
    startButton.disabled = true;
    intervalId = setInterval(changeBackgroundColor, 1000);
  });
  
  stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    startButton.disabled = false;
  });