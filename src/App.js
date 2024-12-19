import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ProductsList from "./components/ProductsList";
import About from "./components/About";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import Contact from "./components/Contact";
import Services from "./components/Services";
import ProductsDetailes from "./components/ProductsDetailes";

function App() {
  return (
    <div className=" ">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={ 
            <>
              <Slider />
              <ProductsList />
              <Footer />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />

        <Route path="product/:productId" element={<ProductsDetailes />}/>
      </Routes>
    </div>
  );
}

export default App;
