import React from "react";
import Navbar from "./Navbar";
import { FaHeart, FaCalendarAlt, FaPeace } from "react-icons/fa";

function CremationPlanner() {
  return (
    <div className="cremation-planner min-vh-100 bg-dark text-light">
      <Navbar />

      <div className="container py-5">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8">
            <div className="wawy-branding mb-4">
              <h1 className="display-1 wawy-title">
                <span className="text-warning">W</span>
                <span className="text-warning">A</span>
                <span className="text-warning">W</span>
                <span className="text-warning">Y</span>
              </h1>
              <p className="lead text-warning mb-4">A After Life Friend</p>
            </div>
            <h2 className="display-4 mb-4">Cremation Planning Made Simple</h2>
            <p className="lead mb-4">
              At WAWY, we understand the importance of planning for life's final
              journey. Our compassionate approach ensures that your wishes are
              honored with dignity and respect.
            </p>
            <button className="btn btn-outline-warning btn-lg px-5">
              Start Planning
            </button>
          </div>
        </div>

        <div className="row g-4 py-5">
          <div className="col-md-4">
            <div className="card bg-dark h-100 border border-secondary">
              <div className="card-body text-center">
                <FaHeart size={40} className="text-warning mb-3" />
                <h3 className="card-title h4">Compassionate Care</h3>
                <p className="card-text">
                  We handle every detail with respect and understanding,
                  ensuring a dignified farewell.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-dark h-100 border border-secondary">
              <div className="card-body text-center">
                <FaCalendarAlt size={40} className="text-warning mb-3" />
                <h3 className="card-title h4">Simple Planning</h3>
                <p className="card-text">
                  Easy-to-use tools to help you plan every aspect of the
                  cremation service.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-dark h-100 border border-secondary">
              <div className="card-body text-center">
                <FaPeace size={40} className="text-warning mb-3" />
                <h3 className="card-title h4">Peace of Mind</h3>
                <p className="card-text">
                  Rest assured knowing that your wishes will be carried out
                  exactly as planned.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-8 text-center">
            <div className="p-4 bg-secondary bg-opacity-25 rounded">
              <h2 className="h3 mb-4">Your Trusted After Life Friend</h2>
              <p className="mb-4">
                Let WAWY guide you through this important journey with
                understanding and care.
              </p>
              <button className="btn btn-warning btn-lg me-3">
                Contact Us
              </button>
              <button className="btn btn-outline-warning btn-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CremationPlanner;
