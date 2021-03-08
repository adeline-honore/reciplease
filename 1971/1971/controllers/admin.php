<?php

//require('model/admin.php');

function isAdmin(){
    //si la session existe return true
    if (isset($_SESSION['id_a'])){
        return true;
    }
    //sinon return false
    else{
        return false;
    }
}

