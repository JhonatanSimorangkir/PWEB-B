<?php
include 'db.php';

$id = $_GET['id'];
$data = mysqli_query($conn, "SELECT * FROM pendaftar WHERE id='$id'");
$row = mysqli_fetch_assoc($data);

if (isset($_POST['update'])) {
    $nis   = $_POST['nis'];
    $nama  = $_POST['nama'];
    $jk    = $_POST['jenis_kelamin'];
    $telp  = $_POST['telp'];
    $alamat = $_POST['alamat'];

    // cek apakah ganti foto
    if ($_FILES['foto']['name'] != '') {
        $foto_baru = $_FILES['foto']['name'];
        $tmp = $_FILES['foto']['tmp_name'];

        // hapus foto lama
        if (file_exists("foto/".$row['foto'])) {
            unlink("foto/".$row['foto']);
        }

        move_uploaded_file($tmp, "foto/".$foto_baru);

        $query = "UPDATE pendaftar SET
            nis='$nis',
            nama='$nama',
            jenis_kelamin='$jk',
            telp='$telp',
            alamat='$alamat',
            foto='$foto_baru'
            WHERE id='$id'";
    } else {
        // tanpa ganti foto
        $query = "UPDATE pendaftar SET
            nis='$nis',
            nama='$nama',
            jenis_kelamin='$jk',
            telp='$telp',
            alamat='$alamat'
            WHERE id='$id'";
    }

    mysqli_query($conn, $query);
    header("Location: list.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Edit Pendaftar</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="page">
<div class="card">
<h2>Edit Pendaftar</h2>

<form method="post" enctype="multipart/form-data">
    <input type="text" name="nis" value="<?= $row['nis']; ?>" required>
    <input type="text" name="nama" value="<?= $row['nama']; ?>" required>

    <select name="jenis_kelamin" required>
        <option value="Laki-laki" <?= $row['jenis_kelamin']=='Laki-laki'?'selected':''; ?>>Laki-laki</option>
        <option value="Perempuan" <?= $row['jenis_kelamin']=='Perempuan'?'selected':''; ?>>Perempuan</option>
    </select>

    <input type="text" name="telp" value="<?= $row['telp']; ?>" required>
    <textarea name="alamat" required><?= $row['alamat']; ?></textarea>

    <label>Foto Saat Ini:</label><br>
    <img src="foto/<?= $row['foto']; ?>" width="120"><br><br>

    <input type="file" name="foto">
    <small>Kosongkan jika tidak ingin ganti foto</small><br><br>

    <button type="submit" name="update">Update</button>
</form>

<a href="list.php" class="link">⬅ Kembali</a>
</div>
</div>
</body>
</html>
