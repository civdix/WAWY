import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaUser, FaChartLine, FaDonate } from "react-icons/fa";
import { features } from "./subcomponent/services";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Mock user data - Replace with actual user data
  const userData = {
    name: "John Doe",
    dateOfBirth: "1990-01-01",
    dateOfJoining: "2023-12-01",
    servicesProgress: features.map((feature) => ({
      ...feature,
      status:
        Math.random() > 0.5
          ? "completed"
          : Math.random() > 0.5
          ? "in-progress"
          : "not-started",
    })),
    donations: [
      {
        amount: 5000,
        date: "2023-12-15",
        usage: "Cremation Ritual Materials",
        status: "Utilized",
      },
      {
        amount: 3000,
        date: "2023-12-20",
        usage: "Priest Services",
        status: "Pending",
      },
    ],
  };

  const ProfileSection = () => (
    <div className="profile-section glassy p-4">
      <div className="d-flex align-items-center mb-4">
        <div className="profile-avatar">
          <FaUser size={40} />
        </div>
        <div className="ms-3">
          <h3 className="title mb-0">{userData.name}</h3>
          <p className="message mb-0">
            Member since {new Date(userData.dateOfJoining).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="profile-details">
        <div className="detail-item">
          <label>Date of Birth</label>
          <p>{new Date(userData.dateOfBirth).toLocaleDateString()}</p>
        </div>
        <div className="detail-item">
          <label>Member Since</label>
          <p>{new Date(userData.dateOfJoining).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );

  const ProcessTracker = () => (
    <div className="process-tracker glassy p-4">
      <h3 className="title mb-4">Cremation Process Tracker</h3>
      <div className="process-grid">
        {userData.servicesProgress.map((service, index) => (
          <div key={index} className={`process-card ${service.status}`}>
            <div className="icon-wrapper mb-2">{service.icon}</div>
            <h4>{service.title}</h4>
            <span className="status-badge">{service.status}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const DonationTracker = () => (
    <div className="donation-tracker glassy p-4">
      <h3 className="title mb-4">Donation Tracking</h3>
      <div className="donation-list">
        {userData.donations.map((donation, index) => (
          <div key={index} className="donation-card mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="amount">₹{donation.amount}</h4>
                <p className="usage">{donation.usage}</p>
              </div>
              <div className="text-end">
                <span
                  className={`status-badge ${donation.status.toLowerCase()}`}
                >
                  {donation.status}
                </span>
                <p className="date">
                  {new Date(donation.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="dashboard-container min-vh-100">
      <Navbar />
      <div className="container py-5">
        <div className="dashboard-tabs mb-4">
          <button
            className={`tab-btn ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            <FaUser /> Profile
          </button>
          <button
            className={`tab-btn ${activeTab === "process" ? "active" : ""}`}
            onClick={() => setActiveTab("process")}
          >
            <FaChartLine /> Process Tracker
          </button>
          <button
            className={`tab-btn ${activeTab === "donations" ? "active" : ""}`}
            onClick={() => setActiveTab("donations")}
          >
            <FaDonate /> Donations
          </button>
        </div>

        <div className="dashboard-content">
          {activeTab === "profile" && <ProfileSection />}
          {activeTab === "process" && <ProcessTracker />}
          {activeTab === "donations" && <DonationTracker />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
