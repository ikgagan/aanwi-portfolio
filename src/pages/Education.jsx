import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      institution: 'New Jersey Institute of Technology',
      degree: 'MS in Data Science',
      period: '01/2023 – 12/2024',
      location: 'New Jersey, USA',
      icon: <FaGraduationCap className="text-4xl text-indigo-600 dark:text-indigo-400" />,
      details: [
        'Advanced coursework in machine learning, statistical modeling, and data visualization',
        'Research focus on predictive analytics and anomaly detection techniques',
        'Collaborated on interdisciplinary projects combining data science with domain expertise'
      ]
    },
    {
      institution: 'Thakur College Of Engineering & Technology',
      degree: 'BE in Electronics & Telecommunication',
      period: '08/2017 – 05/2021',
      location: 'Mumbai, India',
      icon: <FaUniversity className="text-4xl text-indigo-600 dark:text-indigo-400" />,
      details: [
        'Coursework included Data Structures, Database Management Systems, and Computer Networks',
        'Developed technical skills in programming and systems design',
        'Participated in technical competitions and hackathons'
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="section-heading">
            My <span className="text-indigo-600 dark:text-indigo-400">Education</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Academic background that has shaped my analytical skills and technical knowledge.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {educationData.map((edu) => (
            <motion.div 
              key={edu.institution}
              variants={itemVariants}
              className="glass card-hover rounded-xl shadow-md overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3 gradient-bg md:gradient-bg p-8 flex flex-col justify-center items-center">
                  <div className="mb-4 float-animation">
                    {edu.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white text-center">
                    {edu.institution}
                  </h3>
                  <p className="text-white/90 font-medium text-center mt-2">
                    {edu.degree}
                  </p>
                  <div className="mt-4 flex flex-col items-center text-sm text-white/80">
                    <span className="bg-white/20 px-4 py-1 rounded-full mb-2">
                      {edu.period}
                    </span>
                    <span className="bg-white/20 px-4 py-1 rounded-full">
                      {edu.location}
                    </span>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Highlights & Achievements
                  </h4>
                  <ul className="space-y-3">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="inline-block h-2 w-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>{detail}</span>
                      </li>
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