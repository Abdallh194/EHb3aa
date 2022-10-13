import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect } from "react-router-dom";
import { ResiterUser } from "../../../redux/WeatherSlice";
import Modal from "react-modal";
import Fade from "react-reveal/Fade";
function Login() {
  let year = new Date().getFullYear();
  let [OpenReg, setOpenReg] = useState(null);
  let [openLog, setopenLog] = useState(true);
  let [errorLog, setErrorLog] = useState(null);
  let [succesReg, setsuccesReg] = useState(null);
  let [errorReg, seterrorReg] = useState(null);
  let [name, setName] = useState("");
  let [loginsucces, setloginsucces] = useState(false);
  let [password, setPass] = useState("");
  let [Reg_name, setReg_Name] = useState("");
  let [Reg_password, setReg_Pass] = useState("");
  let OpenRegister = () => {
    setopenLog(null);
    setOpenReg(true);
  };
  let user = useSelector((state) => state.Weather.user);
  let pass = useSelector((state) => state.Weather.pass);
  let HandleLogin = (e) => {
    e.preventDefault();
    if (name === user && password === pass) {
      setloginsucces(true);
    } else {
      setloginsucces(false);
      setErrorLog(true);
    }
  };
  let CloseRegister = () => {
    setOpenReg(null);
    setopenLog(true);
  };
  let HandleRegister = (e) => {
    e.preventDefault();
    if (succesReg) {
      dispatch(ResiterUser({ Reg_name, Reg_password }));
      setName(Reg_name);
      setPass(Reg_password);
      CloseRegister();
    } else {
      setsuccesReg(false);
    }
  };

  let dispatch = useDispatch();

  return (
    <Fragment>
      <Modal isOpen={loginsucces}>
        <div className="loginsucss">
          <h1>تم تسجيل الدخول بنجاح</h1>
          <i class="bi bi-check-circle-fill check"></i>
          <h4>ازيك يا {user}</h4>
          <Link to="/Shop">
            ابدا تسوق <i class="bi bi-cart-check"></i>
          </Link>
        </div>
      </Modal>

      {openLog ? (
        <div className="Login">
          <form onSubmit={HandleLogin}>
            <div className="head"> تسجيل دخول مستخدم</div>
            <Fade bottom cascade>
              <input
                type="text"
                placeholder="اسم المستخدم"
                className="form-control"
                onChange={(e) => {
                  if (e.target.value.length >= 5) {
                    e.target.classList.remove("error");
                    setName(e.target.value);
                  } else {
                    e.target.classList.add("error");
                  }
                }}
              />

              <input
                type="password"
                placeholder="الرقم السري"
                className="form-control"
                onChange={(e) => {
                  if (e.target.value.length > 3) {
                    e.target.classList.remove("error");
                    setPass(e.target.value);
                    setErrorLog(false);
                  } else {
                    e.target.classList.add("error");
                  }
                }}
              />
              <div className="logError">
                {errorLog ? `هناك خطا في اسم المستخدم او كلمه المرور` : ""}
              </div>
              <input
                type="submit"
                value="تسجيل دخول"
                className="form-control btn-dark"
              />
            </Fade>
            <div className="newResister">
              مستخدم جديد اضغط
              <span onClick={OpenRegister}> هنا للتسجيل </span>
            </div>
            <p className="copy">
              حقوق النشر بواسطة <span>عبدالله صبري</span> {year} . كل الحقوق
              محفوظة.
            </p>
          </form>
        </div>
      ) : (
        <Fade bottom cascade>
          <div className="Register">
            <form>
              <div className="head"> تسجيل دخول مستخدم جديد</div>
              <input
                type="text"
                placeholder="اسم المستخدم"
                className="form-control"
                onChange={(e) => {
                  if (e.target.value.length >= 5) {
                    e.target.classList.remove("error");
                    setReg_Name(e.target.value);
                    setsuccesReg(true);
                    seterrorReg(false);
                  } else {
                    e.target.classList.add("error");
                    setsuccesReg(false);
                    seterrorReg(true);
                  }
                }}
              />

              <input
                type="password"
                placeholder="الرقم السري"
                className="form-control"
                onChange={(e) => {
                  if (e.target.value.length >= 5) {
                    e.target.classList.remove("error");
                    setReg_Pass(e.target.value);
                    setsuccesReg(true);
                    setErrorLog(false);
                  } else {
                    e.target.classList.add("error");
                    setsuccesReg(false);
                    seterrorReg(true);
                  }
                }}
              />
              <input
                type="email"
                placeholder="البريد الالكتروني"
                className="form-control"
              />
              <input
                type="number"
                placeholder="رقم الهاتف"
                className="form-control"
              />
              <div className="logError">
                {errorReg ? `هناك خطا في اسم المستخدم او كلمه المرور` : ""}
              </div>
              <input
                type="submit"
                value="تسجيل دخول"
                className="form-control btn-dark"
                onClick={HandleRegister}
              />

              <p className="copy">
                حقوق النشر بواسطة <span>عبدالله صبري</span> {year} . كل الحقوق
                محفوظة.
              </p>
            </form>
          </div>
        </Fade>
      )}
    </Fragment>
  );
}

export default Login;
