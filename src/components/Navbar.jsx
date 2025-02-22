import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaDonate,
  FaHome,
  FaPhone,
  FaPlus,
  FaRegUserCircle,
} from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { IoSettings } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { GrContact, GrResources } from "react-icons/gr";
import { MdContactPage, MdOutlineContactSupport } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { FcGallery } from "react-icons/fc";
// import Notification from "./Notification";
// import CalcContext from "./calcContext/calcContext";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-1 ">
      <Link className="navbar-brand z-999 " to="/">
        WAWY{" "}
        <img
          style={{ width: "2rem" }}
          src={require("../Assests/images/logoTransparent.png")}
          alt="wawylogo"
        />
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className=" my-2 my-lg-0  ms-auto">
          <button
            className="rainbow-border  rounded float-end my-sm-0 mx-1 py-1 px-2 d-flex align-items-center"
            type="button"
          >
            <FaDonate />
            Donate
          </button>
        </div>

        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <FaHome size={25} />
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/About">
              About Us
            </Link>
          </li>

          <li className="nav-item active">
            <Link className="nav-link" to="/ContactUs">
              Contact Us
              <MdOutlineContactSupport className="d-none" size={25} />
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Testimonials
              <FcGallery className="d-none" size={25} />
            </Link>
          </li>
          <li className="nav-item active"></li>
          <li
            className="nav-item dropdown"
            // onClick={() => {
            //   makeUnreadRead(null, Username);
            // }}
          >
            <span
              className="nav-link dropdown-toggle"
              to="/Notification"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <GrResources size={25} />
            </span>
            {/* <Notification /> */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Analytics">
              <SiGoogleanalytics size={25} />
            </Link>
          </li>

          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              to="/Notification"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FaRegUserCircle size={25} className="text-white mx-3" />
            </span>
            <div className="dropdown-menu p-1" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/Profile">
                <ImProfile size={25} />
              </Link>
              <Link className="dropdown-item" to="/Setting">
                <IoSettings size={25} />
              </Link>
              <div className="dropdown-divider border border-warning "></div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
