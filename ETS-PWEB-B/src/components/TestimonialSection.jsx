import React from "react";
import "../styles/TestimonialSection.css";

const testimonials = [
  {
    name: "Rina Putri",
    text: "Mainannya bersih dan terawat banget. Anak saya sampai nggak mau berhenti main! Pelayanannya juga cepat.",
    img: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Dewi Andini",
    text: "Suka banget sama sistem sewanya yang fleksibel. Bisa ganti mainan tiap minggu biar anak nggak bosan.",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Farhan Yusuf",
    text: "Respon admin cepat, mainan diantar tepat waktu, dan kualitasnya seperti baru. Recommended banget!",
    img: "https://i.pravatar.cc/100?img=23",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="testimonial-title">Apa Kata Pelanggan Kami?</h2>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <img src={t.img} alt={t.name} className="testimonial-avatar" />
              <p className="testimonial-text">“{t.text}”</p>
              <h4 className="testimonial-name">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
