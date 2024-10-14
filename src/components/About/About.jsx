import React from 'react';
import './About.css';
import about from '../../components/About/image/about.jpg';
import img1 from '../../components/About/image/1.png';
import img2 from '../../components/About/image/2.png';


const About = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      {/* Introduction Section */}
      <section className="about-introduction">
        <p>Base Planning Consultants help clients navigate the complex planning system in the UK. With expertise in both urban and rural planning, we deliver successful outcomes for a variety of projects, including residential, commercial, agricultural, and heritage developments.</p>
      </section>

      <div className="about-top-image">
        <img src={about} alt="About Us" className="about-main-image" />
      </div>
      
      {/* Our Expertise Section */}
      <section className="about-expertise">
        <div className="expertise-content">
          <h2>Our Expertise</h2>
          <p>We bring extensive experience to projects across various sectors. Our services cover the full spectrum of planning, from securing permissions to providing expert advice on design and sustainability.</p>
        </div>
        <img src={img1} alt="Planning expertise" className="Planning expertise" />
      </section>

      {/* First section with image on right, text on left */}
      <div className="about-section">
        <div className="text-section">
          <h2 className="section-heading">Who we are</h2>
          <p className="section-description">
            At Haya Globalise Learning, we have curated a comprehensive approach that combines innovative curricula,
            cutting-edge teaching methods, and a holistic focus on cognitive, physical, and personal growth.
          </p>
        </div>
        <div className="image-section">
          <img src={img2} alt="Who we are" className="about-image" />
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-us">
        <h2>About Us</h2>
        
      </div>

      {/* Why Choose Us Section */}
      <section className="about-why-choose">
        <h2>Why Choose Base Planning?</h2>
        <div className="why-choose-grid">
          <div className="why-choose-item">
            <h3>Expert Knowledge</h3>
            <p>With years of industry experience, we offer expert knowledge that makes the planning process smoother.</p>
          </div>
          <div className="why-choose-item">
            <h3>Client-Focused</h3>
            <p>We tailor our services to meet the specific needs of each client, ensuring personalized attention.</p>
          </div>
          <div className="why-choose-item">
            <h3>Successful Outcomes</h3>
            <p>Our team has a proven track record of securing planning permissions for diverse projects.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
