import { Fragment, useState } from "react";
import Banner from "../../components/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import {cartListSelector} from "../../redux/selectors";
import "./cartPage.css";

export default function CartPage() {
  const banner = {
    title: "#cart",
    subTitle: "Let's pay for your clothes",
    image: "images/banner/b1.jpg",
  };
  // const listProducts = [
  //   {
  //     image: "/images/products/f1.jpg",
  //     quantity: 1,
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "118.99",
  //   },
  //   {
  //     image: "/images/products/f2.jpg",
  //     quantity: 2,
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "118.99",
  //   },
  //   {
  //     image: "/images/products/f3.jpg",
  //     quantity: 1,
  //     title: "Cartoon Astronas T-Shirts",
  //     price: "118.99",
  //   },
  // ];
  const listProductsCart = useSelector(cartListSelector);
  const [totalPrice, setTotalPrice] = useState(() => {
    let total = 0;
    listProductsCart.map((productCart) => {
      total += (productCart.quantity * productCart.product.price);
    });
    return total.toFixed(2);
  });

  
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

      <section id="cart" className="py-2d5 px-5">
        <table width="100%">
          <thead>
            <tr>
              <td>image</td>
              <td>product</td>
              <td>price</td>
              <td>quantity</td>
              <td>subtotal</td>
              <td>remove</td>
            </tr>
          </thead>

          <tbody>
            {listProductsCart.map((productCart, index) => {
              let subTotalPrice = productCart.quantity * productCart.product.price;
              subTotalPrice = subTotalPrice.toFixed(2);
              return (
                <tr key={productCart.product.id}>
                  <td>
                    <img src={productCart.product.image} alt={productCart.product.title} />
                  </td>
                  <td>{productCart.product.title} (Size <b>{productCart.size}</b>)</td>
                  <td>${productCart.product.price.toFixed(2)}</td>
                  <td>
                    <input type="number" name="" min={1} id="" defaultValue={productCart.quantity} />
                  </td>
                  <td>${subTotalPrice}</td>
                  <td>
                    <a href="#">
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </a>
                  </td>
                </tr>
              );
            })}

          </tbody>
        </table>
      </section>

      <section id="cart_add" className="py-2d5 px-5">
        <div className="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter your Coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>

        <div className="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>$ {totalPrice}</td>
            </tr>

            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>

            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>$ {totalPrice}</strong>
              </td>
            </tr>
          </table>

          <button className="normal">Process to checkout</button>
        </div>
      </section>
    </Fragment>
  );
}
