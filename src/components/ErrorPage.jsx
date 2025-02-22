import React from "react";
import "../styles/errorPage.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="ErrorPage">
      <div className="glassy errorMsg">
        <h1 className="big">404</h1>
        <h1>Page Not Found</h1>

        <Link
          className="btn glassy btn-primary"
          value={"Click Here - Home Page"}
          to="/"
        >
          Click Here - Home Page
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
