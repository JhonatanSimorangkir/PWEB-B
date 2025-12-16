import React from "react";
import "../styles/PromoSection.css";

const PromoSection = () => {
  return (
    <section className="promo-section">
      <div className="promo-container">
        <h2>🎉 Promo Spesial Bulan Ini!</h2>
        <p>
          Dapatkan <strong>diskon 20%</strong> untuk penyewaan pertama Anda dan
          <strong> gratis ongkir</strong> untuk area dalam kota!  
          Yuk, biarkan si kecil bermain tanpa batas dengan mainan berkualitas!
        </p>
        <a href="#contact" className="promo-btn">Sewa Sekarang</a>
      </div>
    </section>
  );
};

export default PromoSection;
