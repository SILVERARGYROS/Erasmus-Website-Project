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


    // Form data
    $name = $_POST['name'];
    $country = $_POST['country'];

    // Checking if uni already exists
    $result = mysqli_query($con, "SELECT *
                                  FROM UNIVERSITIES
                                  WHERE name = '$name'
                                  AND country = '$country'");

    if(mysqli_num_rows($result) > 1){
        $_SESSION['wrongCredentials'] = "Uni already exists";
        mysqli_close($con);
        header("location: ../addUni.html");    
    }

    // Adding user to database
    $result = mysqli_query($con, "INSERT INTO USERS (fname, lname, am, email, username, password, pfp) 
                                VALUES ('$fname', '$lname', '$am', '$email', '$username', '$password', '$pfp')");


    $_SESSION['newUni'] = "University successfully added.";
    unset($_SESSION['wrongCredentials']);
    mysqli_close($con);
    header("location: ../addUni.html");
?>