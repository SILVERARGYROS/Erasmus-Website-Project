<?php
    require "credentials.php";

    // Connecting to database
    $con = mysqli_connect($host,$user,$password);
    if (!$con){
        echo "problem in the connection"/* .mysqli_error() */;
        die;
    }
    mysqli_select_db($con, $db);


    $percentage = $_GET['percentage'];
    $uni = $_GET['uni'];
    $sort = $_GET['sort'];

    if($percentage != ""){
        $percentage = "AND percentage >= $percentage";
    }

    if($uni != ""){
        $uni = "AND UNIVERSITIES.name LIKE '%$uni%'";
    }

    if($sort == "true"){
        $order = "ORDER BY percentage ASC";
    }
    else{
        $order = "ORDER BY percentage DESC";
    }

    $query = "  SELECT * 
                FROM USERS, APPLIED, APPLICATIONS, SELECTED, UNIVERSITIES as u1, UNIVERSITIES as u2, UNIVERSITIES as u3
                WHERE USERS.id = APPLIED.user_id
                AND APPLIED.app_id = APPLICATIONS.id
                AND APPLICATIONS.id = SELECTED.app_id
                AND SELECTED.uni1_id = u1.id
                AND SELECTED.uni2_id = u2.id
                AND SELECTED.uni3_id = u3.id
                $percentage 
                $uni 
                $order;";
    
    // var_dump($query);   

    // Getting universities fromz server
    $result = mysqli_query($con, $query);


    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
    // var_dump($rows);

    // Returning remaining time till deadline
    echo json_encode($rows);

    mysqli_close($con);
?>