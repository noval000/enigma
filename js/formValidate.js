const numberForm = document.querySelector('.numberForm');
const nameForm = document.querySelector('.nameForm');
const yourApplication = document.querySelector('.yourApplication');


yourApplication.addEventListener('click', (e) => {
	if (nameForm.value.length == 0) {
		alert('Введите имя')
	}
	if (numberForm.value.length != 18) {
		alert('Введите телефон')
	}
	
})