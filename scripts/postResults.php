<?php
    session_start();
    require "credentials.php";

    // Connecting to database
    $con = mysqli_connect($host,$user,$password);
    if (!$con){
        echo "problem in the connection"/* .mysqli_error() */;
        die;
    }
    mysqli_select_db($con, $db);

    $result = mysqli_query($con, "UPDATE POST_VARIABLES
                                  SET approved_applications = 'true';");

    mysqli_close($con);
    header("location: ../admin.html");
?>