import React from 'react';
import './About.css';
import about from '../../components/About/image/about.jpg';
import img1 from '../../components/About/image/1.png';
import img2 from '../../components/About/image/2.png';
import img from '../../components/About/image/image.jpg';


import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-wrapper ">
      <div className="about-container innerWidth"></div>
      {/* Hero Section */}
      <div
      className="inter-hero-wrapper"
      style={{ backgroundImage: `url(${img})`, height: '100%', width: '100%' }} // Use the imported image
      >
        <div className="paddings innerWidth flexCenter inter-container">
          {/* Left Side */}
          <div className="flexColStart inter-left">
            <div className="inter-title">
              <div className="orange-circle" />
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "ease-in",
                }}
              >
                ABOUT US <br />
              </motion.h1>
            </div>
            <section className="about-introduction">
              <p>
                Base Planning Consultants help clients navigate the complex planning system in the UK. 
                With expertise in both urban and rural planning, we deliver successful outcomes for a variety of projects, 
                including residential, commercial, agricultural, and heritage developments.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Our Expertise Section */}
      <section className="about-expertise innerWidth">
        <div className="expertise-content">
          <h2>Why Choose Us</h2>
          <p>
            We bring extensive experience to projects across various sectors. Our services cover the full spectrum of planning, from securing permissions to providing expert advice on design and sustainability.
          </p>
        </div>
        <img src={img1} alt="Planning expertise" className="planning-expertise" />
      </section>

      {/* First Section with Image on Right, Text on Left */}
      <div className="about-section innerWidth ">
        <div className="text-section">
          <h2 className="section-heading">Who We Are</h2>
          <p className="section-description">
            At Haya Globalise Learning, we have curated a comprehensive approach that combines innovative curricula,
            cutting-edge teaching methods, and a holistic focus on cognitive, physical, and personal growth.
          </p>
        </div>
        <div className="image-section">
          <img src={img2} alt="Who We Are" className="about-image" />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="about-why-choose innerWidth">
        <h2>Why Choose Base Planning?</h2>
        <div className="why-choose-grid">
          <div className="why-choose-item">
            <h3>Expert Knowledge</h3>
            <p>
              With years of industry experience, we offer expert knowledge that makes the planning process smoother.
            </p>
          </div>
          <div className="why-choose-item">
            <h3>Client-Focused</h3>
            <p>
              We tailor our services to meet the specific needs of each client, ensuring personalized attention.
            </p>
          </div>
          <div className="why-choose-item">
            <h3>Successful Outcomes</h3>
            <p>
              Our team has a proven track record of securing planning permissions for diverse projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
