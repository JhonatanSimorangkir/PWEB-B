// DATA GADGET
const data = {
  "Smartphone": {
    "Samsung": { harga: "Rp 8.500.000", stok: 12 },
    "Apple": { harga: "Rp 15.000.000", stok: 5 },
    "Xiaomi": { harga: "Rp 4.200.000", stok: 20 }
  },
  "Laptop": {
    "Asus": { harga: "Rp 12.000.000", stok: 7 },
    "Acer": { harga: "Rp 10.500.000", stok: 10 },
    "Lenovo": { harga: "Rp 11.200.000", stok: 6 }
  },
  "Tablet": {
    "iPad": { harga: "Rp 9.800.000", stok: 4 },
    "Samsung Tab": { harga: "Rp 6.500.000", stok: 9 }
  }
};

const gadgetSelect = document.getElementById("gadget");
const merkSelect = document.getElementById("merk");
const hasil = document.getElementById("hasil");

// Load gadget
for (let gadget in data) {
  gadgetSelect.innerHTML += `<option value="${gadget}">${gadget}</option>`;
}

// Saat gadget dipilih
gadgetSelect.addEventListener("change", function () {
  merkSelect.innerHTML = `<option value="">Pilih Merek</option>`;
  merkSelect.disabled = true;
  hasil.style.display = "none";

  if (!this.value) return;

  for (let merk in data[this.value]) {
    merkSelect.innerHTML += `<option value="${merk}">${merk}</option>`;
  }

  merkSelect.disabled = false;
});

// Saat merk dipilih
merkSelect.addEventListener("change", function () {
  hasil.style.display = "none";

  if (!this.value) return;

  const gadget = gadgetSelect.value;
  const merk = this.value;
  const info = data[gadget][merk];

  hasil.innerHTML = `
    <b>Gadget:</b> ${gadget}<br>
    <b>Merek:</b> ${merk}<br>
    <b>Harga:</b> ${info.harga}<br>
    <b>Stok:</b> ${info.stok} unit
  `;

  hasil.style.display = "block";
});
