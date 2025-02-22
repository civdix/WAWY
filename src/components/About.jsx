import React, { useState } from "react";
import Navbar from "./Navbar";
import { Carousel } from "react-bootstrap";
import {
  FaDownload,
  FaHeart,
  FaUsers,
  FaHandHoldingHeart,
} from "react-icons/fa";
import "../styles/about.css";
import { Services } from "./subcomponent/services";

const About = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleDownloadReport = () => {
    // Replace with actual report PDF URL
    const reportUrl =
      "D:/Reactproject/wawy/src/Assests/document/WAWYReport.pdf";
    const link = document.createElement("a");
    link.href = reportUrl;
    link.download = "WAWYReport.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-page min-vh-100">
      <Navbar />

      <div className="container py-5">
        <div className="row mb-5 justify-content-center text-center">
          <div className="col-md-10">
            <h1 className="display-4 mb-4">About WAWY</h1>
            <p className="lead mb-4">
              Guiding You to Mukti, A Journey Beyond Life
            </p>
            <p className="lead mb-4">
              We Offer a proper <strong>Ritualistic</strong> and{" "}
              <strong>Spiritual</strong> Cremation by which person can become
              part of The Supreme Energy Usually Called God, Ishwar(Bhagwan) or
              Allah
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              className="about-carousel"
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../Assests/images/legaltoritual.webp")}
                  alt="Responsibilty"
                />
                <Carousel.Caption className="glassy">
                  <h3>Take Full Responsibilty</h3>
                  <p>Handles Legal to Ritual all the Things</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../Assests/images/familylove.webp")}
                  alt="Compassionate Service"
                />
                <Carousel.Caption className="glassy">
                  <h3>Compassionate Service</h3>
                  <p>Guiding families with care and understanding</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../Assests/images/shininghelp.webp")}
                  alt="Easy Planning"
                />
                <Carousel.Caption className="glassy">
                  <h3>Simplified Planning</h3>
                  <p>User-friendly tools for seamless arrangements</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../Assests/images/247.png")}
                  alt="24/7 Support"
                />
                <Carousel.Caption className="glassy">
                  <h3>24/7 Support</h3>
                  <p>Always here when you need us</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className="row mb-5 g-4">
          <div className="col-md-4">
            <div className="feature-card text-center p-4">
              <FaHeart className="feature-icon mb-3" />
              <h3>Our Mission</h3>
              <p>
                To provide compassionate, accessible, and dignified cremation
                planning services that honor the wishes of individuals and
                comfort their loved ones.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card text-center p-4">
              <FaUsers className="feature-icon mb-3" />
              <h3>Who We Are</h3>
              <p>
                A dedicated team of professionals committed to simplifying the
                cremation planning process while providing emotional support and
                guidance.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card text-center p-4">
              <FaHandHoldingHeart className="feature-icon mb-3" />
              <h3>Our Values</h3>
              <p>
                Empathy, respect, transparency, and excellence in every aspect
                of our service to ensure peace of mind for families.
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <div className="info-section p-5">
              <h2 className="mb-4">Why Choose WAWY?</h2>
              <ul className="feature-list">
                <li>
                  Comprehensive cremation planning resources and deep Ritual
                  Knowledge
                </li>
                <li>
                  We Handle All Chaotic Process From Legal to Ritual, From
                  Cremation to Salvation, From Invitation to Accommodation
                </li>
                <li>Step-by-step guidance through legal requirements</li>
                <li>Customizable memorial service options - Blog, Memories</li>
                <li>Transparent pricing and affordable packages</li>
                <li>24/7 support from compassionate professionals</li>
                <li>Secure digital documentation storage</li>
                <li>Environmental consciousness in our practices</li>
                <li>We provide High quality Ritualistic Cremation</li>
                <li>Annual Rituals like Barsi Arrangements</li>
                <li>
                  Direct Consultation with Maha Brahmins - Vrindavan, Gayaji,
                  Kashi, Varanashi, Haridwar, Ayodhya, Chitrakoot, Puri etc
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <div className="info-section p-5">
              <h2 className="mb-4">Services</h2>
              <Services />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="download-section p-4">
              <h3 className="mb-3">Learn More About Our Impact</h3>
              <p className="mb-4">
                Download our comprehensive report to learn more about how WAWY
                is transforming the cremation planning experience.
              </p>{" "}
              <a
                href={require("../Assests/document/WAWYReport.pdf")}
                download="WAWYReport.pdf"
              >
                <button
                  className="underline btn text-warning px-3 py-2 btn-lg"
                  onClick={handleDownloadReport}
                >
                  {" "}
                  <FaDownload className="me-2" />
                  Download File
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
