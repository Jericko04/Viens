document.addEventListener("DOMContentLoaded", function() {
	function createParagraph() {
		let para = document.createElement('p');
		para.textContent = 'May your life be filled with success and achievements. You have come a long way but still, miles to go. Congratulations!';
		document.body.appendChild(para);
	}

	const buttons = document.querySelectorAll('button');

	for(let i = 0; i < buttons.length ; i++) {
		buttons[i].addEventListener('click', createParagraph);
	}
});	