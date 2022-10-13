import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../../../data.json";
import prodcuts from "../../../products.json";
import { AddToCart, SearchFun } from "../../../redux/WeatherSlice";
import ModalProduct from "./Modal";
import { Link } from "react-router-dom";
import img_01 from "./offers_01.jpg";
import img_02 from "./offers_02.jpg";
import img_03 from "./offers_03.jpg";
import img_04 from "./offers_04.jpg";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
function Shop() {
  let [products, setProducts] = useState(data);
  let [searchKey, setsearchKey] = useState("");
  let [AllProducts, setAllProdcts] = useState(prodcuts);
  let cartItems = useSelector((state) => state.Weather.cartItems);
  let user = useSelector((state) => state.Weather.user);
  let [SelectedItem, setSelectedItem] = useState("");
  let [sortPrice, setsortPrice] = useState("");
  let [sortCarigories, setsortCarigories] = useState("");
  let [filterdProduct, setfilterdProduct] = useState("");
  let [filterWorkOn, setFilterWorkOn] = useState(null);
  let HandleSortPrice = (e) => {
    setsortPrice(e.target.value);
    let order = e.target.value;
    let ProductClone = prodcuts.sort(function (a, b) {
      if (order === "Sm-Lg") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setFilterWorkOn(true);
    setfilterdProduct(ProductClone);
  };
  let HandleCarigories = (e) => {
    setsortCarigories(e.target.value);
    let ProductClone = prodcuts.filter((p) => p.categories === e.target.value);
    setfilterdProduct(ProductClone);
    setFilterWorkOn(true);
    if (e.target.value === "All") {
      setfilterdProduct(AllProducts);
    }
  };
  let OpenModal = (pro) => {
    setSelectedItem(pro);
  };
  let CloseModel = () => {
    setSelectedItem(false);
  };
  let dispatch = useDispatch();
  return (
    <div className="S-Shop">
      <Link to="/Cart" className="ToCart" data-cart={cartItems.length}>
        <i class="bi bi-basket-fill"></i>
      </Link>
      <div className="container-fluid">
        <h3 className="username">كيف الحال {user}</h3>
        <div className="search-card">
          <h3>بتدور علي حاجه معينه ...؟</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(SearchFun(searchKey));
            }}
          >
            <input
              type="text"
              placeholder="بحث"
              className="form-control Search-Field"
              onChange={(e) => setsearchKey(e.target.value)}
            />
            <input
              type="submit"
              value="ابحث"
              id="submit"
              className="btn  btn-primary"
            />
          </form>
        </div>

        <div className="box-1">
          <h2>الأكثر مبيعا</h2>
          <div className="row">
            <Zoom top cascade>
              {products.map((item) => {
                return (
                  <div className="col-md-2 product" key={item.id}>
                    <div className="discount">{item.discount}</div>
                    <img
                      src={item.images}
                      alt=""
                      className="img-fluid lg-screen sm-screen"
                      onClick={() => OpenModal(item)}
                    />
                    <div className="head">{item.title}</div>
                    {/* <div className="desc">{item.desc}</div> */}

                    <div className="d-flex-mobile">
                      <div className="price">{item.price} جنيه</div>
                      <div
                        className="buy Center-Lg-screen"
                        onClick={(e) => {
                          dispatch(AddToCart(item));
                          e.target.innerText = " ✓ selected";
                          e.target.classList.add("Selected");
                          e.target.parentElement.parentElement.classList.add(
                            "SelectedCart"
                          );
                        }}
                      >
                        أضف للسة
                      </div>
                    </div>
                  </div>
                );
              })}
            </Zoom>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="header">العروض النار</div>
          <Zoom>
            <div className="offer col-md-3">
              <img src={img_01} alt="" className="img-fluid custom-img" />
            </div>
            <div className="offer col-md-3 text-card-01">
              <div className="head">العرض السنوي</div>
              <div className="desc">
                العروض عندا مستمره عرض خصم 12000 كل سنه
              </div>
            </div>
            <div className="offer col-md-3">
              <img src={img_02} alt="" className="img-fluid" />
            </div>
            <div className="offer col-md-3 text-card-02">
              <div className="head">العرض الشهري</div>
              <div className="desc">
                العروض عندا مستمره عرض خصم 2000 جنيه كل شهر
              </div>
            </div>
            <div className="offer col-md-3 text-card-03">
              <div className="head">عرض الجمله</div>
              <div className="desc">
                العروض عندا مستمره عرض االجمله علي كل الاصناف
              </div>
            </div>
            <div className="offer col-md-3">
              <img src={img_03} alt="" className="img-fluid" />
            </div>
            <div className="offer col-md-3 text-card-04">
              <div className="head">العرض الاسبوعي</div>
              <div className="desc"> العروض عندا مستمره عرض خصم 300 كل سنه</div>
            </div>
            <div className="offer col-md-3">
              <img src={img_04} alt="" className="img-fluid" />
            </div>
          </Zoom>
        </div>

        <div className="AllProducts">
          <h2>كل المنتجات</h2>
          <div className="colom">
            <div className="cat">
              <div className="filter-price">تصنيف علي حسب النوع</div>
              <select
                class="form-select form-select-lg mb-3"
                onChange={HandleCarigories}
              >
                <option value="All" selected>
                  كل العناصر
                </option>
                <option value="أزياء واكسسوار">أزياء واكسسوار</option>
                <option value="موبيلات">موبيلات</option>
                <option value="أجهزة كهربائية">أجهزة كهربائية</option>
                <option value="رياضة">رياضة</option>
              </select>
            </div>

            <div className="prc">
              <div className="filter-price">تصنيف علي حسب السعر</div>
              <select
                class="form-select form-select-lg"
                onChange={HandleSortPrice}
              >
                <option selected value="Lg-Sm">
                  الاعلي سعرأ
                </option>
                <option value="Sm-Lg">الاقل سعرأ</option>
              </select>
            </div>
          </div>

          <div className="row">
            <Fade top cascade>
              {filterWorkOn
                ? filterdProduct.map((el) => {
                    return (
                      <div className="col-md-3 relivant" key={el.id}>
                        <div className="img-section">
                          <img
                            src={el.images}
                            className="img-fluid"
                            alt="product img"
                            onClick={() => OpenModal(el)}
                          />
                        </div>
                        <h1>{el.title}</h1>
                        <div className="colom">
                          <div className="price">{el.price} جنيه</div>
                          <div
                            className="buy"
                            onClick={(e) => {
                              dispatch(AddToCart(el));
                              e.target.innerText = " ✓ selected";
                              e.target.classList.add("Selected");
                              e.target.parentElement.parentElement.classList.add(
                                "SelectedCart"
                              );
                            }}
                          >
                            أضف للسة
                          </div>
                        </div>
                      </div>
                    );
                  })
                : AllProducts.map((item) => {
                    return (
                      <div className="col-md-3 relivant" key={item.id}>
                        <div className="img-section">
                          <img
                            src={item.images}
                            className="img-fluid"
                            alt="product img"
                            onClick={() => OpenModal(item)}
                          />
                        </div>
                        <h1>{item.title}</h1>
                        <div className="colom">
                          <div className="price">{item.price} جنيه</div>
                          <div
                            className="buy"
                            onClick={(e) => {
                              dispatch(AddToCart(item));
                              e.target.innerText = " ✓ selected";
                              e.target.classList.add("Selected");
                              e.target.parentElement.parentElement.classList.add(
                                "SelectedCart"
                              );
                            }}
                          >
                            أضف للسة
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </Fade>
          </div>
        </div>
      </div>
      <ModalProduct item={SelectedItem} close={CloseModel} />
    </div>
  );
}

export default Shop;
