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
            <th>NIS</th>
            <th>Nama</th>
            <th>JK</th>
            <th>Telp</th>
            <th>Alamat</th>
            <th>Foto</th>
            <th>Aksi</th>
        </tr>

        <?php
        $no = 1;
        $data = mysqli_query($conn, "SELECT * FROM pendaftar");
        while ($row = mysqli_fetch_assoc($data)) {
        echo "<tr>
            <td>$no</td>
            <td>{$row['nis']}</td>
            <td>{$row['nama']}</td>
            <td>{$row['jenis_kelamin']}</td>
            <td>{$row['telp']}</td>
            <td>{$row['alamat']}</td>
            <td><img src='foto/{$row['foto']}' width='60'></td>
            <td class='aksi'>
                <a href='edit.php?id={$row['id']}' class='btn edit'>Edit</a>
                <a href='delete.php?id={$row['id']}'
                   onclick=\"return confirm('Yakin hapus data?')\"
                   class='btn delete'>Hapus</a>
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
