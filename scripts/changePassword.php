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
    $currentPassword = $_POST['currentPassword'];
    $newPassword = $_POST['newPassword'];

    $result = mysqli_query($con, "SELECT *
                                  FROM USERS
                                  WHERE id = '$id'
                                  AND password = '$currentPassword';");

    var_dump($_POST);
    var_dump($_SESSION['id']);

    if(mysqli_num_rows($result) < 1){
        $_SESSION['wrongCredentials'] = "Current password was incorrect!";
        // mysqli_close($con);
        mysqli_close($con);
        header("location: ../changePassword.html");
        die;
    }

    $result = mysqli_query($con, "UPDATE USERS
                                  SET password = '$newPassword'
                                  WHERE id = '$id';");

    $_SESSION['passwordUpdated'] = "Password was updated successfully.";
    mysqli_close($con);
    header("location: ../changePassword.html");

?>