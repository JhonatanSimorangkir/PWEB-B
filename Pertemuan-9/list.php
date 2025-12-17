<?php include 'db.php'; ?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Daftar Pendaftar</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="page">
        <div class="card wide">
            <h2>Daftar Pendaftar</h2>
        <table>
        <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>No HP</th>
            <th>Tanggal</th>
            <th>Aksi</th>
        </tr>
        <?php
        $no = 1;
        $data = mysqli_query($conn, "SELECT * FROM pendaftar ORDER BY created_at DESC");
        while ($row = mysqli_fetch_assoc($data)) {
        echo "<tr>
        <td>$no</td>
        <td>{$row['nama']}</td>
        <td>{$row['email']}</td>
        <td>{$row['no_hp']}</td>
        <td>{$row['created_at']}</td>
        <td>
            <a href='edit.php?id={$row['id']}'>Edit</a> | 
            <a href='delete.php?id={$row['id']}' onclick=\"return confirm('Yakin mau hapus data ini?')\">Hapus</a>
        </td>
        </tr>";
        $no++;
        }
        ?>
        </table>
        <a href="home.php" class="link">⬅ Kembali ke Home</a>
    </div>
</div>
</body>
</html>