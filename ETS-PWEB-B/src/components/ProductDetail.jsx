import React from "react";
import "../styles/ProductDetail.css";
import { FaTruck, FaBroom, FaSmile, FaExchangeAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaTruck />,
    title: "Antar & Jemput Mainan",
    desc: "Kami menyediakan layanan antar-jemput mainan langsung ke rumah Anda. Praktis tanpa repot keluar rumah.",
  },
  {
    icon: <FaBroom />,
    title: "Mainan Selalu Bersih",
    desc: "Setiap mainan disterilkan dengan aman sebelum disewakan, menggunakan cairan food-grade dan sinar UV.",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Bisa Tukar Mainan",
    desc: "Anak bosan? Tenang, Anda bisa menukar mainan lain kapan pun selama masa sewa aktif.",
  },
  {
    icon: <FaSmile />,
    title: "Kepuasan Terjamin",
    desc: "Kami berkomitmen memberikan pengalaman menyenangkan dan aman bagi anak Anda, dengan dukungan tim yang responsif.",
  },
];

const ProductDetail = () => {
  return (
    <section className="service-section">
      <div className="service-container">
        <div className="service-text">
          <h2>Mengapa Memilih Kami?</h2>
          <p>
            Kami hadir untuk memberikan solusi bermain yang hemat, aman, dan menyenangkan. 
            Dengan sistem sewa fleksibel, Anda bisa memilih berbagai jenis mainan anak — 
            mulai dari mainan edukatif, ride-on, hingga perosotan — semua dalam kondisi terbaik!
          </p>
        </div>

        <div className="service-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
