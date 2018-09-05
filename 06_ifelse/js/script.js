console.log('You are at' +window.location);
const Image = document.querySelector('.imageBlock')
let answer = prompt("Сколько тебе лет?");
answer = parseInt(answer);
 if(answer<18) {
 	Image.style.backgroundImage = "url(img/lol.jpg )"
 	 } else if(answer<=25) {
 	 	Image.style.backgroundImage = "url(https://survley.com/assets/img/image/WhoWouldThrowYouTheBestBirthdayBash.jpg)"

 	 } else if (answer>50){Image.style.backgroundImage = "url(https://yandex.ru/images/search?text=home&img_url=https%3A%2F%2Fwww.hurrem.com%2Fwp-content%2Fuploads%2F2014%2F05%2Fev-harcamalarindan-kismak.jpg&pos=1&rpt=simage&lr=10747)"

 	 }