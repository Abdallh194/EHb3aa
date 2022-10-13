import React from "react";
import About from "../About/About";
import img from "./header.png";
import Zoom from "react-reveal/Zoom";
function Header() {
  return (
    <Zoom top cascade>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-Card">
              <div className="top-head">ناقصك ايه انهارده ...؟</div>
              <div className="main-head">
                هتلاقي كل حاجه عندنا متاحه{" "}
                {/* <i class="bi bi-emoji-sunglasses"></i> */}
              </div>
              <div className="bottom-head">روح دلوقتي حالا علي يلا بقي</div>
              <a href="#About" className="start">
                معلومات عنا
              </a>
            </div>
            <div className="col-md-6 Img-Card">
              <img src={img} alt="shop images" className="img-fluid" />
            </div>
          </div>
        </div>
      </header>
      <About />
    </Zoom>
  );
}

export default Header;
