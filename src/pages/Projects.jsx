import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Cryptocurrency Price Anomaly Detection',
      period: '12/2024 - 01/2025',
      image: '/crypto-project.jpg', // Placeholder image
      github: 'https://github.com/AanwiT',
      description: [
        'Captured real-time crypto price data via CoinGecko API & WebSockets, effectively tracking fluctuations at minute-level granularity',
        'Detected price anomalies with LSTM neural networks, forecasting future volatility trends with a high 92% prediction accuracy',
        'Visualized market trends using Power BI, DAX, and time-series analysis, clearly highlighting abnormal price spikes across multiple timeframes'
      ]
    },
    {
      title: 'Fraud Detection in Credit Card Transactions',
      period: '09/2024 - 10/2024',
      image: '/fraud-project.jpg', // Placeholder image
      github: 'https://github.com/AanwiT',
      description: [
        'Organized credit card transactions into a relational SQL database, significantly improving retrieval speed with indexing and partitioning techniques',
        'Identified fraudulent patterns through TensorFlow Autoencoders, applying unsupervised learning for detailed anomaly detection and better results',
        'Mapped fraud trends on Tableau, seamlessly integrating geo-maps and anomaly tracking to effectively highlight high-risk geographical areas'
      ]
    },
    {
      title: 'Job Market Skill Gap Analysis',
      period: '03/2024 - 04/2024',
      image: '/skills-project.jpg', // Placeholder image
      github: 'https://github.com/AanwiT',
      description: [
        'Scraped 5,000+ job postings from LinkedIn and Indeed using Selenium & BeautifulSoup, automating weekly data collection and system updates',
        'Leveraged BERT-based NLP models to extract required skills and compare them against applicant resumes, uncovering key industry skill gaps',
        'Designed a dynamic Looker Studio dashboard with interactive filters by job role, region, and company, analyzing evolving skill demand trends'
      ]
    },
    {
      title: 'Sales Performance Dashboard & Automation',
      period: '01/2024 - 02/2024',
      image: '/sales-project.jpg', // Placeholder image
      github: 'https://github.com/AanwiT',
      description: [
        'Collected monthly sales data using VLOOKUP & INDEX-MATCH to consolidate records, track revenue trends, and analyze product performance',
        'Automated data cleaning and report generation using Excel Macros & VBA, streamlining workflows and improving data processing accuracy',
        'Built an interactive Excel dashboard with pivot tables, slicers, and conditional formatting to visualize and track key sales KPIs dynamically'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
            My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of data science and analytics projects showcasing my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="glass card-hover rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/800x400?text=${project.title.split(' ').join('+')}`;
                  }}
                />
                <div className="absolute top-0 right-0 p-4">
                  <span className="gradient-bg text-white text-xs px-3 py-1 rounded-full">
                    {project.period}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                </div>
                
                <ul className="space-y-2">
                  {project.description.map((item, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm flex items-start">
                      <span className="inline-block h-1.5 w-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="mt-6"
                >
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gradient-bg text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    <FaGithub className="mr-2" />
                    View on GitHub
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 