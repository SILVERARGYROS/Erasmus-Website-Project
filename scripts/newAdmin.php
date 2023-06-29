<?php
    // Source: https://stackoverflow.com/questions/4356289/php-random-string-generator
    function generateRandomString($length) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[random_int(0, $charactersLength - 1)];
        }
        return $randomString;
    }



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
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $am = "2022999999999";
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = generateRandomString(10);

    // Generating upload folder and profile pic   
    mkdir("../uploads/$username", 0777, true);
    echo copy("../uploads/!general!/default.png", "../uploads/$username/profile_pic.png");
    $pfp = "../uploads/$username/profile_pic.png";

    // Adding user to database
    $result = mysqli_query($con, "INSERT INTO USERS (fname, lname, am, email, username, password, pfp) 
                                VALUES ('$fname', '$lname', '$am', '$email', '$username', '$password', '$pfp')");

    // Relating user to group
    $user_id = mysqli_insert_id($con);

    $result = mysqli_query($con, "SELECT *
                                FROM USER_GROUPS
                                WHERE group_type = 'administrator'");

    $user_type_info = mysqli_fetch_assoc($result);
    $group_id = $user_type_info['id'];

    $result = mysqli_query($con, "INSERT INTO GROUPED (user_id, group_id) 
                                VALUES ('$user_id', '$group_id')");


    // emailing message with credentials 
    // Source: https://stackoverflow.com/questions/15965376/how-to-configure-xampp-to-send-mail-from-localhost

    // mail($email,"ErasmusApp Admin Credentials","Username: ".$username."\nPassword: ".$password);


    $_SESSION['newAdmin'] = "registered";
    mysqli_close($con);
    header("location: ../newAdmin.html");
?>