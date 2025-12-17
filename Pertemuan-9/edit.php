<?php
include 'db.php';

$id = $_GET['id'];

if (isset($_POST['update'])) {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $no_hp = $_POST['no_hp'];

    mysqli_query($conn, "UPDATE pendaftar SET 
        nama='$nama',
        email='$email',
        no_hp='$no_hp'
        WHERE id='$id'
    ");

    header("Location: list.php");
    exit;
}

$data = mysqli_query($conn, "SELECT * FROM pendaftar WHERE id='$id'");
$row = mysqli_fetch_assoc($data);
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Edit Data</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="page">
    <div class="card">
        <h2>Edit Pendaftar</h2>
        <form method="post">
            <input type="text" name="nama" value="<?= $row['nama']; ?>" required>
            <input type="email" name="email" value="<?= $row['email']; ?>" required>
            <input type="text" name="no_hp" value="<?= $row['no_hp']; ?>" required>
            <button type="submit" name="update">Update</button>
        </form>
        <a href="list.php" class="link">⬅ Kembali</a>
    </div>
</div>
</body>
</html>
