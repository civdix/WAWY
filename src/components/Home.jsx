import React from "react";
import Navbar from "./Navbar";
function Home() {
  const navbarStyles = `
    .custom-navbar {
      background: rgba(51, 51, 51, 0.4); /* Semi-transparent dark background */
      backdrop-filter: blur(10px); /* Blur effect */
      -webkit-backdrop-filter: blur(10px); /* Safari support */
      border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* Subtle border */
    }
  
    .custom-navbar .navbar-brand {
      color: #ffeb3b !important; /* Bright yellow brand color */
      font-weight: bold;
      text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5); /* Soft shadow for better visibility */
    }
  
    .custom-navbar .nav-link {
      color: white !important;
      transition: color 0.3s ease-in-out;
    }
  
    .custom-navbar .nav-link:hover {
      color: #ffeb3b !important; /* Hover effect */
    }
  `;

  return (
    <div className="home">
      <Navbar />
      <div className="WAWY">
        <span className="title W">W</span>
        <span className="title A">A</span>
        <span className="title W">W</span>
        <span className="title Y">Y</span>
      </div>
      <div className="WAWY message">A After Life Friend</div>
      <input
        type="button"
        value="Plan After Life"
        className="HomePlanBtn btn btn-transparent px-5 border "
      />
    </div>
  );
}

export default Home;
