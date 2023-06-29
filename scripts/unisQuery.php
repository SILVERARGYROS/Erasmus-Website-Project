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


    $name = $_GET['name'];
    $country = $_GET['country'];
    $sort = $_GET['sort'];
    $where = "";
    $order = "";

    if($name != ""){
        $name = "name LIKE '%$name%'";
        $where = " WHERE ";
    }

    if($country != ""){
        $country = "country LIKE '%$country%'";
        $where = " WHERE ";
    }

    if($name != "" && $country != ""){
        $and = " AND ";
        $where = " WHERE ";
    }
    else{
        $and = "";
    }

    if($sort == "true"){
        $order = "ORDER BY name ASC";
    }
    else{
        $order = "ORDER BY name DESC";
    }

    $query = "  SELECT * 
                FROM UNIVERSITIES
                $where $name $and $country $order;";
    
    // var_dump($query);   

    // Getting universities fromz server
    $result = mysqli_query($con, $query);


    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
    // var_dump($row);

    // Returning remaining time till deadline
    echo json_encode($rows);

    mysqli_close($con);
?>