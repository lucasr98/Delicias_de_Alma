const backgroundImgUno = document.getElementById("backgroundImgUno"),
backgroundImgDos = document.getElementById("backgroundImgDos"),
backgroundImgTres = document.getElementById("backgroundImgTres");

let contador = 0;

function cambiarBackground(){
	if(contador == 0){
		backgroundImgUno.style.opacity = "1";
		backgroundImgDos.style.opacity = "0";
		backgroundImgTres.style.opacity = "0";
		contador = 1;
		console.log(contador)
	}
	else if(contador == 1){
		backgroundImgUno.style.opacity = "0";
		backgroundImgDos.style.opacity = "1";
		backgroundImgTres.style.opacity = "0";
		contador = 2;
		console.log(contador)
	}
	else if(contador == 2){
		backgroundImgUno.style.opacity = "0";
		backgroundImgDos.style.opacity = "0";
		backgroundImgTres.style.opacity = "1";
		contador = 0;
		console.log(contador)
	}
}

cambiarBackground();

setInterval(cambiarBackground, 10000);