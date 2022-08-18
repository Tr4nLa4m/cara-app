import { Fragment, useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import ListProducts from "../../components/ListProducts/ListProducts";
import { useDispatch, useSelector } from 'react-redux';
import {productListSelector} from "../../redux/selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./productPage.css";
import Newsletter from "../../components/Newsletter/Newsletter";
import Repository from "../../fakeApi/repository";

export default function ProductPage() {
  const banner = {
    title: "#stayhome",
    subTitle: "Save more with coupons & up to 70% off",
    image: "/images/banner/b1.jpg",
  };

  
  // const listProducts = [
  //   {
  //     image: "/images/products/f1.jpg",
  //     branch: "adidas",
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "$78",
  //   },
  //   {
  //     image: "/images/products/f2.jpg",
  //     branch: "adidas",
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "$78",
  //   },
  //   {
  //     image: "/images/products/f3.jpg",
  //     branch: "adidas",
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "$78",
  //   },
  //   {
  //     image: "/images/products/f4.jpg",
  //     branch: "adidas",
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "$78",
  //   },
  //   {
  //     image: "/images/products/f5.jpg",
  //     branch: "adidas",
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "$78",
  //   },
  //   {
  //     image: "/images/products/f6.jpg",
  //     branch: "adidas",
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "$78",
  //   },
  //   {
  //     image: "/images/products/f7.jpg",
  //     branch: "adidas",
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "$78",
  //   },
  //   {
  //     image: "/images/products/f8.jpg",
  //     branch: "adidas",
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "$78",
  //   },
  //   {
  //     image: "/images/products/n1.jpg",
  //     branch: "adidas",
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "$78",
  //   },
  //   {
  //     image: "/images/products/n2.jpg",
  //     branch: "adidas",
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "$78",
  //   },
  //   {
  //     image: "/images/products/n3.jpg",
  //     branch: "adidas",
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "$78",
  //   },
  //   {
  //     image: "/images/products/n4.jpg",
  //     branch: "adidas",
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "$78",
  //   },
  //   {
  //     image: "/images/products/n5.jpg",
  //     branch: "adidas",
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "$78",
  //   },
  //   {
  //     image: "/images/products/n6.jpg",
  //     branch: "adidas",
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "$78",
  //   },
  //   {
  //     image: "/images/products/n7.jpg",
  //     branch: "adidas",
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "$78",
  //   },
  //   {
  //     image: "/images/products/n8.jpg",
  //     branch: "adidas",
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "$78",
  //   },
  // ];
  // const listProducts = useSelector(productListSelector);
  let repository = new Repository("api/v1/products");
  const [listProducts, setListProducts] = useState([]);
  // useEffect(() => {
  //   setListProducts(repository.getAll("products"));
  // }, []);
  useEffect(() => {
    fetch("/api/v1/products")
      .then((response) => response.json())
      .then((json) => setListProducts(json.products))
  }, [])
  console.log("List Product" , listProducts);

  return (
    <Fragment>
      {/* Banner Section Start */}
      <section id="banner">
        <Banner.HeadingBanner
          title={banner.title}
          subTitle={banner.subTitle}
          image={banner.image}
        />
      </section>
      {/* Banner Section End */}

      {/* List Products Section Start */}
      <section id="list-products" className="py-2d5 px-5">
        <ListProducts listProducts={listProducts} />
      </section>
      {/* List Products Section End */}

      {/* Pagonation Start */}
      <section id="pagination" className="py-2d5 px-5">
        <div className="pagination text-center justify-content-center">
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </section>
      {/* Pagonation End */}

      {/* Newsletter Section Start */}
      <section id="newsletter" className="">
        <Newsletter />
      </section>
      {/* Newsletter Section End */}
    </Fragment>
  );
}
