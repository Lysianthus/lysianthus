var containerIsOpen = false;

function closeContainer() {

	if (containerIsOpen == true) {	
		document.getElementById('container').classList.add('morphOut');
		document.getElementById('text-container').classList.add('delayTextOut');
		document.getElementById('text-container').innerHTML = '';
		containerIsOpen = false;

		setTimeout(function(){
			document.getElementById('container').style.display = "none";
			document.getElementById('container').classList.remove('morphOut');
			document.getElementById('text-container').classList.remove('delayTextOut');
		}, 500); // ms it takes to complete animations
	}

}

function openContainer(textId) {
	
	if (containerIsOpen == false) {
		document.getElementById('container').style.display = "block";
		document.getElementById('text-container').innerHTML = texts[textId].content + '<span class="typer"></span>';
		containerIsOpen = true;

	} else {
		closeContainer();
	}

}

function setBgColor(bgColor) {
	document.getElementById('header').style.backgroundColor = bgColor;
}

document.getElementById('header').addEventListener('click', function(event) {
	if (containerIsOpen == true) {
		if (event.target.closest('#container')) return;
		closeContainer();
	}
});
