
const btnAnswerOne = document.querySelector('#oneQest');
const btnAnswerTwo = document.querySelector('#twoQest');
const btnAnswerThree = document.querySelector('#threeQest');
const btnAnswerFour = document.querySelector('#fourQest');
const btnAnswerFive = document.querySelector('#fiveQest');
const btnAnswerSix = document.querySelector('#sixQest');


const blockAnswerOne = document.querySelector('.blockAnswerOne');
const blockAnswerTwo = document.querySelector('.blockAnswerTwo');
const blockAnswerThree = document.querySelector('.blockAnswerThree');
const blockAnswerFour = document.querySelector('.blockAnswerFour');
const blockAnswerFive = document.querySelector('.blockAnswerFive');
const blockAnswerSix = document.querySelector('.blockAnswerSix');


const transformBtnOne = document.querySelector('.transformBtnOne');
const transformBtnTwo = document.querySelector('.transformBtnTwo');
const transformBtnThree = document.querySelector('.transformBtnThree');
const transformBtnFour = document.querySelector('.transformBtnFour');
const transformBtnFive = document.querySelector('.transformBtnFive');
const transformBtnSix = document.querySelector('.transformBtnSix');

btnAnswerOne.addEventListener('click' , () => {
	blockAnswerOne.style.display = blockAnswerOne.style.display === "block" ? "none" : "block";
	transformBtnOne.style.transform = blockAnswerOne.style.display === "block" ? "rotateZ(45deg)" : "rotateZ(0deg)"
	transformBtnOne.style.transition = blockAnswerOne.style.display === "block" ? "all .3s ease" : "all .3s ease"
})

btnAnswerTwo.addEventListener('click' , () => {
	blockAnswerTwo.style.display = blockAnswerTwo.style.display === "block" ? "none" : "block";
	transformBtnTwo.style.transform = blockAnswerTwo.style.display === "block" ? "rotateZ(45deg)" : "rotateZ(0deg)"
	transformBtnTwo.style.transition = blockAnswerTwo.style.display === "block" ? "all .3s ease" : "all .3s ease"
})

btnAnswerThree.addEventListener('click' , () => {
	blockAnswerThree.style.display = blockAnswerThree.style.display === "block" ? "none" : "block";
	transformBtnThree.style.transform = blockAnswerThree.style.display === "block" ? "rotateZ(45deg)" : "rotateZ(0deg)"
	transformBtnThree.style.transition = blockAnswerThree.style.display === "block" ? "all .3s ease" : "all .3s ease"
})

btnAnswerFour.addEventListener('click' , () => {
	blockAnswerFour.style.display = blockAnswerFour.style.display === "block" ? "none" : "block";
	transformBtnFour.style.transform = blockAnswerFour.style.display === "block" ? "rotateZ(45deg)" : "rotateZ(0deg)"
	transformBtnFour.style.transition = blockAnswerFour.style.display === "block" ? "all .3s ease" : "all .3s ease"
})

btnAnswerFive.addEventListener('click' , () => {
	blockAnswerFive.style.display = blockAnswerFive.style.display === "block" ? "none" : "block";
	transformBtnFive.style.transform = blockAnswerFive.style.display === "block" ? "rotateZ(45deg)" : "rotateZ(0deg)"
	transformBtnFive.style.transition = blockAnswerFive.style.display === "block" ? "all .3s ease" : "all .3s ease"
})

btnAnswerSix.addEventListener('click' , () => {
	blockAnswerSix.style.display = blockAnswerSix.style.display === "block" ? "none" : "block";
	transformBtnSix.style.transform = blockAnswerSix.style.display === "block" ? "rotateZ(45deg)" : "rotateZ(0deg)"
	transformBtnSix.style.transition = blockAnswerSix.style.display === "block" ? "all .3s ease" : "all .3s ease"
})