








import React, { useState } from 'react'
import quik from './images/logos/quikin.png'
import './projects.css'
import igb from './i-gotcha-bailbonds.png'
import asd from './asd.png'
import hair from './hair1.png'
import port from './portfolio.png'
import qu from './quikinfluence.png'
import mis from './mis.png'
import Footer from './components/footer'
import phishing from './images/logos/phishing.png'
import clothes from './clothingstore.png'
import cybersecurity from './images/logos/cybersecurity.png'
import diabetes from './images/logos/diabetes.png'

const Projects = () => {
    const [mydada, setMydada] = useState([
//       {id:1, name:"Phishing Campaign", tools:"Phishing", description:"Developed a simulated phishing website to demonstrate social engineering techniques and test user awareness, highlighting common attack vectors used by cybercriminals. Designed the project as part of a cybersecurity initiative to analyze user behavior, strengthen defensive measures, and improve organizational security awareness training.", link:"https://oceanbitefood.com/",  image:phishing, git:"", startdate: 7.2025, enddate:2.2024},
// {id:1, name:"Drone CyberSecurity", tools:"NIST", description:"Conduct a study to examine and analyzes the latest developments in drone security and vulnerabilities, with a focus on bringing forth a layered framework in counter-drone systems, changes in regulatory policies, and the rise of cybersecurity vulnerabilities affecting UAV", link:"",  image:cybersecurity, git:"", startdate: 3.2025, enddate:5.2024},
// {id:1, name:"Diabetes Prediction", tools:"Machine Learning", description:"Conduct a study to compare different machine learning models—SVM, Decision Trees, Linear Regression, Random Forest, and KNN—using a 2025 Kaggle dataset to identify the most effective classification method for diabetes prediction, enhancing predictive analytics in healthcare.", link:"https://github.com/mtravers1/DiabetesPrediction",  image:diabetes, git:"https://github.com/mtravers1/DiabetesPrediction", startdate: 3.2025, enddate:5.2024},

    {
      id: 1,
      name: "Phishing Campaign",
      tools: "Phishing",
      description: "Developed a simulated phishing website to demonstrate social engineering techniques and test user awareness, highlighting common attack vectors used by cybercriminals. Designed the project as part of a cybersecurity initiative to analyze user behavior, strengthen defensive measures, and improve organizational security awareness training.",
      link: "https://oceanbitefood.com/",
      image: phishing,
      git: "",
      startdate: 7.2025,
      enddate: 2.2024,
    },
    {
      id: 2,
      name: "Drone CyberSecurity",
      tools: "NIST",
      description: "Conduct a study to examine and analyzes the latest developments in drone security and vulnerabilities, with a focus on bringing forth a layered framework in counter-drone systems, changes in regulatory policies, and the rise of cybersecurity vulnerabilities affecting UAV",
      link: "",
      image: cybersecurity,
      git: "",
      startdate: 3.2025,
      enddate: 5.2024,
      pdf: "/CyberSecurity.pdf", // 👈 add the pdf path (put file in public/)
      powerpoint:"/Dronepowerpoint.pdf"
    },
    {
      id: 3,
      name: "Diabetes Prediction",
      tools: "Machine Learning",
      description:
        "Conduct a study to compare different machine learning models—SVM, Decision Trees, Linear Regression, Random Forest, and KNN—using a 2025 Kaggle dataset to identify the most effective classification method for diabetes prediction, enhancing predictive analytics in healthcare.",
      link: "https://github.com/mtravers1/DiabetesPrediction",
      image: diabetes,
      git: "https://github.com/mtravers1/DiabetesPrediction",
      startdate: 3.2025,
      enddate: 5.2024,
      pdf: "/DataScienceDiabetesPredictions.pdf", // 👈 add the pdf path (put file in public/)
      powerpoint:"/Diabetespowerpoint.pdf"
    },
    {
      id: 4,
      name: "IGotchabailbonds Website",
      tools: "NextJs, Redux, Postman, Javascript, Html, CSS, Tailwind",
      description: "Created a Jail Bonds website...",
      link: "https://www.i-gotchabailbonds.com/",
      image: igb,
      git: "",
      startdate: 1.2023,
      enddate: 2.2024,
    },
{id:2, image:qu, name:"Quik-Influence Marketplace Website", tools:"NextJs, TypeScript, Tailwind", description:"Assisted in the development of an online retail marketplace using ReactJS and TypeScript. Added CSS changes, login/register pages, and deployed through AWS Amplify.", link:"https://www.quikinfluence.com/", git:"", startdate:12.2022, enddate:1.2023},
{id:3, image:asd, name:"Alliance Software Development Website", 
tools:"ReactJs, JavaScript, CSS", 
description:"Developed a mobile-responsive website that would provide information and catalog of applications using React and Tailwind CSS.", 
link:"https://www.alliancesoftwaredevelopment.com/", 
git:"", 
startdate:5.2022, 
enddate:8.2022},

{id:4, name:"Clients business Website for a hair website        ", 
tools:"React, TypeScript, Node, Express, Oracle", 
image:hair,
description:"Develop a website that would allow customers to scheluel appointments using React and bootstrap to create the front end of the application. Use the fetch method to get and post to an api. Use the MVC architecture with Spring Boot for back end and connected to Mongo database.", 
link:"https://main.dgivi4wqcgsmp.amplifyapp.com/", 
git:"https://github.com/mtravers1/Hair", 
 
enddate:'in progress'},
{id:4, name:"Move in Silence Clothing brand Application", 
  tools:"ReactJs HTML, CSS, Javascript, Node Js, Express, Postgres", 
  image:mis,
  description:"Develop a web application for a Clothing brand using React and vanilla CSS for the front end, Node ExpressJs to build the server, and connect to the Postgres Database", 
  link:"https://main.d2ksyjsu87ryhl.amplifyapp.com/", 
  git:"https://github.com/mtravers1/MIS", 
   
  enddate:'in progress'},
{id:4, name:"Portfolio Website", 
tools:"ReactJs HTML, CSS, Javascript", 
image:port,
description:"Develop a website that would allow recruiters to view my resume, and expierence using ReactJs and CSS", 
link:"https://main.d28fcq71k4ljtc.amplifyapp.com/", 
git:"https://github.com/mtravers1/MyPortfolio", 
 
enddate:'in progress'},
{id:8, name:"Workout Mobile Application", 
tools:"Python, Kivy, Google Firebase, Balsamiq", 
description:"Collaborated on a fitness mobile application using Python kivy and Google Firebase. Designed a GUI wireframe with Balsamiq. Implemented a database for user authentication and real-time updates using Google Firebase.", 
link:"", 
git:"", 
startdate:2.2022, 
enddate:4.2022},
{id:9, name:"Cyberbullying Detection", 
image:{quik},
tools:"Python, google colab, NLP", 
description:"Developed a Python program for cyberbullying detection using various Natural Language Processing methods. Tested/trained the model for accuracy using a Twitter dataset.", 
link:"", 
git:"",
pdf:"/FinalCyberBullyin.pdf",
powerpoint:'/FinalCyberBullyingpowerpoint.pdf', 
startdate:10.2021, 
enddate:12.2021},
  ])


  // 👇 track which project has PDF open
  const [openPdfId, setOpenPdfId] = useState(null)
  const [openPP, setOpenPP]=useState(null)

  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        className="projects"
      >
        {mydada.map((d) => (
          <div key={d.id} className="project" style={{ padding: "20px", width: "300px" }}>
            <a href={d.link}>
              <img width={80} src={d.image} alt={d.name} />
            </a>
            <h3 style={{ color: "white" }}>{d.name}</h3>
            <h3 style={{ color: "white" }}>{d.tools}</h3>
            <h3 style={{ color: "white" }}>{d.description}</h3>

            <a
              style={{ textDecoration: "none", color: "white", fontSize: "large", fontWeight: "bold" }}
              href={d.link}
            >
              {d.name}
            </a>
            <br /><br />

            <a
              style={{ textDecoration: "none", color: "white", fontSize: "large", fontWeight: "bold" }}
              href={d.git}
            >
              Github
            </a>

            <h3>
              {d.startdate} - {d.enddate}
            </h3>

            {/* 👇 Show button ONLY if pdf exists */}
    {/* PDF Section */}
{/* PDF Section */}
{d.pdf && (
  <>
    <button
      onClick={() => setOpenPdfId(openPdfId === d.id ? null : d.id)}
      style={{
        marginTop: "10px",
        padding: "12px 24px",
        background: "#2563eb", // blue-600
        color: "white",
        fontWeight: "bold",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) => (e.target.style.background = "#1d4ed8")}
      onMouseOut={(e) => (e.target.style.background = "#2563eb")}
    >
      {openPdfId === d.id ? "Close PDF" : "Open PDF"}
    </button>

    {openPdfId === d.id && (
      <div
        style={{
          marginTop: "20px",
          background: "#f9fafb",
          borderRadius: "12px",
          boxShadow: "0px 6px 16px rgba(0,0,0,0.2)",
          overflow: "hidden",
          width: "100%",
          height: "80vh", // 👈 Makes it taller for readability
        }}
      >
        <iframe
          src={d.pdf}
          width="100%"
          height="100%"
          style={{ border: "none", borderRadius: "12px" }}
          title={`${d.name} PDF`}
        ></iframe>
      </div>
    )}
  </>
)}

{/* PowerPoint Section */}
{d.powerpoint && (
  <>
    <button
      onClick={() => setOpenPP(openPP === d.id ? null : d.id)}
      style={{
        marginTop: "10px",
        padding: "12px 24px",
        background: "#16a34a", // green-600
        color: "white",
        fontWeight: "bold",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) => (e.target.style.background = "#15803d")}
      onMouseOut={(e) => (e.target.style.background = "#16a34a")}
    >
      {openPP === d.id ? "Close PowerPoint" : "Open PowerPoint"}
    </button>

    {openPP === d.id && (
      <div
        style={{
          marginTop: "20px",
          background: "#f9fafb",
          borderRadius: "12px",
          boxShadow: "0px 6px 16px rgba(0,0,0,0.2)",
          overflow: "hidden",
          width: "100%",
          height: "80vh", // 👈 Matches PDF height
        }}
      >
        <iframe
          src={`https://view.officeapps.live.com/op/embed.aspx?src=${window.location.origin}${d.powerpoint}`}
          width="100%"
          height="100%"
          style={{ border: "none", borderRadius: "12px" }}
          title={`${d.name} PowerPoint`}
        ></iframe>
      </div>
    )}
  </>
)}

          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
