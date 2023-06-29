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

    // Getting deadline date data from server
    $result = mysqli_query($con, "SELECT * 
                                  FROM SYSTEM_VARIABLES;");

    $row = mysqli_fetch_assoc($result);
    
    echo json_encode($row);

    mysqli_close($con);
?>