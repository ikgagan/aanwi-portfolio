import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Cryptocurrency Price Anomaly Detection",
      period: "12/2024 - 01/2025",
      description: [
        "Captured real-time crypto price data via CoinGecko API & WebSockets, effectively tracking fluctuations at minute-level granularity",
        "Detected price anomalies with LSTM neural networks, forecasting future volatility trends with a high 92% prediction accuracy",
        "Visualized market trends using Power BI, DAX, and time-series analysis, clearly highlighting abnormal price spikes across multiple timeframes"
      ],
      image: "/crypto-project.jpg",
      github: "https://github.com/AanwiT/crypto-anomaly-detection",
      tech: ["Python", "TensorFlow", "Power BI", "CoinGecko API"]
    },
    {
      title: "Fraud Detection in Credit Card Transactions",
      period: "09/2024 - 10/2024",
      description: [
        "Organized credit card transactions into a relational SQL database, significantly improving retrieval speed with indexing and partitioning techniques",
        "Identified fraudulent patterns through TensorFlow Autoencoders, applying unsupervised learning for detailed anomaly detection and better results",
        "Mapped fraud trends on Tableau, seamlessly integrating geo-maps and anomaly tracking to effectively highlight high-risk geographical areas"
      ],
      image: "/fraud-detection.jpg",
      github: "https://github.com/AanwiT/fraud-detection",
      tech: ["Python", "TensorFlow", "SQL", "Tableau"]
    },
    {
      title: "Job Market Skill Gap Analysis",
      period: "03/2024 - 04/2024",
      description: [
        "Scraped 5,000+ job postings from LinkedIn and Indeed using Selenium & BeautifulSoup, automating weekly data collection and system updates",
        "Leveraged BERT-based NLP models to extract required skills and compare them against applicant resumes, uncovering key industry skill gaps",
        "Designed a dynamic Looker Studio dashboard with interactive filters by job role, region, and company, analyzing evolving skill demand trends"
      ],
      image: "/job-market.jpg",
      github: "https://github.com/AanwiT/job-market-analysis",
      tech: ["Python", "BERT", "Selenium", "Looker Studio"]
    },
    {
      title: "Sales Performance Dashboard & Automation",
      period: "01/2024 - 02/2024",
      description: [
        "Collected monthly sales data using VLOOKUP & INDEX-MATCH to consolidate records, track revenue trends, and analyze product performance",
        "Automated data cleaning and report generation using Excel Macros & VBA, streamlining workflows and improving data processing accuracy",
        "Built an interactive Excel dashboard with pivot tables, slicers, and conditional formatting to visualize and track key sales KPIs dynamically"
      ],
      image: "/sales-dashboard.jpg",
      github: "https://github.com/AanwiT/sales-dashboard",
      tech: ["Excel", "VBA", "Power Query", "SQL"]
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
            Projects
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--gray-600)", maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}>
            A showcase of my data science and analytics projects, demonstrating my skills in 
            data visualization, machine learning, and business intelligence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", 
            gap: "2rem" 
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="project-card"
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${project.title.replace(/ /g, '+')}&background=1e88e5&color=fff&size=350`;
                  }}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-date">{project.period}</span>
                
                <div className="project-description">
                  <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem" }}>
                    {project.description.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: "0.5rem" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        style={{ 
                          fontSize: "0.75rem", 
                          padding: "0.25rem 0.5rem",
                          backgroundColor: "rgba(30, 136, 229, 0.1)",
                          color: "var(--secondary)",
                          borderRadius: "4px",
                          fontWeight: "500"
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> View on GitHub <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 