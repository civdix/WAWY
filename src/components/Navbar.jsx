import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPlus, FaRegUserCircle } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { IoSettings } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
// import Notification from "./Notification";
// import CalcContext from "./calcContext/calcContext";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <Link className="navbar-brand z-999 " to="/">
        "Need to edit"
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0 float-end ms-auto">
          <input
            className="form-control mr-sm-2 d-inline-block w-auto bg-secondary text-dark"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success  my-sm-0 mx-1"
            type="submit"
          >
            Search
          </button>
        </form>

        <ul className="navbar-nav">
          <li className="nav-item active">
            <FaPlus size={25} />
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <FaHome size={25} />
            </Link>
          </li>
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
              {/* {!doCall ? (
                <MdNotifications size={25} />
              ) : (
                <MdOutlineNotificationsActive size={25} />
              )} */}
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
