import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import BlogPage from "./pages/blog/BlogPage";
import ContactPage from "./pages/contact/ContactPage";
import AboutPage from "./pages/about/AboutPage";
import ProductPage from "./pages/products/ProductPage";
import SingleProductPage from "./pages/products/SingleProductPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductPage />} >
            <Route path=":productId" element={<SingleProductPage />} />
          </Route>
          <Route path="blogs" element={<BlogPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

