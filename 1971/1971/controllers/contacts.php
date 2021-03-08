<?php 

require('models/contacts.php');

function affContacts(){
    
    $template="contact";
    include('www/layout.phtml');
}


function addComm(){
    if(isset($_POST['pname']))
    {
        // récupération des données du formulaire
        $pname=htmlspecialchars($_POST['c_pname']);
        $name=htmlspecialchars($_POST['c_name']);
        $tel=htmlspecialchars($_POST['c_tel']);
        $email=htmlspecialchars($_POST['c_email']);
        $text=htmlspecialchars($_POST['c_text']);
        
        // envoie à la bdd
        toAddComm($pname,$name,$tel,$email,$text);
        header('Location:index.php?page=contact');
    }
    else
    {
        $template="contact";
        include('www/layout.phtml');
    }
}



function addStud(){
    
}
