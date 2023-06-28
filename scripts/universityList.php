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


    // Getting list of universities
    $result = mysqli_query($con, "SELECT *
                                  FROM UNIVERSITIES");
                                  

    // Writing university names in HTML file
    while($row = mysqli_fetch_assoc($result)){
        $name = $row['name'];
        echo "<option value=\"$name\">$name</option>";
    }
?>