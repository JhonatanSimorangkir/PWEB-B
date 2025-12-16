import React from "react";
import "../styles/BenefitSection.css";
import { FaSmile, FaClock, FaStar, FaTruck } from "react-icons/fa";

const BenefitSection = () => {
  const benefits = [
    {
      icon: <FaSmile />,
      title: "Anak Senang, Orang Tua Tenang",
      desc: "Mainan bersih, aman, dan menyenangkan — biar anak bebas bermain tanpa khawatir.",
    },
    {
      icon: <FaClock />,
      title: "Sewa Fleksibel",
      desc: "Bisa harian, mingguan, atau bulanan sesuai kebutuhan bermain si kecil.",
    },
    {
      icon: <FaStar />,
      title: "Kualitas Terjamin",
      desc: "Semua mainan kami rutin dibersihkan dan dicek agar selalu dalam kondisi terbaik.",
    },
    {
      icon: <FaTruck />,
      title: "Antar Jemput Cepat",
      desc: "Mainan diantar langsung ke rumah dan diambil kembali setelah masa sewa selesai.",
    },
  ];

  return (
    <section className="benefit-section">
      <div className="benefit-container">
        <h2 className="benefit-title">Kenapa Pilih Kami?</h2>
        <div className="benefit-grid">
          {benefits.map((b, i) => (
            <div className="benefit-card" key={i}>
              <div className="benefit-icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
