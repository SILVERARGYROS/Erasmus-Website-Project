<?php
    session_start();

    $last_visited = "../".$_SESSION['last_visited'];

    // logging out
    unset($_SESSION['username']);
    unset($_SESSION['id']);
    unset($_SESSION['fname']);
    unset($_SESSION['lname']);
    unset($_SESSION['am']);
    unset($_SESSION['email']);

    // We do not use session_destroy(); because some data 
    // from the session must remain, even for guests

    header("location: ../index.html");
?>