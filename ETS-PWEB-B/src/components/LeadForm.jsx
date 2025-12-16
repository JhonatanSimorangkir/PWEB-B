import '../styles/LeadForm.css';

const LeadForm = () => {
  return (
    <section className="lead-form">
      <h2>Hubungi Kami</h2>
      <form>
        <input type="text" placeholder="Nama Lengkap" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Pesan Anda" required></textarea>
        <button type="submit">Kirim</button>
      </form>
    </section>
  );
};

export default LeadForm;
