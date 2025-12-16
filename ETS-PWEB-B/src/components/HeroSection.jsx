import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Selamat Datang di Jasa Sewa Mainan Anak Surabaya</h1>
        <p>
          Solusi hemat dan menyenangkan untuk bermain. Sewa mainan anak dengan mudah,
          cepat, dan berkualitas.
        </p>
        <a href="/product" className="hero-btn">Lihat Produk</a>
      </div>
    </section>
  );
};

export default HeroSection;
