import React from "react";
import { Link } from "react-router-dom";
import navimg from "./nav.png";
function Navbar() {
  let exitMenu = () => {
    document.querySelector(".Droped-Menu").style.marginRight = "-100%";
  };
  let openMenu = () => {
    document.querySelector(".Droped-Menu").style.marginRight = "-7%";
  };
  return (
    <div className="navbar">
      <div className="logo">
        <i class="bi bi-bag-heart"> يلا بقي </i>
      </div>

      <ul className="menu">
        <li>
          <Link to="/">الرئيسيه</Link>
        </li>
        <li>
          <Link to="/#About">من نحن</Link>
        </li>
        <li>
          <Link to="/#Service">الخدمات</Link>
        </li>
        <li>
          <Link to="/Shop">ابدأ تسوق</Link>
        </li>
        <li>
          <Link to="/Cart">سلة المشتريات</Link>
        </li>
        <li>
          <Link to="/Login">تسجيل دخول</Link>
        </li>
      </ul>
      <i class="bi bi-list Btn-Drop-Menu" onClick={openMenu}></i>
      <ul className="Droped-Menu">
        <i className="bi bi-x Exit-Menu" onClick={exitMenu}></i>
        <img src={navimg} alt="navbar img" className="img-fluid" />
        <h1>
          <i class="bi bi-bag-heart"> يلا بقي </i>
        </h1>
        <li>
          <Link to="/" onClick={exitMenu}>
            <i class="bi bi-house-fill"></i> الرئيسيه
          </Link>
        </li>
        <li>
          <Link to="/#About" onClick={exitMenu}>
            من نحن
          </Link>
        </li>
        <li>
          <Link to="/#Service" onClick={exitMenu}>
            الخدمات
          </Link>
        </li>
        <li>
          <Link to="/Shop" onClick={exitMenu}>
            ابدأ تسوق
          </Link>
        </li>
        <li>
          <Link to="/Cart" onClick={exitMenu}>
            سلة المشتريات
          </Link>
        </li>
        <li>
          <Link to="/Login" onClick={exitMenu}>
            <i class="bi bi-arrow-bar-right"></i> تسجيل دخول
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
