import { Fragment } from "react";
import { useParams } from "react-router-dom";
import ListProducts from "../../components/ListProducts/ListProducts";
import Newsletter from "../../components/Newsletter/Newsletter";
import "./singleProductPage.css";

export default function SingleProductPage() {
  const params = useParams().productId;
  const listProducts = {
    title: "Feature Products",
    subTitle: "Summer Collection New Modern Design",
    listProducts: [
      {
        image: "/images/products/f1.jpg",
        branch: "adidas",
        title: "Cartoon Astronas T-Shirts",
        price: "78",
      },
      {
        image: "/images/products/f2.jpg",
        branch: "adidas",
        title: "Cartoon Astronas T-Shirts",
        price: "78",
      },
      {
        image: "/images/products/f3.jpg",
        branch: "adidas",
        title: "Cartoon Astronas T-Shirts",
        price: "78",
      },
      {
        image: "/images/products/f4.jpg",
        branch: "adidas",
        title: "Cartoon Astronas T-Shirts",
        price: "78",
      },
    ],
  };
  return (
    <Fragment>
      <section id="product-detail" className="py-2d5 px-5">
        <div className="d-flex mt-1d25">
          <div className="pro-image">
            <img src="/images/products/f1.jpg" alt="img1"></img>

            <div className="pro-image__group">
              <div className="pro-image__small">
                <img src="/images/products/f1.jpg"></img>
              </div>

              <div className="pro-image__small">
                <img src="/images/products/f2.jpg"></img>
              </div>

              <div className="pro-image__small">
                <img src="/images/products/f3.jpg"></img>
              </div>

              <div className="pro-image__small">
                <img src="/images/products/f4.jpg"></img>
              </div>
            </div>
          </div>
          <div className="pro-details">
            <h6>Home / T-Shirt</h6>
            <h4>Men's Fashion T Shirt</h4>
            <h2>$139.00</h2>
            <select>
              <option value="">Select Size</option>
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
              <option value="">XXL</option>
            </select>
            <input type="number" min={"1"} defaultValue={"1"} />
            <button class="normal">Add To Cart</button>
            <h4>Product Details</h4>
            <span>
              The ultra-flattering and equally effortless Jazzy Dress features a
              smocked bodice with intricate stitch detail ad statement sleeves
              ending in bow accented cuffs. Square neckline. Three-quarter puff
              sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette.
              Slipover style.
            </span>
          </div>
        </div>
      </section>

      <section id="recommend-list" className="py-2d5 px-5" >
        <ListProducts
          title={listProducts.title}
          subTitle={listProducts.subTitle}
          listProducts={listProducts.listProducts}
        />
      </section>
      <h2>{params}</h2>
      <section id="newsletter" className="">
        <Newsletter />
      </section>
    </Fragment>
  );
}
