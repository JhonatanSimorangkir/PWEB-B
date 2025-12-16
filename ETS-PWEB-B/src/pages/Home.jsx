import HeroSection from '../components/HeroSection';
import BenefitSection from '../components/BenefitSection';
import TestimonialSection from '../components/TestimonialSection';
import ProductDetail from '../components/ProductDetail';
import PromoSection from '../components/PromoSection';
import LeadForm from '../components/LeadForm';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BenefitSection />
      <TestimonialSection />
      <ProductDetail />
      <PromoSection />
      <LeadForm />
      <FAQ />
    </div>
  );
};

export default Home;
