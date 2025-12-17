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

        <form action="" method="post" enctype="multipart/form-data">
            <input type="text" name="nis" placeholder="NIS" required>
            <input type="text" name="nama" placeholder="Nama" required>

            <select name="jenis_kelamin" required>
                <option value="">-- Jenis Kelamin --</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
            </select>

            <input type="text" name="telp" placeholder="No Telp" required>
            <textarea name="alamat" placeholder="Alamat" required></textarea>

            <input type="file" name="foto" required>

            <button type="submit" name="simpan">Daftar</button>
        </form>

        <a href="home.php" class="link">⬅ Kembali ke Home</a>
    </div>
</div>
</body>
</html>

<?php
if (isset($_POST['simpan'])) {
    $nis   = $_POST['nis'];
    $nama  = $_POST['nama'];
    $jk    = $_POST['jenis_kelamin'];
    $telp  = $_POST['telp'];
    $alamat = $_POST['alamat'];

    $foto = $_FILES['foto']['name'];
    $tmp  = $_FILES['foto']['tmp_name'];
    move_uploaded_file($tmp, "foto/".$foto);

    mysqli_query($conn, "INSERT INTO pendaftar VALUES (
        NULL,
        '$nis',
        '$nama',
        '$jk',
        '$telp',
        '$alamat',
        '$foto'
    )");

    header("Location: list.php");
}
?>
