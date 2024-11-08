import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import ProdPreview from "./pages/ProdPreview";
import Blobs from "./components/Blobs";
import BlobsYellow from "./components/BlobsYellow";
import Features from "./pages/Features";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Navbar/>

      <BlobsYellow />
      <Blobs />

      <main>
        <Hero className="hero"/>
        <ProdPreview className="productPreview"/>
        <Features className="features"/>
        <Pricing className="pricing"/>
        <AboutUs className="aboutUs"/>
        <Footer />
      </main>
      
    </>
  );
}

export default App;
