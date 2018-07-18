const addBtn = document.querySelector('.add_notice');
const modal = document.querySelector('.modal');

addBtn.addEventListener('click', () => {
	modal.hidden = false;
	let cleanTitle = document.querySelector('.title').value = '';
	let cleanNote = document.querySelector('.description').value = '';
});