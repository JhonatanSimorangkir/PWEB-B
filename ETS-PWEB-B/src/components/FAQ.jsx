import React, { useState } from "react";
import "../styles/FAQ.css";

const faqData = [
  {
    question: "Bagaimana cara menyewa mainan di sini?",
    answer:
      "Anda cukup memilih mainan yang diinginkan, isi formulir pemesanan, dan tim kami akan menghubungi Anda untuk konfirmasi serta pengiriman.",
  },
  {
    question: "Berapa lama durasi sewa mainan?",
    answer:
      "Durasi sewa standar adalah 7 hari, namun Anda bisa memperpanjang sesuai kebutuhan dengan biaya tambahan yang terjangkau.",
  },
  {
    question: "Apakah mainan dijamin bersih dan aman?",
    answer:
      "Ya! Semua mainan kami dicuci dan disterilkan menggunakan alat khusus sebelum dikirim ke pelanggan berikutnya.",
  },
  {
    question: "Apakah bisa pesan antar-jemput mainan?",
    answer:
      "Tentu! Kami menyediakan layanan antar-jemput untuk wilayah Surabaya dan sekitarnya.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer:
      "Kami menerima transfer bank, e-wallet (OVO, GoPay, DANA), dan pembayaran tunai saat pengantaran.",
  },
];
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Pertanyaan yang Sering Diajukan</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
