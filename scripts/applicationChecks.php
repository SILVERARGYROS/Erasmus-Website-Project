<?php
    require "credentials.php";

    // Connecting to database
    $con = mysqli_connect($host,$user,$password);
    if (!$con){
        echo "problem in the connection"/* .mysqli_error() */;
        die;
    }
    mysqli_select_db($con, $db);

    // Getting deadline date data from server
    $result = mysqli_query($con, "SELECT * 
                                  FROM SYSTEM_VARIABLES;");

    $row = mysqli_fetch_assoc($result);
    
    $server_date = explode("-", $row['application_deadline_date']);
    $server_time = explode(":", $row['application_deadline_time']);


    // Turning strings into integers
    $server_year = $server_date[0];
    $server_month = $server_date[1];
    $server_day = $server_date[2];
    $server_hour = $server_time[0];
    $server_minute = $server_time[1];

    // Returning remaining time till deadline
    echo "$server_year;$server_month;$server_day;$server_hour;$server_minute";

    mysqli_close($con);
?>