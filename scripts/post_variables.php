<?php
    require "credentials.php";

    // Connecting to database
    $con = mysqli_connect($host,$user,$password);
    if (!$con){
        echo "problem in the connection"/* .mysqli_error() */;
        die;
    }
    mysqli_select_db($con, $db);

    $result = mysqli_query($con, "SELECT * 
                                  FROM POST_VARIABLES;");

    $row = mysqli_fetch_assoc($result);

    if($row['approved_applications'] == "true")
    {
        $_SESSION['approved_applications'] = true;
    }
    else{
        $_SESSION['approved_applications'] = false;
    }

    mysqli_close($con);
?>