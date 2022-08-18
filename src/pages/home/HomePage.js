import "./homePage.css";
import Feature from "../../components/Feature/Feature";
import ListProducts from "../../components/ListProducts/ListProducts";
import { Fragment, useEffect, useState } from "react";
import {productsData} from "../../fakeData";
import Banner from "../../components/Banner/Banner";
import Newsletter from "../../components/Newsletter/Newsletter";
import Repository from "../../fakeApi/repository";

export default function HomePage() {
  
  const featureList = [
    {
      image: "/images/features/f1.png",
      title: "Free Shipping",
      backgroundTextColor: "#fddde4",
    },
    {
      image: "/images/features/f2.png",
      title: "Online Order",
      backgroundTextColor: "#cdebbc",
    },
    {
      image: "/images/features/f3.png",
      title: "Save Money",
      backgroundTextColor: "#d1e8f2",
    },
    {
      image: "/images/features/f4.png",
      title: "Promotions",
      backgroundTextColor: "#ccd4f8",
    },
    {
      image: "/images/features/f5.png",
      title: "Happly Sell",
      backgroundTextColor: "#f6dbf6",
    },
    {
      image: "/images/features/f6.png",
      title: "F24/7 Support",
      backgroundTextColor: "#fff2e5",
    },
  ];
  const listProducts1 = {
    title: "Feature Products",
    subTitle: "Summer Collection New Modern Design",
    listProducts: productsData.slice(0,8)
  };

  const banner = {
    title: "Repair Services",
    subTitle: (
      <Fragment>
        Up to <span>70% Off</span> - All t-Shirts & Accessories
      </Fragment>
    ),
    btnTitle: "Explore More",
    image: "/images/banner/b2.jpg",
  };

  const listProducts2 = {
    title: "New Arrivals",
    subTitle: "Summer Collection New Modern Design",
    listProducts: productsData.slice(8,16)
  };
  
  return (
    <Fragment>
      {/* Banner Start */}
      
      <section id="banner" className="my-2d5">
        <Banner
          title={banner.title}
          subTitle={banner.subTitle}
          btnTitle={banner.btnTitle}
          image={banner.image}
        />
      </section>
      {/* Banner End */}

      {/* Feature Section Start */}
      <section id="feature" className="py-2d5 px-5">
        <div className="d-flex flex-row justify-content-between flex-wrap">
          {featureList.map((feature, index) => {
            return <Feature feature={feature} key={index} />;
          })}
        </div>
      </section>
      {/* Feature Section End */}

      {/* ListProduct Section Start */}
      <section id="list-products1" className="py-2d5 px-5">
        <ListProducts
          title={listProducts1.title}
          subTitle={listProducts1.subTitle}
          listProducts={listProducts1.listProducts}
        />
      </section>
      {/* ListProduct Section Start */}
      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off</p>
        <button>Shop Now</button>
      </section>
      {/* Banner Section Start */}
      <section id="banner" className="my-2d5">
        <Banner
          title={banner.title}
          subTitle={banner.subTitle}
          btnTitle={banner.btnTitle}
          image={banner.image}
        />
      </section>
      {/* Banner Section Start */}

      {/* List Products 2 Section Start */}
      <section id="list-products2" className="py-2d5 px-5">
        <ListProducts
          title={listProducts2.title}
          subTitle={listProducts2.subTitle}
          listProducts={listProducts2.listProducts}
        />
      </section>
      {/* List Products 2 Section End */}

      {/* Medium Banner Section Start */}
      <section id="banner-m" className="py-2d5 px-5 m-banner">
        <Banner.MBanner
          key={1}
          title={"crazy deals"}
          subTitle={"buy 1 get 1 free"}
          description={"The best classic dress is on sale at cara"}
          btnTitle={"Learn More"}
          image={"../../images/banner/b17.jpg"}
        />

        <Banner.MBanner
          key={2}
          title={"spring/summer"}
          subTitle={"upcomming season"}
          description={"The best classic dress is on sale at cara"}
          btnTitle={"Collection"}
          image={"../../images/banner/b10.jpg"}
        />
      </section>
      {/* Medium Banner Section End */}

      {/* Small Banner Section Start */}
      <section id="banner-s" className="px-5 sm-banner">
        <Banner.SBanner
          title={"SEASONAL SALE"}
          subTitle={"Winter Collection -50% OFF"}
          image={"../../images/banner/b7.jpg"}
        />

        <Banner.SBanner
          title={"NEW FOOTWEAR COLLECTION"}
          subTitle={"Spring/Summer 2022"}
          image={"../../images/banner/b4.jpg"}
        />

        <Banner.SBanner
          title={"T-SHIRTS"}
          subTitle={"New Trendy Prints"}
          image={"../../images/banner/b18.jpg"}
        />
      </section>
      {/* Small Banner Section End */}

      {/* Newsletter Section Start */}
      <section id="newsletter" className="">
        <Newsletter />
      </section>
      {/* Newsletter Section End */}
    </Fragment>
  );
}
