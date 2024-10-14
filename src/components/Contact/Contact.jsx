import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
import contact from '/logo.svg';

const Contact = () => {
  const phoneNumber = '+91 8667202917'; // Replace with your phone number
  const emailAddress = 'sagul09112001@gmail.com'; // Replace with your email address
  const whatsappNumber = '+91 8667202917'; // Replace with your WhatsApp number (same as phone number if applicable)

  return (
    <div id="contact-us" className="c-wrapper innerWidth flexCenter">
      <div className="paddings  flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="pinkText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you. We
            believe a good place to live can make your life better.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">{phoneNumber}</span>
                  </div>
                </div>
                <a href={`tel:${phoneNumber}`} className="flexCenter button">Call now</a>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">{whatsappNumber}</span>
                  </div>
                </div>
                <a href={`https://wa.me/${whatsappNumber}`} className="flexCenter button">Chat now</a>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Mail</span>
                    <span className="secondaryText">{emailAddress}</span>
                  </div>
                </div>
                <button className="button">
                  <a href={`mailto:${emailAddress}`}>Mail now</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className=" c-right">
          <div className="image-container">
            <img src={contact} alt="Contact" className="contact-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;