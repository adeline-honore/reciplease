<?php
// le routeur


// indispensable à la création de sessions
session_start();

// liens vers les controlleurs

require('controllers/admin.php');
require('controllers/homePage.php');
require('controllers/contacts.php');

// appel de la page
//vérification si page ... switch

if(isset($_GET['page'])){
    switch($_GET['page']){
        case 'home':
            affichHome();
        break;
        case 'adminH':
            isAdmin();
        break;
        case 'contact':
            affContacts();
        break;
    }
}
else{
    affichHome();
}
    
    
