'use strict';
/*---------CODE PRINCIPAL------*/

document.addEventListener('DOMContentLoaded', function(){
	
	// effet toggle de l'affichage des boutons class="toogle-button"
	showHide();
	
	
	// POUR LE SLIDER
	cpt = 0;
	timer = null;
	
    //let prev = document.getElementById("slider-prev");
	//let next = document.getElementById("slider-next");
	
	
	//next.addEventListener('click', nextSlide);
	//prev.addEventListener('click', prevSlide);

	figureSlider = document.querySelector("#sliderhome img");
	//header = document.querySelector("header");
	//fig = document.querySelector("figure");
	//div = document.querySelector("div");
	
	// Lecture au chargement de la page
	play();
	
	// ajustement des images su slide
	//hauteurSlide();
	
});
