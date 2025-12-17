<?php include 'db.php'; ?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Form Pendaftaran</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="page">
    <div class="card">
        <h2>Form Pendaftaran</h2>
        <form method="POST">
            <input type="text" name="nama" placeholder="Nama Lengkap" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="text" name="no_hp" placeholder="No HP" required>
            <button type="submit" name="submit" class="btn primary">Daftar</button>
        </form>
        <a href="home.php" class="link">⬅ Kembali ke Home</a>
    </div>
</div>

<?php
if (isset($_POST['submit'])) {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $no_hp = $_POST['no_hp'];
    mysqli_query($conn, "INSERT INTO pendaftar (nama, email, no_hp) VALUES ('$nama','$email','$no_hp')");
    echo "<script>alert('Pendaftaran berhasil');</script>";
}
?>
</body>
</html>