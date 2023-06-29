<?php
    session_start();
    require "credentials.php";

    //connecting to database
    $con = mysqli_connect($host,$user,$password);
    if (!$con){
        echo "problem in the connection"/* .mysqli_error() */;
        die;
    }
    mysqli_select_db($con, $db);

    $username = $_GET['username'];
    $result = mysqli_query($con, "SELECT id 
                                  FROM USERS 
                                  WHERE username = '$username';");

    $num_results = mysqli_num_rows($result);


    if($num_results > 0){
        echo "unavailable";
    }
    else if($num_results == 0){
        echo "available";
    }
    else{
        echo "error";
    }

    mysqli_close($con);
?>