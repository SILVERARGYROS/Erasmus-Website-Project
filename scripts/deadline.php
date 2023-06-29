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

    $deadline_start = $_POST['date_start'];
    $deadline_end = $_POST['date_end'];

    $result = mysqli_query($con, "UPDATE SYSTEM_VARIABLES
                                  SET deadline_start = '$deadline_start', deadline_end = '$deadline_end';");

    $_SESSION['deadline'] = "updated";
    mysqli_close($con);
    header("location: ../deadline.html");
?>