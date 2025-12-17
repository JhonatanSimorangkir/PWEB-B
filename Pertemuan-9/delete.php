<?php
include 'db.php';

$id = $_GET['id'];

mysqli_query($conn, "DELETE FROM pendaftar WHERE id='$id'");

header("Location: list.php"); // sesuaikan nama file list
exit;
