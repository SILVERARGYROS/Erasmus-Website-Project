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
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Finding user credentials in database
    $result = mysqli_query($con, "SELECT *
                                  FROM USERS, GROUPED, USER_GROUPS
                                  WHERE USERS.id = GROUPED.user_id
                                  AND USER_GROUPS.id = GROUPED.group_id
                                  AND username = '$username'
                                  AND password = '$password';");


    if(mysqli_num_rows($result) < 1){
        $_SESSION['wrongCredentials'] = "Username and/or password were incorrect!";
        // mysqli_close($con);
        header("location: ../login.html");
        mysqli_close($con);
        die;
    }

    // Logging in
    $credentials = mysqli_fetch_assoc($result);
    var_dump($credentials);
    $_SESSION['username'] = $username;
    $_SESSION['id'] = $credentials['user_id'];
    $_SESSION['fname'] = $credentials['fname'];
    $_SESSION['lname'] = $credentials['lname'];
    $_SESSION['am'] = $credentials['am'];
    $_SESSION['email'] = $credentials['email'];
    $_SESSION['group_type'] = $credentials['group_type'];
    $_SESSION['pfp'] = substr($credentials['pfp'], 1);


    $user_id = $credentials['id'];
    $result = mysqli_query($con, "SELECT *
                                FROM APPLIED
                                WHERE user_id = '$user_id';");

    if(mysqli_num_rows($result) < 1){
        $_SESSION['submitted'] = false;
    }
    else{
        $_SESSION['submitted'] = true;
    }


    unset($_SESSION['wrongCredentials']);
    mysqli_close($con);
    header("location: ../index.html");
?>