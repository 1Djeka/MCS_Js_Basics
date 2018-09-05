console.log('You are at' +window.location);
const Image = document.querySelector('.imageBlock')
let answer = prompt("Сколько тебе лет?");
answer = parseInt(answer);
(answer >= 18) ? Image.style.backgroundImage = 'url(https://station-hotels.ru/wp-content/uploads/1468840095178.jpg)' : Image.style.backgroundImage = 'url(img/lol.jpg)';