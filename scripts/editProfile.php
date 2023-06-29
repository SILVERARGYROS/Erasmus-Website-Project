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

    $id = $_SESSION['id'];
    $newfname = $_POST['fname'];
    $newlname = $_POST['lname'];
    $newam = $_POST['am'];
    $newemail = $_POST['email'];

    $result = mysqli_query($con, "UPDATE USERS
                                  SET fname = '$newfname', lname = '$newlname', am = '$newam', email = '$newemail' 
                                  WHERE id = '$id';");

    $_SESSION['profileUpdated'] = "Profile was updated successfully.";
    mysqli_close($con);
    header("location: ../editProfile.html");

?>