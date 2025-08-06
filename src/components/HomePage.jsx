import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 12;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev % totalImages) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Helper function to calculate image index with wrapping
  const getImageIndex = (offset) =>
    ((currentImage + offset - 1) % totalImages) + 1;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#076585] to-white">
      {/* Header */}
      <header className="header flex flex-col md:flex-row justify-between items-center px-6 py-4">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="/assets/hospital-logo.png"
            alt="Hospital Logo"
            className="w-12 h-12 mr-4"
          />
          <h1 className="gradient-text">La Vida Meds</h1>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4 md:mb-0">
          <a href="#home" className="nav-link active">
            Home
          </a>
          <a href="#diagnosify" className="nav-link">
            Diagnosify
          </a>
          <a href="#consult" className="nav-link">
            Consult
          </a>
          <a href="#reports" className="nav-link">
            Reports
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <a href="https://la-vida-ai.vercel.app/" className="nav-link">
            AI Health
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/login" className="btn-secondary">
            Login
          </Link>
          <Link to="/signup" className="btn-primary">
            Sign Up
          </Link>
          <img
            src="/assets/profile-icon.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>

      {/* Main Grid */}
      <main className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Left Column */}
        <div className="left-column space-y-8">
          <div className="image-slider animate-fade-in">
            <img
              src={`/images/img${getImageIndex(0)}.jpg`}
              alt="Medical facility"
              className="slider-image"
            />
          </div>
          <div className="image-slider animate-fade-in">
            <img
              src={`/images/img${getImageIndex(2)}.jpg`}
              alt="Advanced equipment"
              className="slider-image"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column space-y-8">
          <div className="image-slider animate-fade-in">
            <img
              src={`/images/img${getImageIndex(1)}.jpg`}
              alt="Friendly staff"
              className="slider-image"
            />
          </div>
          <div className="image-slider animate-fade-in">
            <img
              src={`/images/img${getImageIndex(3)}.jpg`}
              alt="Patient care"
              className="slider-image"
            />
          </div>
        </div>
      </main>

      {/* About Section */}
      <section className="about-container w-full h-[600px] bg-gradient-to-r from-[#076585] to-[#10b981] text-white flex items-center justify-center text-center">
        <div className="w-full max-w-[1920px] px-6">
          <h2 className="text-3xl font-semibold mb-6">About La Vida Meds</h2>
          <p className="text-lg leading-relaxed">
            La Vida Meds is a cutting-edge online healthcare platform designed
            to enhance the patient experience by integrating advanced
            technologies such as Artificial Intelligence (AI) and telemedicine.
            The platform aims to revolutionize the healthcare industry by making
            quality healthcare accessible, affordable, and personalized for
            everyone. In today’s fast-paced world, people are increasingly
            seeking healthcare solutions that fit into their busy lives, and La
            Vida Meds provides just that. With AI-driven disease prediction and
            telemedicine consultations, it eliminates the need for long wait
            times and travel, making healthcare available at the fingertips of
            users. The platform’s goal is not just to provide healthcare, but to
            predict, prevent, and manage diseases with personalized care plans,
            ensuring better health outcomes for individuals worldwide. By
            combining technological innovation with compassionate healthcare, La
            Vida Meds strives to create a more efficient and responsive
            healthcare system that caters to the needs of every individual.
          </p>
          <ul className="text-lg leading-relaxed">
            <li>
              <strong>AI-Powered Disease Prediction:</strong> The platform uses
              AI algorithms to analyze medical history, symptoms, and lifestyle
              data to predict health risks. This allows users to take preventive
              actions early and access timely care before issues escalate.
            </li>
            <li>
              <strong>Telemedicine Consultations:</strong> Through secure video
              calls, voice calls, or text messaging, patients can consult
              doctors remotely, saving time and resources, especially for
              individuals in remote areas or those with mobility issues.
            </li>
            <li>
              <strong>Personalized Health Plans:</strong> Based on individual
              factors such as age, gender, lifestyle, and medical history, the
              platform customizes health recommendations, including diet plans,
              fitness routines, and mental health support tailored to each
              user’s needs.
            </li>
            <li>
              <strong>Comprehensive Medical Records:</strong> Patients’ medical
              history, lab results, and treatment records are securely stored
              and easily accessible, allowing healthcare providers to make
              informed decisions and improve care quality.
            </li>
            <li>
              <strong>Security and Privacy:</strong>La Vida Meds adheres to
              stringent data protection standards and privacy laws, ensuring
              that users’ personal and medical information is kept confidential
              and secure.
            </li>
            <li>
              <strong>Healthcare Professional Support:</strong> The platform
              provides healthcare providers with tools to access patient data,
              streamline care processes, and collaborate with professionals,
              ensuring a holistic approach to treatment and care.
            </li>
            <li>
              <strong>Public Health Research:</strong> Anonymized data collected
              from the platform helps identify health trends, supporting public
              health research and improving global healthcare practices.
            </li>
            <li>
              <strong>Global Accessibility:</strong> Regardless of geographic
              location or financial status, **La Vida Meds** aims to provide
              high-quality healthcare to everyone, enabling access to medical
              care where it was difficult to obtain.
            </li>
          </ul>
          <p className="text-lg leading-relaxed">
            In conclusion, La Vida Meds is designed to be more than just a
            healthcare platform—it is a bridge between traditional medicine and
            the future of digital healthcare. By using AI and telemedicine, it
            offers personalized, accessible, and secure healthcare solutions
            that cater to the evolving needs of modern society.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-6 text-center mt-auto">
        <p className="text-gray-600">
          © 2025 La Vida Meds. All Rights Reserved. |
          <a href="#privacy" className="footer-link">
            Privacy Policy
          </a>{" "}
          |
          <a href="#terms" className="footer-link">
            Terms of Service
          </a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
