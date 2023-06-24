<?php
    session_start();

    // Connecting to database
    $con = mysqli_connect("localhost:3306","root","");
    if (!$con){
        echo "Problem with server connection. "/*.mysqli_error()*/;
        die;
    }
    mysqli_select_db($con, "ErasmApp");


    // Initializing variables
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $am = $_POST['am'];
    $percentage = $_POST['percentage'];
    $average = $_POST['average'];
    $english_level = $_POST['english_level'];
    $extra_languages = $_POST['extra_languages'];
    $uni1 = $_POST['uni1'];
    $uni2 = $_POST['uni2'];
    $uni3 = $_POST['uni3'];
    $extra_language_file_list = "";
    
    // ###### Storing files ###### //
    
    
    // Finding user id and username to track storage path
    $result = mysqli_query($con, "SELECT *
                                  FROM USERS
                                  WHERE am = '$am'");

    $user_credentials = mysqli_fetch_assoc($result);
    $user_id = $user_credentials['id'];
    $username = $user_credentials['username'];

    // echo var_dump($_FILES);              //For testing purposes

    // Finding temp names of files
    $grade_file_tmp = $_FILES['grade_file']['tmp_name'];
    $english_file_tmp = $_FILES['english_file']['tmp_name'];
    
    // basename() may prevent filesystem traversal attacks (I don't fully get it ;-;) 
    // Source: https://www.php.net/manual/en/function.move-uploaded-file.php
    $grade_file = basename($_FILES['grade_file']['name'])."pdf";
    $english_file = basename($_FILES['english_file']['name'])."pdf";
    
    // Storing the uploaded files in user's upload folder
    move_uploaded_file($grade_file_tmp, "../uploads/$username/$grade_file");
    move_uploaded_file($english_file_tmp, "../uploads/$username/$english_file");
    
    if(isset($_FILES['extra_language_files'])){

        $files = array_filter($_FILES['extra_language_files']['name']);
        $count = count($files);

        for($i = 0; $i < $count; $i++){
            $extra_language_files_tmp = $_FILES['extra_language_files']['tmp_name'][$i];
            $extra_language_files = basename($_FILES['extra_language_files']['name'][$i].".pdf");
            move_uploaded_file($extra_language_files_tmp, "../uploads/$username/$extra_language_files");
            $extra_language_file_list = $extra_language_file_list.$extra_language_files.";";
        }
    }

    // ###### Updating Database ###### //


    // Inserting new application into database
    $result = mysqli_query($con, "INSERT INTO APPLICATIONS (percentage, average, english_level, extra_languages, grade_file, english_file, extra_language_files, status) 
                                  VALUES ('$percentage', '$average', '$english_level', '$extra_languages', '$grade_file', '$english_file', '$extra_language_file_list', 'Undecided')");


    // Creating new relation (user - application)

    // Finding newly inserted application's id
    $app_id = mysqli_insert_id($con);

    // Inserting new relation
    $result = mysqli_query($con, "INSERT INTO APPLIED (user_id, app_id) 
                                  VALUES ($user_id, $app_id)");


    // Creating new relation (application - universities)
    // Finding uni1 id
    $result = mysqli_query($con, "SELECT id
                                  FROM UNIVERSITIES
                                  WHERE name = '$uni1'");

    $uni1_id = mysqli_fetch_assoc($result)['id'];
    

    // Finding uni2 id
    $result = mysqli_query($con, "SELECT id
                                  FROM UNIVERSITIES
                                  WHERE name = '$uni2'"); 

    $uni2_id = mysqli_fetch_assoc($result)['id'];


    // Finding uni3 id
    $result = mysqli_query($con, "SELECT id
                                  FROM UNIVERSITIES
                                  WHERE name = '$uni3'");

    $uni3_id = mysqli_fetch_assoc($result)['id'];


    // Inserting new relation
    $result = mysqli_query($con, "INSERT INTO SELECTED (app_id, uni1_id, uni2_id, uni3_id) 
                                  VALUES ($app_id, $uni1_id, $uni2_id, $uni3_id)");


    // ###### Closing ###### //

    $_SESSION['application'] = "submitted";
    mysqli_close($con);
    header("location: ../application.html");
?>