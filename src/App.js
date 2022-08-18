import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/home/HomePage";
import BlogPage from "./pages/blog/BlogPage";
import ContactPage from "./pages/contact/ContactPage";
import AboutPage from "./pages/about/AboutPage";
import ProductPage from "./pages/products/ProductPage";
import SingleProductPage from "./pages/single_product/SingleProductPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartPage from "./pages/cart/CartPage";
import NotFoundPage from "./pages/not_found/NotFoundPage";
import {setupServer} from "./fakeApi/server";
import {fetchProducts} from "./pages/products/productsSlice";
import { useDispatch } from 'react-redux';




setupServer();
function App() {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductPage />} >
            {/* <Route path=":productId" element={<SingleProductPage />} /> */}
          </Route>
          <Route path="product/:productId" element={<SingleProductPage />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

