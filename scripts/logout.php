<?php
session_start();

$last_visited = "../".$_SESSION['last_visited'];
session_destroy();
header("location: ".$last_visited);
?>