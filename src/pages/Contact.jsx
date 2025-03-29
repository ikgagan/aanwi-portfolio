import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaDiscord, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      platform: 'LinkedIn',
      icon: <FaLinkedin className="text-3xl" />,
      link: 'https://www.linkedin.com/in/aanwi-tarihalkar/',
      username: 'aanwi-tarihalkar',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      platform: 'GitHub',
      icon: <FaGithub className="text-3xl" />,
      link: 'https://github.com/AanwiT',
      username: 'AanwiT',
      color: 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800'
    },
    {
      platform: 'Email',
      icon: <FaEnvelope className="text-3xl" />,
      link: 'mailto:aanwi.t@gmail.com',
      username: 'aanwi.t@gmail.com',
      color: 'bg-red-600 hover:bg-red-700'
    },
    {
      platform: 'Twitter',
      icon: <FaTwitter className="text-3xl" />,
      link: 'https://twitter.com/AanwiT',
      username: '@AanwiT',
      color: 'bg-blue-400 hover:bg-blue-500'
    },
    {
      platform: 'Discord',
      icon: <FaDiscord className="text-3xl" />,
      link: '#',
      username: 'aanwi_t',
      color: 'bg-indigo-500 hover:bg-indigo-600'
    },
    {
      platform: 'Phone',
      icon: <FaPhone className="text-3xl" />,
      link: 'tel:+12345678900', // Replace with actual phone if available
      username: '(123) 456-7890', // Replace with actual phone if available
      color: 'bg-green-600 hover:bg-green-700'
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
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
            Get in <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            I'm currently open to new opportunities. Feel free to reach out if you'd like to collaborate 
            or discuss potential opportunities.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-xl shadow-md overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="md:flex items-center justify-between mb-12">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center md:text-left mb-8 md:mb-0"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Aanwi Tarihalkar
                  </h2>
                  <p className="text-indigo-600 dark:text-indigo-400 text-lg mb-1">Data Analyst</p>
                  <p className="text-gray-600 dark:text-gray-400">Jersey City, New Jersey, United States</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-xs mx-auto float-animation"
                >
                  <div className="gradient-bg p-1 rounded-xl">
                    <div className="bg-white dark:bg-gray-900 p-1 rounded-lg">
                      <img 
                        src="/profile-placeholder.svg" 
                        alt="Aanwi Tarihalkar" 
                        className="rounded-lg h-32 w-32 md:h-40 md:w-40 object-cover mx-auto"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/300?text=AT';
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.platform}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className={`${info.color} text-white flex items-center p-5 rounded-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg card-hover`}
                  >
                    <div className="bg-white/20 p-3 rounded-lg mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{info.platform}</h3>
                      <p className="text-white/90">{info.username}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-12 text-center"
              >
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Prefer to send a direct message?
                </p>
                
                <a 
                  href="mailto:aanwi.t@gmail.com" 
                  className="inline-flex items-center justify-center gradient-bg text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <FaEnvelope className="mr-2" />
                  Send Email
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 