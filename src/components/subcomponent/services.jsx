import { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaPhoenixFramework,
  FaVideo,
} from "react-icons/fa";
import { FaBowlFood, FaPersonCircleCheck } from "react-icons/fa6";
import { FcDonate } from "react-icons/fc";
import { MdHotel } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import { SiChromewebstore } from "react-icons/si";
import { GoLaw } from "react-icons/go";
import { TbCertificate } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GiRiver, GiLetterBomb, GiTransportationRings } from "react-icons/gi"; // Import the necessary icon or replace with relevant ones
const features = [
  {
    title: "Selection of Cremation Sites",
    description:
      "Assistance in choosing the appropriate location based on religious and personal preferences.",
    icon: <GiRiver className="feature-icon mb-3" />,
  },
  {
    title: "Invitation and Information Delivery",
    description: "Managing communication with relatives and loved ones.",
    icon: <GiLetterBomb className="feature-icon mb-3" />,
  },
  {
    title: "Ritual Management",
    description:
      "Arranging and overseeing all religious rites according to the deceased’s faith.",
    icon: <FaPhoenixFramework className="feature-icon mb-3" />,
  },
  {
    title: "Body Transportation",
    description:
      "Coordinating the transfer of the deceased to the cremation site.",
    icon: <GiTransportationRings className="feature-icon mb-3" />,
  },
  {
    title: "Accommodation Arrangements",
    description: "Providing lodging options for family members and attendees.",
    icon: <MdHotel className="feature-icon mb-3" />,
  },
  {
    title: "Post-Cremation Bhojan (Funeral Feast)",
    description:
      "Organizing traditional meals as per specific religious customs.",
    icon: <FaBowlFood className="feature-icon mb-3" />,
  },
  {
    title: "Annual Rituals & Barsi Handling",
    description: "Managing yearly remembrance ceremonies.",
    icon: <IoCalendarNumber className="feature-icon mb-3" />,
  },
  {
    title: "Memorial Page Creation",
    description: "Setting up an online tribute for the deceased.",
    icon: <SiChromewebstore className="feature-icon mb-3" />,
  },
  {
    title: "Professional Videography (Optional)",
    description:
      "Capturing the rituals for distant family members, if requested.",
    icon: <FaVideo className="feature-icon mb-3" />,
  },
  {
    title: "Consultation with Maha Brahmins",
    description:
      "Verified priests from Vrindavan, Kashi, Varanasi, Gaya Ji, etc., ensuring authenticity.",
    icon: <FaPersonCircleCheck className="feature-icon mb-3" />,
  },
  {
    title: "Donation & Payment Tracking",
    description: "Managing charitable contributions and associated payments.",
    icon: <FcDonate className="feature-icon mb-3" />,
  },
  {
    title: "Legal Guidance ",
    description: "Assisting with official documentation and legal formalities.",
    icon: <GoLaw className="feature-icon mb-3" />,
  },
  {
    title: "Cremation Certificate ",
    description:
      "Provided Certificate will helps in legal documentation creation.",
    icon: <TbCertificate className="feature-icon mb-3" />,
  },
  {
    title: "Cremation Certificate ",
    description:
      "Provided Certificate will helps in legal documentation creation.",
    icon: <TbCertificate className="feature-icon mb-3" />,
  },
];
const Services = (props) => {
  const [currentTrier, setCurrentTrier] = useState(0);
  const [trier, setTrier] = useState(
    features.slice(currentTrier, currentTrier + 3)
  );
  function handleChangeTrier(tria) {
    setTrier(features.slice(currentTrier, currentTrier + 3));
    setCurrentTrier(tria);
  }
  return (
    <div className=" d-flex flex-row align-items-center">
      <IoIosArrowBack
        style={{ maxWidth: "45px", minWidth: "40px", fontSize: "5vw" }}
        cursor="pointer"
        onClick={() => {
          handleChangeTrier(
            currentTrier - 3 < 0
              ? features.length - (features.length % 3)
              : currentTrier - 3
          );
        }}
      />

      <div className=" row featureTriad">
        {trier.map((tri, index) => (
          <div key={index} className="col-md-4" style={{ minWidth: "20vw" }}>
            <div className="feature-card text-center p-4">
              {tri.icon}
              {/* <FaUsers className="feature-icon mb-3" /> */}
              <h3>{tri.title}</h3>
              <p>{tri.description}</p>
            </div>
          </div>
        ))}
      </div>

      <IoIosArrowForward
        style={{ maxWidth: "45px", minWidth: "40px", fontSize: "5vw" }}
        cursor="pointer"
        onClick={() => {
          handleChangeTrier(
            currentTrier + 3 >= features.length
              ? currentTrier + 3 == features.length
                ? 0
                : (1 + currentTrier) % 3 == 0
                ? currentTrier
                : 0
              : currentTrier + 3
          );
        }}
      />
    </div>
  );
};

export default Services;
