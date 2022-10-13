import React from "react";
import { Link } from "react-router-dom";
import img from "./About.jpg";
function About() {
  return (
    <div className="About" id="About">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-Card">
            <div className="head">معلومات حول يلا بقي</div>
            <div className="desc">
              دلوقتي يلا بقي بيدور علي راحتك ببساطة هتشتري اي حاجه نفسك فيها
              وهتوصلك لحد باب البيت في نفس اليوم ...!
            </div>
            <Link to="/shop" className="shoping">
              ابدأ تسوق
            </Link>
          </div>
          <div className="col-md-6 image-Card">
            <img src={img} className="img-fluid" alt="about img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
