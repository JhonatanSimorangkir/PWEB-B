<?php
// process.php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

  $nama  = trim($_POST["nama"] ?? "");
  $email = trim($_POST["email"] ?? "");
  $pesan = trim($_POST["pesan"] ?? "");

  // Validasi
  if ($nama === "" || $email === "" || $pesan === "") {
    http_response_code(400);
    echo "Semua field wajib diisi!";
    exit;
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Format email tidak valid!";
    exit;
  }

  // 🔒 Biasanya di sini:
  // - simpan ke database
  // - kirim email
  // - logging

  echo "
    <strong>Berhasil!</strong><br>
    Terima kasih <b>$nama</b>, pesan Anda sudah kami terima.
  ";
}
