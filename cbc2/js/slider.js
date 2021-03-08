'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

// tableau contenant les lobjets slide avec leur source et leur légende
let tableSlider = 
[
    { imageSlider: 'img/slider/homeslider1.jpg'},
    { imageSlider: 'img/slider/homeslider2.jpg'},
    { imageSlider: 'img/slider/homeslider3.jpg'}
];

let cpt;
let timer;
let figureSlider;
let header;
let fig;
let div;

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

// fonction SLIDE SUIVANTE 
function nextSlide()
{
	//incrementation du compteur
    cpt++;
    
    //vérification du compteur et réinitialisation si besoin
    if(cpt >= tableSlider.length)
    {
		cpt = 0;
	}
	
    //affichage des nouvelles données
	figureSlider.src = tableSlider[cpt].imageSlider;
	
}
/*

// fonction SLIDE PRECEDANTE 
function prevSlide()
{
	// décrementation du compteur
    cpt--;
    
    //vérification du compteur
    if(cpt < 0)
    {
		cpt = table.length-1;
	}
	
    //affichage des nouvelles données
	figure.src = table[cpt].image;

}
*/

//fonction pour la lecture automatique du carroussel
function play()
{
		timer = setInterval(nextSlide, 3000);
}


function hauteurSlide(){

	//let larg = document.body.clientWidth;
	//let haut = document.body.clientHeight;
	//let haut = screen.height;
	//let haut = document.clientHeight;
	let larg = window.innerWidth;
	let haut = window.innerHeight;

	if(larg > 1050)
	{
		//fig.style.height = haut + 'px';
		header.style.height = haut + 'px';
		//figure.style.height = haut + 'px';
		div.style.height = haut + 'px';

		console.log("Cette fenêtre fait " + larg + " de large et "+haut+" de haut");
	}
}






