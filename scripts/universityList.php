<?php
    session_start();

    // Connectiong to database
    $con = mysqli_connect("localhost:3306","root","");
    if (!$con){
        echo "Problem in the connection. "/* .mysqli_error() */;
        die;
    }
    mysqli_select_db($con, "ErasmApp");


    // Getting list of universities
    $result = mysqli_query($con, "SELECT *
                                  FROM UNIVERSITIES");
                                  

    // Writing university names in HTML file
    while($row = mysqli_fetch_assoc($result)){
        $name = $row['name'];
        echo "<option value=\"$name\">$name</option>";
    }
?>