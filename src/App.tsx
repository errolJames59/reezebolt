import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import ProdPreview from "./pages/ProdPreview";
import Blobs from "./components/Blobs";
import BlobsYellow from "./components/BlobsYellow";
import Features from "./pages/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <BlobsYellow />
      <Blobs />
      <main>
        <Hero/>
        <ProdPreview />
        <Features />
        <Footer />
      </main>
    </>
  );
}

export default App;
