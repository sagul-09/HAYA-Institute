import React from "react";
import { HiShieldCheck } from "react-icons/hi";
import { MdSchool, MdLightbulb } from "react-icons/md";
import "./Value.css";
import valueLogo from '/Value.png';
import data from "../../assets/Data/value.json";

const iconMap = {
  HiShieldCheck: <HiShieldCheck />,
  MdSchool: <MdSchool />,
  MdLightbulb: <MdLightbulb />
};

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src={valueLogo} alt="Value" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart v-right">
          <span className="pinkText">Our Commitment</span>
          <span className="primaryText">The Value We Bring to You</span>
          <span className="secondaryText">
            We are always ready to support your growth by providing top-notch educational services.
            <br />
            We believe that a strong foundation of knowledge can transform your future and lead to lasting success.
          </span>

          {/* Vision, Mission, and Core Values Cards */}
          <div className="card-container">
            {data.map((item, index) => (
              <div key={index} className="card">
                <div className="icon">{iconMap[item.icon]}</div>
                <h3 className="card-title">{item.heading}</h3>
                <p className="card-description">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;