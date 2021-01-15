const lamp = document.querySelector('.lamp');
console.log(lamp);
const clickHandler = () => {
    lamp.style.backgroundColor = getRandomColor();
}

lamp.addEventListener('click', clickHandler);

function getRandomNumber(maxValue = 256) {
    const randomNumber = Math.floor(Math.random() * maxValue);
    return randomNumber;
}
const getRandomColor = () =>
    `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`; // arrow function

