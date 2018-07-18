const enterBtn = document.querySelector('.enter');
const wrapperAuth = document.querySelector('.wrapper_auth');
const listNotice = document.querySelector('.wrapper');
const error = document.querySelector('.error');

enterBtn.addEventListener('click', () => {
	let name = document.querySelector('.name').value;
	let email = document.querySelector('.email').value;
	if (name && email) {
		let user = JSON.stringify({"name": name, "email": email});
		localStorage.setItem('user', user);
		wrapperAuth.hidden = true;
		listNotice.hidden = false;
	} else {
		error.hidden = false;
	}
})