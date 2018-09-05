console.log('You are at' +window.location);
const byTag = document.getElementsByTagName('div')
const byClass = document.getElementsByClassName('myClass')
const byId = document.getElementById('myID')
console.log(byTag, byClass, byId)

const allBySelector = document.querySelectorAll('.coolClass.mine')
const fisrtBySelector = document.querySelector('.coolClass.mine')
console.log(allBySelector,fisrtBySelector)