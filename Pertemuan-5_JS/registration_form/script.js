document.getElementById("formMahasiswa").addEventListener("submit", function(e) {
e.preventDefault();


const nama = document.getElementById("nama").value.trim();
const npm = document.getElementById("npm").value.trim();
const email = document.getElementById("email").value.trim();
const prodi = document.getElementById("prodi").value;
const alamat = document.getElementById("alamat").value.trim();
const jk = document.querySelector("input[name='jk']:checked");


document.querySelectorAll('.error').forEach(e => e.textContent = "");


let valid = true;


if (!nama) { errorNama.textContent = "Nama wajib diisi"; valid = false; }
if (!npm) { errorNpm.textContent = "NPM wajib diisi"; valid = false; }
if (!email) { errorEmail.textContent = "Email wajib diisi"; valid = false; }
if (!jk) { errorJk.textContent = "Pilih jenis kelamin"; valid = false; }
if (!prodi) { errorProdi.textContent = "Program studi wajib dipilih"; valid = false; }


if (!valid) return;


const hasil = document.getElementById("hasil");
hasil.style.display = "block";
hasil.innerHTML = `
<b>Registrasi Berhasil</b><br><br>
Nama: ${nama}<br>
NPM: ${npm}<br>
Email: ${email}<br>
Jenis Kelamin: ${jk.value}<br>
Prodi: ${prodi}<br>
Alamat: ${alamat || '-'}
`;
});