import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaDiscord, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaLinkedin size={24} />,
      platform: 'LinkedIn',
      value: 'aanwi-tarihalkar',
      link: 'https://www.linkedin.com/in/aanwi-tarihalkar/'
    },
    {
      icon: <FaGithub size={24} />,
      platform: 'GitHub',
      value: 'AanwiT',
      link: 'https://github.com/AanwiT'
    },
    {
      icon: <FaEnvelope size={24} />,
      platform: 'Email',
      value: 'aanwi.tarihalkar@gmail.com',
      link: 'mailto:aanwi.tarihalkar@gmail.com'
    },
    {
      icon: <FaTwitter size={24} />,
      platform: 'Twitter',
      value: '@AanwiT',
      link: 'https://twitter.com/AanwiT'
    },
    {
      icon: <FaDiscord size={24} />,
      platform: 'Discord',
      value: 'aanwi#1234',
      link: 'https://discord.com/users/aanwi#1234'
    },
    {
      icon: <FaPhoneAlt size={24} />,
      platform: 'Phone',
      value: '+1 (123) 456-7890',
      link: 'tel:+11234567890'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h1 className="section-title" style={{ margin: "0 auto 2rem" }}>
            Get In Touch
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--gray-600)", maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}>
            Feel free to reach out to me through any of the platforms below. 
            I'm always open to discussing new opportunities, projects, or just connecting with fellow data enthusiasts.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="contact-container"
        >
          {contactInfo.map((contact) => (
            <motion.a
              key={contact.platform}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="contact-card"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="contact-icon">
                {contact.icon}
              </div>
              <div className="contact-info">
                <h3>{contact.platform}</h3>
                <p>{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ 
            marginTop: "5rem", 
            textAlign: "center", 
            padding: "2rem", 
            backgroundColor: "rgba(30, 136, 229, 0.05)", 
            borderRadius: "15px" 
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "var(--primary)", marginBottom: "1rem" }}>
            Located in
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--gray-600)" }}>
            Jersey City, New Jersey, United States
          </p>
          <p style={{ fontSize: "1.125rem", color: "var(--gray-600)", marginTop: "1rem" }}>
            Available for remote work and relocation opportunities
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 