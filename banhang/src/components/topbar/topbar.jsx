import "./topbar.css";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo/Logo-Test.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/context";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

export default function Topbar() {
  const { userhoten, logout, setuserhoten } = useContext(ShopContext);
  const islogin1 = localStorage.getItem("user");
  const [searchvalue, setsearchvalue] = useState([]);
  useEffect(() => {
    if (islogin1 != null) {
      setuserhoten(JSON.parse(islogin1).name);
    }
  }, [islogin1, setuserhoten]);

  return (
    <div className="topbar">
      <div className="topbarleft">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="topbarcenter">
        <div className="search-input">
          <div className="search-icon">
            <SearchIcon style={{ fontSize: "20" }} />
          </div>
          <Tippy
            interactive
            visible={searchvalue.length > 0}
            content="Tìm kiếm"
            render={(attrs) => (
              <div className="box" tabIndex="-1" {...attrs}>
                kết quả
              </div>
            )}
          >
            <input
              className="input"
              placeholder="Nhập tên sản phẩm"
              type="text"
            />
          </Tippy>
        </div>
      </div>
      <div className="topbarright">
        <div className="tabbar-link">
          <ul style={{ listStyle: "none", display: "flex", marginTop: "20px" }}>
            <Link to="/cart">
              {" "}
              <li>
                <ShoppingCartIcon />
              </li>
            </Link>
            {islogin1 != null ? (
              <>
                <li style={{marginLeft: "10px"}}> {userhoten}</li>

                <li>
                  <button
                    style={{ marginLeft: "20px", background:"blue", border: "none", color:"white" }}
                    onClick={() => logout()}
                  >
                    Đăng xuất
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link style={{color: "white", textDecoration: "none", marginLeft: "10px",}} to="/login"> Đăng nhập</Link>
                </li>
                <li>
                  <Link style={{color: "white",textDecoration: "none", marginLeft: "10px"}} to="/sigup">Đăng ký</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* <div className="tabbar-icon">
          <i className="fa-solid fa-user"></i>
          <i className="fa-solid fa-bell"></i>
        </div> */}
      </div>
    </div>
  );
}
