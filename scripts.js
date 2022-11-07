const backgroundImg = document.querySelectorAll(".background-image");

function cambiarBackground(){

	let contador = 1;

	backgroundImg[0].style.opacity = "1";

	setInterval(()=>{

		backgroundImg.forEach(imagen=>{
			imagen.style.opacity = "0";
		});

		backgroundImg[contador].style.opacity = "1";

		contador++
		if (contador == backgroundImg.length) {
			contador = 0;
		}

	}, 10000);

}

cambiarBackground()

/*
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
*/