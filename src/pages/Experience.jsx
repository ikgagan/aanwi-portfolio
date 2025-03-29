import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Analyst',
      company: 'Capgemini',
      location: 'Mumbai, India',
      period: '06/2021 – 12/2022',
      responsibilities: [
        'Managed UAT for multiple software releases, creating detailed test plans and collaborating closely with business teams to reduce post-launch issues',
        'Led the migration of on-prem applications to AWS (EC2, S3 and RDS), reducing infrastructure costs by $150K annually and speeding up deployments',
        'Directed a team of 4 in market trend analysis as SME, applying machine learning models like regression and classification to refine pricing strategies',
        'Engineered Python-SQL ETL pipelines to integrate CRM data with analytics tools, enabling data-driven insights for sales and marketing teams',
        'Drove Agile project sprints using Jira and Confluence, improving team collaboration and ensuring timely completion of high-priority tasks by 30%'
      ]
    },
    {
      title: 'Analyst',
      company: 'Capgemini',
      location: 'Mumbai, India',
      period: '01/2021 – 06/2021',
      responsibilities: [
        'Optimized SQL queries using joins, CTEs, stored procedures & indexing, improving query performance and enabling real-time business intelligence',
        'Streamlined data extraction and cleaning for 60+ reports using Excel VBA, reducing ad-hoc report time and improving consistency by 40%',
        'Delivered monthly KPI analyses using Power BI, focusing on tracking client sales and satisfaction metrics, driving better decision-making',
        'Created detailed paginated financial and operational reports in SQL Server Reporting Services (SSRS), including cash flow and P&L statements',
        'Utilized Monte Carlo simulations in Excel for financial risk assessment identifying $300K in savings, optimizing budget allocations for client projects',
        'Applied R for statistical modeling and hypothesis testing, improving forecasting accuracy and delivering reliable financial projections for global clients'
      ]
    },
    {
      title: 'Data Analyst',
      company: 'N M Automation & Control Pvt. Ltd.',
      location: 'Mumbai, India',
      period: '03/2019 – 05/2021',
      responsibilities: [
        'Optimized Snowflake warehousing for industrial data using auto-scaling, clustering, partitioning, and dbt transformations to improve performance',
        'Designed ETL pipelines with SSIS to integrate real-time equipment data, streamlining ingestion and transformation, cutting processing time by 22%',
        'Conducted data audits using SQL queries in BigQuery to speed up data extraction, saving over 100 man-hours annually, shortening project timelines',
        'Automated data entry for inventory tracking & production reports using Google Apps Script, reducing manual errors & improving workflow efficiency',
        'Generated monthly market insights for stakeholders, leveraging A/B testing and Google Analytics to optimize GTM strategies and boost campaign ROI',
        'Developed predictive supply chain models to forecast demand for industrial components, optimizing warehouse slotting and reducing stockouts',
        'Facilitated cross-departmental training on data visualization tools to improve real-time monitoring of production KPIs and data literacy by 50%'
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
            Work Experience
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--gray-600)", maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}>
            My professional journey as a Data Analyst has equipped me with expertise in data visualization, 
            ETL processes, and translating complex data into actionable business insights.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.title}`}
              variants={itemVariants}
              className="timeline-card"
            >
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">{experience.title}</h3>
                  <h4 className="timeline-subtitle">{experience.company} | {experience.location}</h4>
                </div>
                <span className="timeline-date">{experience.period}</span>
              </div>
              
              <div className="timeline-content">
                <ul>
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
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

export default Experience; 