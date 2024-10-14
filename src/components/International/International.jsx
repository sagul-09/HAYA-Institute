import "./International.css";
import { motion } from "framer-motion";
import img1 from '../../components/International/Images/1.png';
import img2 from '../../components/International/Images/2.png';


const International = () => {
  console.log('ImageRight:', img1); // Check if the image is being imported correctly

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
                Learning Has No Borders: <br />
                Empowering International Students.
                <br /> Unlock Global Education
              </motion.h1>
            </div>
            <div className="flexColStart inter-quote flexinter-des">
              <span>
                "Success is a journey of learning, growth, and perseverance."
              </span>
              <span>Let us help turn your ambitions into achievements"</span>
            </div>
          </div>
        </div>
      </div>

      
      <section className="content-section">
        <div className="content-container">
          {/* Left Content */}
          <div className="left-content">
            <h2>Empowering Global Learners: Where Diversity Meets Education</h2>
            <p>
              We believe that education transcends borders, and our goal is to
              foster a community where students from all backgrounds can learn,
              grow, and achieve their dreams. By embracing diversity and
              promoting intercultural dialogue, we create a unique environment
              where students can develop both academically and personally.
            </p>
            <p>
              At Haya Globalize Learning, our students come from every corner of
              the globe, united by a passion for learning and personal growth.
              Together, we foster a collaborative environment where students are
              inspired to achieve their best, both academically and personally.
            </p>

           
          </div>

          {/* Right Image */}
          <div className="right-image-box">
            <img src={img2} alt="Global Learning" className="right-image" style={{ width: '100%', height: '100%' }} // Set a fixed width and height
            />
          </div>
        </div>
      </section>
      <div className="left-side">
        <h2>HAYA GLOBALISE LEARNING</h2>
        <p>
          At Haya Globalize Learning, our students come from every corner of the globe, united by a passion for learning and personal growth. 
          With a diverse community representing various cultures and perspectives, students benefit from a truly international learning experience. 
          Our world-class teachers, experts in their fields, bring a wealth of knowledge and global insights to the classroom, ensuring that every 
          student receives top-tier education, no matter where they're from. Together, we foster a collaborative environment where students are 
          inspired to achieve their best, both academically and personally.
        </p>
      </div>

      <div className="image-section">
        <div className="top-right-image">
          <img src={img1} alt="image" className="top-image" />
        </div>
      </div>
    </div>
  );
};

export default International;
