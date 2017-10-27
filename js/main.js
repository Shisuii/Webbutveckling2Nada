window.addEventListener("resize", reSize);

function reSize() {
	console.log(window.innerWidth/window.innerHeight);	
}

document.body.style.overflow = 'hidden';

document.getElementById("nav-main-menu").addEventListener("onclick", scroll("main-menu"));

function scrollToItem(element) {
	var diff = (element.offsetTop - window.scrollY) / 6;
	
	console.log(diff);
	
	if (Math.abs(diff) > 1) {
		window.scrollTo(0, (window.scrollY + diff));
		clearTimeout(window._TO);
		window._TO = setTimeout(scrollToItemx, 10, element);
	} else {
		window.scrollTo(0, element.offsetTop);
		scrollButton = false;
	}
}

function scroll(elID) {
	console.log(elID);
	scrollToItem(document.getElementById(elID));
}