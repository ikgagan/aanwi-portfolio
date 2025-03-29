import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: 'Capgemini',
      location: 'Mumbai, India',
      period: '06/2021 – 12/2022',
      title: 'Senior Analyst',
      responsibilities: [
        'Managed UAT for multiple software releases, creating detailed test plans and collaborating closely with business teams to reduce post-launch issues',
        'Led the migration of on-prem applications to AWS (EC2, S3 and RDS), reducing infrastructure costs by $150K annually and speeding up deployments',
        'Directed a team of 4 in market trend analysis as SME, applying machine learning models like regression and classification to refine pricing strategies',
        'Engineered Python-SQL ETL pipelines to integrate CRM data with analytics tools, enabling data-driven insights for sales and marketing teams',
        'Drove Agile project sprints using Jira and Confluence, improving team collaboration and ensuring timely completion of high-priority tasks by 30%'
      ]
    },
    {
      company: 'Capgemini',
      location: 'Mumbai, India',
      period: 'Prior position',
      title: 'Analyst',
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
      company: 'N M Automation & Control Pvt. Ltd.',
      location: 'Mumbai, India',
      period: '03/2019 – 05/2021',
      title: 'Data Analyst',
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
            Professional <span className="text-indigo-600 dark:text-indigo-400">Experience</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            My career journey in data analytics, visualization, and business intelligence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative mx-auto"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 gradient-bg"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              variants={itemVariants}
              className={`mb-12 md:mb-24 relative md:w-1/2 ${
                index % 2 === 0 ? 'md:left-0 md:pr-12' : 'md:left-1/2 md:pl-12'
              }`}
            >
              {/* Timeline dot for desktop */}
              <div className="hidden md:block absolute right-0 md:right-auto md:left-full h-6 w-6 rounded-full gradient-bg transform md:translate-x-[-50%] md:translate-y-[32px] z-10">
                <div className="h-4 w-4 rounded-full bg-white dark:bg-gray-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              
              <div className="glass card-hover rounded-xl shadow-md p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mr-4">
                    <FaBriefcase className="text-xl text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400">{exp.company}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {exp.location}
                    </span>
                    <span className="gradient-bg text-white px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="inline-block h-1.5 w-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <span>{responsibility}</span>
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

export default Experience; 