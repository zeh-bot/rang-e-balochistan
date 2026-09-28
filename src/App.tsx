import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedCollections from "./components/FeaturedCollections";
import SignaturePieces from "./components/SignaturePieces";
import Craftsmanship from "./components/Craftsmanship";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-[#FAF5EF] text-[#2B2B2B]">
      <Navbar />
      <Hero />
      <About />
      <FeaturedCollections />
      <SignaturePieces />
      <Craftsmanship />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;