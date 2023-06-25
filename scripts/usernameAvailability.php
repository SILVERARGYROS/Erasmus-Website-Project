<?php
    $con = mysqli_connect("localhost:3306", "root", "");
    if(!$con){
        die ('Could not connect: '.mysqli_error($con));
    }
    mysqli_select_db($con, "ErasmApp");

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