import Header from "./Component/Pages/Header/Header";
import Navbar from "./Component/Pages/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Shop from "./Component/Pages/Shop/Shop";
import Cart from "./Component/Pages/Cart/Cart";
import Login from "./Component/Pages/Log/Login";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
