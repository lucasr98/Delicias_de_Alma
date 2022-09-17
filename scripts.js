const backgroundImgUno = document.getElementById("backgroundImgA"),
backgroundImgDos = document.getElementById("backgroundImgB"),
backgroundImgTres = document.getElementById("backgroundImgC"),
backgroundImgCuatro = document.getElementById("backgroundImgD"),
backgroundImgCinco = document.getElementById("backgroundImgE");

let contador = 0;

function cambiarBackground(){
	if(contador == 0){
		backgroundImgUno.style.opacity = "1";
		backgroundImgDos.style.opacity = "0";
		backgroundImgTres.style.opacity = "0";
		backgroundImgCuatro.style.opacity = "0";
		backgroundImgCinco.style.opacity = "0";
		contador = 1;
	}
	else if(contador == 1){
		backgroundImgUno.style.opacity = "0";
		backgroundImgDos.style.opacity = "1";
		backgroundImgTres.style.opacity = "0";
		backgroundImgCuatro.style.opacity = "0";
		backgroundImgCinco.style.opacity = "0";
		contador = 2;
	}
	else if(contador == 2){
		backgroundImgUno.style.opacity = "0";
		backgroundImgDos.style.opacity = "0";
		backgroundImgTres.style.opacity = "1";
		backgroundImgCuatro.style.opacity = "0";
		backgroundImgCinco.style.opacity = "0";
		contador = 3;
	}
	else if(contador == 3){
		backgroundImgUno.style.opacity = "0";
		backgroundImgDos.style.opacity = "0";
		backgroundImgTres.style.opacity = "0";
		backgroundImgCuatro.style.opacity = "1";
		backgroundImgCinco.style.opacity = "0";
		contador = 4;
	}
	else if(contador == 4){
		backgroundImgUno.style.opacity = "0";
		backgroundImgDos.style.opacity = "0";
		backgroundImgTres.style.opacity = "0";
		backgroundImgCuatro.style.opacity = "0";
		backgroundImgCinco.style.opacity = "1";
		contador = 0;
	}
}

cambiarBackground();

setInterval(cambiarBackground, 10000);