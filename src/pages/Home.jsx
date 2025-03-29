import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import profileImage from '../assets/images/My photo_.jpg';
import resumePDF from '../assets/Aanwi Tarihalkar_Resume.pdf';

const Home = () => {
  // Animation variants
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <motion.div 
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
          className="home-flex-container"
        >
          {/* Profile Image */}
          <motion.div variants={itemAnimation} className="profile-container" style={{ flex: "0 0 auto" }}>
            <div className="profile-image">
              <div className="profile-gradient">
                <div className="profile-inner">
                  <img 
                    src={profileImage} 
                    alt="Aanwi Tarihalkar" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300?text=AT';
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div variants={itemAnimation} className="text-content" style={{ flex: "1 1 auto" }}>
            <motion.h1 variants={itemAnimation} className="heading">
              Aanwi Tarihalkar
            </motion.h1>
            
            <motion.h2 variants={itemAnimation} className="subheading">
              Data Analyst
            </motion.h2>
            
            <motion.p variants={itemAnimation} className="paragraph">
              Data Analyst with 3+ years of experience in predictive modeling, data visualization, and automation. Proficient in SQL, Python, Power BI, Tableau, and cloud platforms like AWS and Snowflake. At Capgemini, led app migration saving $150K annually, optimized reporting with Power BI and DAX, and improved SQL query efficiency for faster insights. Expertise in ETL, statistical modeling, and A/B testing, driving data-backed decisions. MS in Data Science from NJIT, passionate about transforming data into actionable strategies. Seeking opportunities to apply analytical and business intelligence skills to solve complex challenges.
            </motion.p>
            
            <motion.div variants={itemAnimation} className="button-container">
              <Link 
                to="/contact" 
                className="primary-button"
              >
                Get in Touch
              </Link>
              
              <a 
                href={resumePDF} 
                download
                className="secondary-button"
              >
                <FiDownload style={{ marginRight: '0.5rem' }} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 