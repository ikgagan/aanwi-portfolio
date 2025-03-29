import { motion } from 'framer-motion';
import { FaDatabase, FaCode, FaTools, FaCloud, FaChartBar, FaProjectDiagram, FaTable, FaFileCode, FaDesktop } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Databases',
      icon: <FaDatabase size={36} />,
      skills: ['MS SQL Server', 'MySQL', 'Oracle SQL', 'PostgreSQL']
    },
    {
      title: 'Programming',
      icon: <FaCode size={36} />,
      skills: ['Python', 'R', 'SAS']
    },
    {
      title: 'Python Libraries',
      icon: <FaFileCode size={36} />,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Plotly']
    },
    {
      title: 'R Libraries',
      icon: <FaFileCode size={36} />,
      skills: ['Tidyverse', 'ggplot2', 'dplyr', 'tidyr', 'stringr', 'lubridate']
    },
    {
      title: 'Business Tools',
      icon: <FaTools size={36} />,
      skills: ['Salesforce', 'HubSpot', 'Slack', 'Google Analytics', 'Microsoft Office Suite (Word, Access, Excel, PowerPoint, Outlook)', 'Smartsheet']
    },
    {
      title: 'Cloud',
      icon: <FaCloud size={36} />,
      skills: ['SAP', 'Docker', 'Git', 'DevOps', 'Salesforce', 'AWS', 'Azure', 'GCP']
    },
    {
      title: 'Data Management',
      icon: <FaChartBar size={36} />,
      skills: ['Tableau', 'Power BI', 'Looker', 'Google Sheets', 'Google BigQuery']
    },
    {
      title: 'Data Engineering',
      icon: <FaProjectDiagram size={36} />,
      skills: ['Snowflake', 'Apache Hadoop', 'Apache Spark', 'ETL', 'Alteryx', 'Data Build Tool (dbt)', 'Databricks']
    },
    {
      title: 'Project Management',
      icon: <FaDesktop size={36} />,
      skills: ['Jira', 'Confluence', 'Kanban', 'Agile', 'SDLC', 'Scrum']
    },
    {
      title: 'MS Excel',
      icon: <FaTable size={36} />,
      skills: ['VLOOKUP', 'XLOOKUP', 'Pivot Tables', 'Macros', 'VBA']
    },
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h1 className="section-title" style={{ margin: "0 auto 2rem" }}>
            My Skills
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--gray)", maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}>
            I've developed a diverse skill set in data analytics, visualization, and engineering 
            that enables me to transform complex data into actionable insights.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", 
            gap: "2rem" 
          }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card"
              style={{ backgroundColor: "white" }}
            >
              <div style={{ padding: "2rem", textAlign: "center" }}>
                <div className="skill-icon" style={{ 
                  marginBottom: "1.5rem",
                  width: "80px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, var(--primary-light), var(--primary))",
                  borderRadius: "50%",
                  margin: "0 auto 1.5rem",
                  color: "white",
                  boxShadow: "0 8px 16px rgba(26, 86, 219, 0.2)"
                }}>
                  {category.icon}
                </div>
                <h3 style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "600", 
                  marginBottom: "1.5rem",
                  color: "var(--primary-dark)"
                }}>
                  {category.title}
                </h3>
                <ul style={{ textAlign: "left", paddingLeft: "1rem" }}>
                  {category.skills.map((skill) => (
                    <li key={skill} style={{ 
                      marginBottom: "0.75rem", 
                      color: "var(--gray)",
                      position: "relative",
                      paddingLeft: "1.25rem"
                    }}>
                      <span style={{ 
                        position: "absolute",
                        left: "0",
                        top: "0.5rem",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--primary)"
                      }}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 