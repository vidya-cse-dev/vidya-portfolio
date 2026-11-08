
/* =====================================
   VIDYA - PERSONAL PORTFOLIO
===================================== */


/* =====================================
   1. TECHNICAL SKILLS
===================================== */

const skills = [
    {
        title: "Programming Languages",
        description: "Java, Python, C, SQL, JavaScript"
    },
    {
        title: "Data Science & Machine Learning",
        description: "Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn"
    },
    {
        title: "Web Development",
        description: "HTML, CSS, JavaScript, React.js, Node.js, Express.js"
    },
    {
        title: "Database Management",
        description: "MySQL, MongoDB Atlas"
    },
    {
        title: "Data Visualization",
        description: "Power BI, Excel, Plotly"
    },
    {
        title: "Developer Tools",
        description: "Git, GitHub, VS Code, Google Colab"
    }
];

const skillsContainer =
    document.getElementById("skills-container");

skills.forEach(skill => {
    skillsContainer.innerHTML += `
        <div class="skill-card">
            <h3>${skill.title}</h3>
            <p>${skill.description}</p>
        </div>
    `;
});


/* =====================================
   2. COMPLETED PROJECTS
===================================== */

const projects = [
    {
        title: "Sales Forecasting & Business Intelligence",
        category: "Data Science & BI",
        description:
            "An end-to-end Sales Forecasting and Business Intelligence platform for analyzing sales trends and generating business insights.",
        technologies: "Python, FastAPI, React",
        github:
            "https://github.com/vidya-cse-dev/sales-forecasting-business-intelligence",
        demo:
            "https://sales-forecasting-business-intellig.vercel.app/"
    },

    {
        title: "Customer Migration Analysis",
        category: "Machine Learning",
        description:
            "Customer churn prediction and migration pattern analysis using machine learning techniques and data analytics.",
        technologies: "Python, Pandas, Scikit-learn, Streamlit",
        github:
            "https://github.com/vidya-cse-dev/customer-migration-analysis",
        demo:
            "https://customer-migration-analysis-uszuurplfymurynbtskj2v.streamlit.app/"
    },

    {
        title: "India Wildfire ML Dashboard",
        category: "AI & Machine Learning",
        description:
            "An interactive machine learning dashboard for exploring and analyzing wildfire patterns in India.",
        technologies: "Python, Machine Learning, Streamlit",
        github:
            "https://github.com/vidya-cse-dev/india-wildfire-ml-dashboard",
        demo:
            "https://india-wildfire-ml-dashboard-mant3xuoj2domghnjvyu6z.streamlit.app/"
    },

    {
        title: "Amazon Product Pricing & Review Analytics",
        category: "Data Analytics",
        description:
            "Analyzed Amazon product pricing, discounts, ratings and customer reviews to generate meaningful business insights.",
        technologies: "Python, Pandas, Power BI, Excel",
        github:
            "https://github.com/vidya-cse-dev/amazon-product-pricing-analytics",
        demo: null
    },

    {
        title: "Toll Road Management System",
        category: "Full-Stack Development",
        description:
            "A full-stack web application designed to manage toll road operations using the MERN technology stack.",
        technologies: "MongoDB, Express.js, React.js, Node.js",
        github:
            "https://github.com/vidya-cse-dev/toll-road-management",
        demo: null
    },

    {
        title: "IPL Analysis",
        category: "Data Analytics",
        description:
            "Exploratory data analysis of IPL cricket data to discover patterns, team performance and player statistics.",
        technologies: "Python, Jupyter Notebook, Data Analysis",
        github:
            "https://github.com/vidya-cse-dev/ipl_analysis",
        demo: null
    },

    {
        title: "Generative AI Model",
        category: "Generative AI",
        description:
            "Generative AI assignments and practical notebooks exploring concepts and applications of generative artificial intelligence.",
        technologies: "Python, Generative AI, Jupyter Notebook",
        github:
            "https://github.com/vidya-cse-dev/Gen-ai-model",
        demo: null
    },

    {
        title: "Mini C Compiler",
        category: "Compiler Design",
        description:
            "A programming project exploring compiler design concepts and language processing.",
        technologies: "Programming, Compiler Design",
        github:
            "https://github.com/vidya-cse-dev/mini_C_compiler",
        demo: null
    },

    {
        title: "Crack Papers",
        category: "Web Development",
        description:
            "A web-based academic project designed to support students with examination preparation resources.",
        technologies: "HTML, CSS, JavaScript",
        github:
            "https://github.com/vidya-cse-dev/crack-papers",
        demo: null
    }
];


/* =====================================
   3. DISPLAY PROJECTS
===================================== */

const projectsContainer =
    document.getElementById("projects-container");

projects.forEach(project => {

    const demoButton = project.demo
        ? `<a href="${project.demo}" target="_blank"
             rel="noopener noreferrer">Live Demo ↗</a>`
        : "";

    projectsContainer.innerHTML += `
        <div class="project-card">

            <p class="project-category">
                ${project.category}
            </p>

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <p class="project-tech">
                <strong>Technologies:</strong>
                ${project.technologies}
            </p>

            <div class="project-links">

                <a href="${project.github}"
                   target="_blank"
                   rel="noopener noreferrer">
                   GitHub ↗
                </a>

                ${demoButton}

            </div>

        </div>
    `;
});


/* =====================================
   4. EXPERIENCE & CERTIFICATIONS
===================================== */

const experience = [
    {
        title: "Data Science",
        organization: "IBM Cognitive Class",
        description: "Certification in Data Science."
    },
    {
        title: "Gen AI Camp Certification",
        organization: "Algo University",
        description: "Certification in Generative Artificial Intelligence."
    },
    {
        title: "Data Science with Python Internship",
        organization: "SmartED Innovation",
        description: "Practical internship experience in Data Science using Python."
    },
    {
        title: "Python Programming Internship",
        organization: "Innovate Intern",
        description: "Internship certification in Python programming."
    },
    {
        title: "Web Development Internship",
        organization: "Internz Learn",
        description: "Internship certification in Web Development."
    },
    {
        title: "Data Analytics and Visualization",
        organization: "Accenture",
        description: "Job simulation certificate in Data Analytics and Visualization."
    },
    {
        title: "Realtime Programming for QNX Operating System",
        organization: "QNX – A Division of BlackBerry",
        description: "Certification in real-time programming for the QNX Operating System."
    }
];


/* =====================================
   DISPLAY CERTIFICATIONS
===================================== */

const experienceContainer =
    document.getElementById("experience-container");

experienceContainer.innerHTML = "";

experience.forEach(item => {

    experienceContainer.innerHTML += `
        <div class="experience-card">

            <h3>${item.title}</h3>

            <p><strong>${item.organization}</strong></p>

            <p>${item.description}</p>

        </div>
    `;
});


/* =====================================
   6. CONSOLE MESSAGE
===================================== */

console.log("Welcome to Vidya's Portfolio!");
console.log("Projects loaded:", projects.length);
console.log("Skills loaded:", skills.length);
console.log("Experience items loaded:", experience.length);