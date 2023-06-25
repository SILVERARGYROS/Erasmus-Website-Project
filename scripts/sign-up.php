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
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$am = $_POST['am'];
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];

// Generating upload folder and profile pic   
mkdir("../uploads/$username", 0777, true);
echo copy("../uploads/!general!/default.png", "../uploads/$username/default.png");
$pfp = "../uploads/$username/profile_pic.png";

// Adding user to database
$result = mysqli_query($con, "INSERT INTO USERS (fname, lname, am, email, username, password, pfp) 
                              VALUES ('$fname', '$lname', '$am', '$email', '$username', '$password', '$pfp')");

// Relating user to group
$result = mysqli_query($con, "SELECT id
                              FROM USERS
                              WHERE am = '$am'");

$user_id = mysqli_fetch_assoc($result)['id'];


$result = mysqli_query($con, "SELECT id
                              FROM USER_GROUPS
                              WHERE group_type = 'registered user'");

$group_id = mysqli_fetch_assoc($result)['id'];

$result = mysqli_query($con, "INSERT INTO GROUPED (user_id, group_id) 
                              VALUES ($user_id, $group_id)");


// Logging in
$_SESSION['username'] = $username;
$_SESSION['fname'] = $credentials['fname'];
$_SESSION['lname'] = $credentials['lname'];
$_SESSION['am'] = $credentials['am'];
$_SESSION['email'] = $credentials['email'];


unset($_SESSION['wrongCredentials']);
mysqli_close($con);
header("location: ../index.html");
?>