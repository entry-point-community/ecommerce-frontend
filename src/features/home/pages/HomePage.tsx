import { HeroSection } from "../components/HeroSection";
import { RecommendedProductsSection } from "../components/RecommendedProductsSection";

const HomePage = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <RecommendedProductsSection />
    </div>
  );
};

export default HomePage;
