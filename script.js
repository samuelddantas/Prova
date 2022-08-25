quadrado = document.getElementsByClassName("quadrados");
title = document.getElementById("title2");
function sortear() {

	var quadrado = document.getElementsByClassName("quadrados");
	var title = document.getElementById("title2");
	var certo = Math.floor(Math.random() * quadrado.length);

	for (var i = 0; i < quadrado.length; i++) {

		if (i == certo) {
			var red = Math.floor(Math.random() * 256);
			var green = Math.floor(Math.random() * 256);
			var blue = Math.floor(Math.random() * 256);
			quadrado[i].style.backgroundColor = "rgb("+red+","+green+","+blue+")";
		} else {
			var r = Math.floor(Math.random() * 256);
			var g = Math.floor(Math.random() * 256);
			var b = Math.floor(Math.random() * 256);

			quadrado[i].style.backgroundColor = "rgb("+r+","+g+","+b+")";
		}

		title.innerHTML ="rgb("+red+", "+green+", "+blue+")";
		
}	

}

function acertar(a) {

	if (title.innerHTML == a.style.backgroundColor) {
	alert("você acertou");
	alert(a.style.backgroundColor);

	sortear();
	
	} else {
		alert("você errou");
		alert(a.style.backgroundColor);
		a.style.backgroundColor = "#120907";
	}

	
}