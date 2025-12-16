// DATA CONTOH (HIRARKI)
const data = {
"Jawa Barat": {
"Bandung": {
"Coblong": "40135",
"Cicendo": "40173"
},
"Bekasi": {
"Bekasi Utara": "17121",
"Bekasi Selatan": "17144"
}
},
"DKI Jakarta": {
"Jakarta Pusat": {
"Menteng": "10310",
"Tanah Abang": "10230"
},
"Jakarta Selatan": {
"Mampang": "12730",
"Kebayoran Baru": "12120"
}
}
};

const provinsiSelect = document.getElementById("provinsi");
const kotaSelect = document.getElementById("kota");
const kecamatanSelect = document.getElementById("kecamatan");
const hasil = document.getElementById("hasil");


// Load provinsi
for (let prov in data) {
provinsiSelect.innerHTML += `<option value="${prov}">${prov}</option>`;
}


provinsiSelect.addEventListener("change", function () {
kotaSelect.innerHTML = `<option value="">-- Pilih Kota / Kabupaten --</option>`;
kecamatanSelect.innerHTML = `<option value="">-- Pilih Kecamatan --</option>`;
kotaSelect.disabled = true;
kecamatanSelect.disabled = true;
hasil.innerHTML = "";


if (!this.value) return;


for (let kota in data[this.value]) {
kotaSelect.innerHTML += `<option value="${kota}">${kota}</option>`;
}


kotaSelect.disabled = false;
});


kotaSelect.addEventListener("change", function () {
kecamatanSelect.innerHTML = `<option value="">-- Pilih Kecamatan --</option>`;
kecamatanSelect.disabled = true;
hasil.innerHTML = "";


if (!this.value) return;


const prov = provinsiSelect.value;


for (let kec in data[prov][this.value]) {
kecamatanSelect.innerHTML += `<option value="${kec}">${kec}</option>`;
}


kecamatanSelect.disabled = false;
});


kecamatanSelect.addEventListener("change", function () {
hasil.innerHTML = "";


if (!this.value) return;


const prov = provinsiSelect.value;
const kota = kotaSelect.value;
const kec = this.value;
const kodepos = data[prov][kota][kec];


    hasil.innerHTML = `
    <b>Provinsi:</b> ${prov}<br>
    <b>Kota/Kabupaten:</b> ${kota}<br>
    <b>Kecamatan:</b> ${kec}<br>
    <b>Kode Pos:</b> ${kodepos}
    `;
    hasil.style.display = "block";

});