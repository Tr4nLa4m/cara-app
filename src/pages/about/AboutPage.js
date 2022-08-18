import { Fragment } from "react";
import Banner from "../../components/Banner/Banner";
import Feature from "../../components/Feature/Feature";
import Newsletter from "../../components/Newsletter/Newsletter";
import "./aboutPage.css";

export default function AboutPage() {
  const banner = {
    title: "#KnowUs",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "images/about/banner.png",
  };

  const featureList = [
    {
      image: "/images/features/f1.png",
      title: "Free Shipping",
    },
    {
      image: "/images/features/f2.png",
      title: "Online Order",
    },
    {
      image: "/images/features/f3.png",
      title: "Save Money",
    },
    {
      image: "/images/features/f4.png",
      title: "Promotions",
    },
    {
      image: "/images/features/f5.png",
      title: "Happly Sell",
    },
    {
      image: "/images/features/f6.png",
      title: "F24/7 Support",
    },
  ];
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

      {/* About Content Section Start */}
      <section id="about_head" className="py-2d5 px-5">
        <img src="images/about/a6.jpg" alt="" />
        <div>
          <h2>Who We Are ?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim natus
            cupiditate eius quaerat laboriosam temporibus tenetur id, reiciendis
            consectetur dolorem rerum fuga possimus dolores excepturi unde qui
            quibusdam vitae veritatis. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Enim natus cupiditate eius quaerat laboriosam
            temporibus tenetur id, reiciendis consectetur dolorem rerum fuga
            possimus dolores excepturi unde qui quibusdam vitae veritatis.
          </p>

          <abbr title="">
            {" "}
            The Premier League, also known as the English Premier League, is the
            top level of the English football league system. Contested by 20
            clubs, it operates on a system of
          </abbr>

          <br />
          <br />

          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
            The Premier League, also known as the English Premier League, is the
            top level of the English football league system. Contested by 20
            clubs, it operates on a system of
          </marquee>
        </div>
      </section>
      {/* About Content Section End */}

      {/* About App Section Start */}
      <section id="about_app" className="py-2d5 px-5">
        <h1>
          Download Our <a href="#">App</a>
        </h1>
        <div className="video">
          <video autoPlay muted loop src="images/about/1.mp4"></video>
        </div>
      </section>
      {/* About App Section End */}

      {/* Feature Section Start */}
      <section id="feature" className="py-2d5 px-5">
        <div className="d-flex flex-row justify-content-between flex-wrap">
          {featureList.map((feature, index) => {
            return <Feature feature={feature} key={index} />;
          })}
        </div>
      </section>
      {/* Feature Section End */}

      {/* Newsletter Section Start */}
      <section id="newsletter" className="">
      <Newsletter />
      </section>
      {/* Newsletter Section End */}
    </Fragment>
  );
}
