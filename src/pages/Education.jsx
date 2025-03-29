import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      school: "New Jersey Institute of Technology",
      degree: "MS in Data Science",
      period: "01/2023 – 12/2024",
      location: "Newark, NJ",
      courses: [
        "Advanced Database Systems",
        "Machine Learning",
        "Data Mining and Analysis",
        "Statistical Methods for Data Science",
        "Deep Learning",
        "Big Data Analytics",
        "Natural Language Processing"
      ],
      achievements: [
        "Dean's List for academic excellence",
        "Participated in data visualization competition",
        "Completed capstone project on predictive analytics for healthcare outcomes"
      ]
    },
    {
      school: "Thakur College Of Engineering & Technology",
      degree: "BE in Electronics & Telecommunication",
      period: "08/2017 – 05/2021",
      location: "Mumbai, India",
      courses: [
        "Digital Signal Processing",
        "Programming Fundamentals",
        "Database Management Systems",
        "Computer Networks",
        "Digital Electronics"
      ],
      achievements: [
        "Graduated with First Class Honors",
        "Technical team lead for college annual tech fest",
        "Developed an IoT-based smart energy monitoring system as final year project"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
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
            Education
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--gray-600)", maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}>
            My academic journey has equipped me with a strong foundation in data science, 
            analytics, and technology, preparing me for real-world challenges.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {educationData.map((education, index) => (
            <motion.div
              key={education.school}
              variants={itemVariants}
              className="timeline-card"
            >
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">{education.degree}</h3>
                  <h4 className="timeline-subtitle">{education.school} | {education.location}</h4>
                </div>
                <span className="timeline-date">{education.period}</span>
              </div>
              
              <div className="timeline-content">
                <div style={{ marginBottom: "1.5rem" }}>
                  <h5 style={{ fontSize: "1.1rem", fontWeight: "600", color: "var(--primary)", marginBottom: "0.75rem" }}>
                    Coursework
                  </h5>
                  <ul>
                    {education.courses.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 style={{ fontSize: "1.1rem", fontWeight: "600", color: "var(--primary)", marginBottom: "0.75rem" }}>
                    Achievements
                  </h5>
                  <ul>
                    {education.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education; 