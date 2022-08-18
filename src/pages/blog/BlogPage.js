import { Fragment } from "react";
import Banner from "../../components/Banner/Banner";
import Blog from "../../components/Blog/Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Newsletter from "../../components/Newsletter/Newsletter";

export default function BlogPage() {
  const banner = {
    title: "#readmore",
    subTitle: "Read all case studies about our product",
    image: "images/banner/b19.jpg",
  };

  const listBlogs = [
    {
      title: "The Cotton-Jersey Zip-Up Hoodie",
      description:
        "Kickstater man braid godard coloring book. Raclette waistcoat selfies yr admodnas hexagon irony. godard...",
      image: "images/blog/b1.jpg",
    },
    {
      title: "How to Style a Quiff",
      description:
        "Kickstater man braid godard coloring book. Raclette waistcoat selfies yr admodnas hexagon irony. godard...",
      image: "images/blog/b2.jpg",
    },
    {
      title: "Must-Have Skater Girl Item",
      description:
        "Kickstater man braid godard coloring book. Raclette waistcoat selfies yr admodnas hexagon irony. godard...",
      image: "images/blog/b3.jpg",
    },
    {
      title: "Runaway-Inspired Trends",
      description:
        "Kickstater man braid godard coloring book. Raclette waistcoat selfies yr admodnas hexagon irony. godard...",
      image: "images/blog/b4.jpg",
    },
    {
      title: "The Cotton-Jersey Zip-Up Hoodie",
      description:
        "Kickstater man braid godard coloring book. Raclette waistcoat selfies yr admodnas hexagon irony. godard...",
      image: "images/blog/b6.jpg",
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

      {/* List Blogs Section Start */}
      <section id="list-blogs" className="">
        <div style={{ padding: "150px 150px 0 150px" }}>
          {listBlogs.map((blog, index) => {
            return <Blog blog={blog} key={index} />;
          })}
        </div>
      </section>
      {/* List Blogs Section End */}

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
