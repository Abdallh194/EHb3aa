import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
// import Flip from "react-reveal/Flip";
import {
  DeleteAllItemsCard,
  DeleteFromCard,
} from "../../../redux/WeatherSlice";
function Cart() {
  let cartItems = useSelector((state) => state.Weather.cartItems);

  let discount = useDispatch();
  let totlaPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totlaPrice += cartItems[i].price * cartItems[i].Quantity;
  }
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <div className="Cart">
      <Link to="/Shop" className="ToCart">
        <i class="bi bi-arrow-90deg-left"></i>
      </Link>
      <div className="container">
        <h1>سلة المشتريات</h1>
        {cartItems.length > 0 ? (
          <Fragment>
            <div
              className="Dl_AllItems"
              onClick={() => discount(DeleteAllItemsCard())}
            >
              حذف الكل
            </div>
            <div className="totla">السعر الاجمالي : {totlaPrice} جنيه</div>
          </Fragment>
        ) : (
          ""
        )}
        <div className="row">
          {cartItems.map((item) => {
            return (
              <Zoom top>
                <div className="Cart-product" key={item.id}>
                  <img
                    src={item.images}
                    alt=""
                    className="img-fluid lg-screen sm-screen"
                  />
                  <div className="head">
                    <h3>{item.title}</h3>
                  </div>

                  <span className="Quntaty">
                    {" "}
                    الكميه : {item.Quantity} × {item.price}
                  </span>

                  <div className="price">
                    <div>الاجمالي</div>
                    <div>{item.Quantity * item.price} جنيه</div>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => discount(DeleteFromCard(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </Zoom>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
