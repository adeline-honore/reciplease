'use strict';   // Mode strict du JavaScript

/***********************************************************************************/
/* ******************************** FONCTIONS *********************************/
/***********************************************************************************/

function showHide(){
	
	let button = document.querySelectorAll('.toggle-button');
	
	for (let i = 0 ; i < button.length ; ++i) {
		button[i].onclick = function() {
			let nextShowHide = button[i].nextElementSibling;
			nextShowHide.classList.toggle("show");
        };
    }
}
