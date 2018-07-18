const addNotice = document.querySelector('.add');
const notice = document.querySelector('.notice');

addNotice.addEventListener('click', () => {

	// Notice section
	let title = document.querySelector('.title').value;
	let descr = document.querySelector('.description').value;
	const itemNote = document.createElement('div');
	itemNote.className = 'item';
	const titleNote = document.createElement('p');
	titleNote.className = 'titleNote';
	titleNote.textContent = title;
	const descriptionNote = document.createElement('p');
	descriptionNote.className = 'descriptionNote';
	descriptionNote.textContent = descr;
	itemNote.appendChild(titleNote);
	itemNote.appendChild(descriptionNote);
	notice.appendChild(itemNote);

	// Time section
	const date = new Date();
	const year = date.getFullYear();
	const day = date.getDate();
	const monthList = new Array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 
        'августа', 'сентября', 'октября', 'ноября', 'декабря');
	const month = monthList[date.getMonth()];
	const timeWrapper = document.createElement('div');
	timeWrapper.className = 'time_wr';
	const timeBlock = document.createElement('span');
	timeBlock.innerHTML = 'Дата публикации' + ' ' + day + ' ' + month + ' ' + year;
	timeWrapper.appendChild(timeBlock);
	notice.appendChild(timeWrapper);

	// Time of create note
	const timeCreateNote = document.createElement('div');
	const timer = document.createElement('div');
	timeCreateNote.className = 'time_create';
	timer.className = 'timer';
	
	let runTimer = function() {
		let timerId;
        let sec = 0;
        let min = 0;
        let hour = 0;
        timerId = setTimeout(function tick() {
            if (sec === 59) {
                min++;
                sec = -1;
            } else if (min === 59) {
            	hour++;
                min = -1;
            }
            sec++;
            timer.innerHTML = 'Создана' + ' ' + `${hour}:${min}:${sec}` + ' ' + 'назад';
            timerId = setTimeout(tick, 1000)
        }, 1000);
    }();

    timeCreateNote.appendChild(timer);
	notice.appendChild(timeCreateNote);
		
	modal.hidden = true;
});