<?php
    require "credentials.php";

    // Connecting to database
    $con = mysqli_connect($host,$user,$password);
    if (!$con){
        echo "problem in the connection"/* .mysqli_error() */;
        die;
    }
    mysqli_select_db($con, $db);

    $query = "  SELECT am, percentage, average, english_level
                FROM APPLICATIONS, APPLIED, USERS
                WHERE APPLICATIONS.id = APPLIED.app_id
                AND USERS.id = APPLIED.user_id
                AND status = 'approved'";
    
    // var_dump($query);   

    // Getting applications from server
    $result = mysqli_query($con, $query);


    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
    // var_dump($row);

    echo json_encode($rows);

    mysqli_close($con);
?>