var containerIsOpen = false;

function closeContainer() {

	if (containerIsOpen == true) {
		// closing animation
		document.getElementById('container').classList.add('morphOut');
		document.getElementById('text-container').classList.add('delayTextOut');
		document.getElementById('text-container').innerHTML = '';
		containerIsOpen = false;

		// reset to default values after 500ms delay
		setTimeout(function(){
			document.getElementById('container').style.display = "none";
			document.getElementById('container').classList.remove('morphOut');
			document.getElementById('text-container').classList.remove('delayTextOut');
		}, 500); // ms it takes to complete closing animation
	}

}

function openContainer(textId) {
	
	if (containerIsOpen == false) {
		// opening animation
		document.getElementById('container').style.display = "block";
		document.getElementById('text-container').innerHTML = texts[textId].content + '<span class="typer"></span>';
		containerIsOpen = true;

	} else if (containerIsOpen == true) {
		// closing animation first
		closeContainer();

		// opening animation
		setTimeout(function() {
			document.getElementById('container').style.display = "block";
			document.getElementById('text-container').innerHTML = texts[textId].content + '<span class="typer"></span>';
			containerIsOpen = true;
		}, 550); // ms it takes to complete closing animation + 50ms rest
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
