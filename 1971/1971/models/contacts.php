<?php

function toAddComm()
{
    // récupération de la bdd
    $bdd=bd_connect();
    
    // préparation de la requête
    $query=$bdd->prepare("INSERT TO comments () VALUES(?????)");
    
    // execution de la requête 
    $query->execute(array());
}

