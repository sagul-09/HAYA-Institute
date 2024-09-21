import "./International.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Background from "../BackgroundSlider/BackgroundSlider"
import Logo from '/logo.svg';

const International = () => {
  return (
    <div className="inter-wrapper">
    <div className="inter-hero-wrapper">
      <div className="paddings innerWidth flexCenter inter-container">
        {/* left side */}
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
              Learning Has No Borders:  <br />
              Empowering International Students.
              <br /> Unlock Global Education
            </motion.h1>
          </div>
          <div className="flexColStart inter-quote flexinter-des">
            <span>"Success is a journey of learning, growth, and perseverance.</span>
            <span>Let us help turn your ambitions into achievements"</span>
          </div>

        </div>

        {/* right side */}
        {/* <div className="flexCenter inter-right">
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
        </div> */}
      </div>
    </div>
    </div>

  );
};

export default International;
