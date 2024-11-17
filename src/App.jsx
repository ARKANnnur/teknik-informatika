import { GetRegionProvider } from "./contexts/GetRegionContext";
import About from "./features/About";
import Awwards from "./features/Awwards";
import Event from "./features/Event";
import Gallery from "./features/Gallery";
import Opening from "./features/Opening";
import Organization from "./features/Organization";
import Footer from "./components/Footer";

function App() {
  return (
    <GetRegionProvider>
      <div className="h-auto w-auto">
        <Opening />
        <About />
        <Gallery />
        <Awwards />
        <Organization />
        <Event />
        <Footer />
      </div>
    </GetRegionProvider>
  );
}

export default App;
