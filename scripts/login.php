<?php
session_start();
//connecting to database
$con = mysqli_connect("localhost:3306","root","");
if (!$con){
    echo "problem in the connection".mysqli_error();
    die;
}
mysqli_select_db($con, "ErasmApp");

// Form data
$username = $_POST['username'];
$password = $_POST['password'];

// Adding user to database
// Relating user to group
$result = mysqli_query($con, "SELECT *
                              FROM USERS
                              WHERE username = '$username'
                              AND password = '$password'");


if(mysqli_num_rows($result) < 1){
    $_SESSION['wrongCredentials'] = "Username and/or password were incorrect!";
    // mysqli_close($con);
    header("location: ../login.html");
    die;
}

$credentials = mysqli_fetch_assoc($result);
$_SESSION['username'] = $username;
$_SESSION['fname'] = $credentials['fname'];
$_SESSION['lname'] = $credentials['lname'];
$_SESSION['am'] = $credentials['am'];
$_SESSION['email'] = $credentials['email'];

unset($_SESSION['wrongCredentials']);
mysqli_close($con);
header("location: ../index.html");
?>