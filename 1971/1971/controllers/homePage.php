<?php 

//require('model/meal.php');

function affichHome(){
    
    //récupération de tous les meals de la base de données
    //$meals=getMeals();
    //var_dump($meals);
    
    // indication du template (nom)
    $template='home';
    
    //chargement de ma vue
    include('www/layout.phtml');
}