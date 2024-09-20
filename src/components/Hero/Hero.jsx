import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Background from "../BackgroundSlider/BackgroundSlider"
import Logo from '/logo.svg';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <Background />
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Unlock  <br />
              Your Potential
              <br /> With Us
            </motion.h1>
          </div>
          <div className="flexColStart hero-quote flexhero-des">
            <span>"Success is a journey of learning, growth, and perseverance.</span>
            <span>Let us help turn your ambitions into achievements"</span>
          </div>


          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={10} end={30} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Courses</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={5000} end={8500} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Students</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={20} /> <span>+</span>
              </span>
              <span className="secondaryText">Best Faculties</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src={Logo} alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
