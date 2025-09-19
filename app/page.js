import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import CategoryGrid from "./components/CategoryGrid";
import FlashSale from "./components/FlashSale";
import MegaSale from "./components/MegaSale"; // ✅ Import MegaSale
import RecommendedProducts from "./components/RecommendedProducts"; // ✅ Import RecommendedProducts

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="w-full">
        <HeroBanner />
      </section>

      {/* Category Grid */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <CategoryGrid />
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <FlashSale />
        </div>
      </section>

      {/* Mega Sale Section (AFTER Flash Sale) */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <MegaSale /> {/* ✅ MegaSale added here */}
        </div>
      </section>

      {/* Recommended Products Section (AFTER Mega Sale) */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <RecommendedProducts /> {/* ✅ RecommendedProducts added here */}
        </div>
      </section>

      <Footer />
    </div>
  );
}