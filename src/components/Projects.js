// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const projects = [
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     }
//     // {
//     //   title: "Business Startup",
//     //   description: "Design & Development",
//     //   imgUrl: projImg1,
//     // },
//     // {
//     //   title: "Business Startup",
//     //   description: "Design & Development",
//     //   imgUrl: projImg2,
//     // },
//     // {
//     //   title: "Business Startup",
//     //   description: "Design & Development",
//     //   imgUrl: projImg3,
//     // },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div >
//                 <h2>Projects</h2>
//                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                     </Nav.Item>
//                   </Nav> */}
//                   <Tab.Content id="slideInUp" >
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="section">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   )
// }
// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/laptop.png";
// import projImg2 from "../assets/img/laptop.png";
// import projImg3 from "../assets/img/laptop.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const machineLearningProjects = [
//     { title: "Laptop Price Predictor", description: "Deep Learning Model", imgUrl: projImg1 },
//     { title: "ML Project 2", description: "NLP Analysis", imgUrl: projImg2 },
//     { title: "ML Project 3", description: "Computer Vision", imgUrl: projImg3 }
//   ];

//   const dataEngineeringProjects = [
//     { title: "Data Eng Project 1", description: "ETL Pipeline", imgUrl: projImg1 },
//     { title: "Data Eng Project 2", description: "Data Warehousing", imgUrl: projImg2 },
//     { title: "Data Eng Project 3", description: "Big Data Processing", imgUrl: projImg3 }
//   ];

//   const dataAnalyticsProjects = [
//     { title: "Data Analytics Project 1", description: "Dashboard Creation", imgUrl: projImg1 },
//     { title: "Data Analytics Project 2", description: "Predictive Analytics", imgUrl: projImg2 },
//     { title: "Data Analytics Project 3", description: "Business Intelligence", imgUrl: projImg3 }
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div>
//                 <h2>Projects</h2>
//                 <p>Explore projects across Machine Learning, Data Engineering, and Data Analytics.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="ml">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="ml">Machine Learning</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="de">Data Engineering</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="da">Data Analytics</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp">
//                     <Tab.Pane eventKey="ml">
//                       <Row>
//                         {machineLearningProjects.map((project, index) => (
//                           <ProjectCard key={index} {...project} />
//                         ))}
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="de">
//                       <Row>
//                         {dataEngineeringProjects.map((project, index) => (
//                           <ProjectCard key={index} {...project} />
//                         ))}
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="da">
//                       <Row>
//                         {dataAnalyticsProjects.map((project, index) => (
//                           <ProjectCard key={index} {...project} />
//                         ))}
//                       </Row>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2} alt="background" />
//     </section>
//   );
// }


// import { Container, Row, Col } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/laptop.png";
// import projImg2 from "../assets/img/laptop.png";
// import projImg3 from "../assets/img/laptop.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const machineLearningProjects = [
//     { title: "ML Project 1", description: "Deep Learning Model", imgUrl: projImg1 },
//     { title: "ML Project 2", description: "NLP Analysis", imgUrl: projImg2 },
//     { title: "ML Project 3", description: "Computer Vision", imgUrl: projImg3 }
//   ];

//   const dataEngineeringProjects = [
//     { title: "Data Eng Project 1", description: "ETL Pipeline", imgUrl: projImg1 },
//     { title: "Data Eng Project 2", description: "Data Warehousing", imgUrl: projImg2 },
//     { title: "Data Eng Project 3", description: "Big Data Processing", imgUrl: projImg3 }
//   ];

//   const dataAnalyticsProjects = [
//     { title: "Data Analytics Project 1", description: "Dashboard Creation", imgUrl: projImg1 },
//     { title: "Data Analytics Project 2", description: "Predictive Analytics", imgUrl: projImg2 },
//     { title: "Data Analytics Project 3", description: "Business Intelligence", imgUrl: projImg3 }
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div>
//                 <h2>Projects</h2>
//                 <p>Explore projects across Machine Learning, Data Engineering, and Data Analytics.</p>
//                 <h3>Machine Learning</h3>
//                 <Row>
//                   {machineLearningProjects.map((project, index) => (
//                     <ProjectCard key={index} {...project} />
//                   ))}
//                 </Row>
//                 <h3>Data Engineering</h3>
//                 <Row>
//                   {dataEngineeringProjects.map((project, index) => (
//                     <ProjectCard key={index} {...project} />
//                   ))}
//                 </Row>
//                 <h3>Data Analytics</h3>
//                 <Row>
//                   {dataAnalyticsProjects.map((project, index) => (
//                     <ProjectCard key={index} {...project} />
//                   ))}
//                 </Row>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2} alt="background" />
//     </section>
//   );
// }


import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"; // Import the updated ProjectCard
import projImg1 from "../assets/img/laptop.png";
import projImg2 from "../assets/img/snowflake.png";
import projImg22 from "../assets/img/visualization.png";

import projImg3 from "../assets/img/chatgpt.png";
import projImg32 from "../assets/img/crypto.png";
import projImg33 from "../assets/img/emergency.png";
import projImg34 from "../assets/img/prime.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const machineLearningProjects = [
    { 
      title: "Laptop Price Predictor", 
      description: "Laptop price predictor is a Machine learning based application build on flask server", 
      imgUrl: projImg1, 
      githubUrl: "https://github.com/RavinduTharanga/LaptopPricePredictor/tree/main/LaptopPricePredictor-master" 
    },
    // Add more projects as needed
  ];

  const dataEngineeringProjects = [
    { 
      title: "Real Estate Data Analytics - ETL Data Engineering Project", 
      description: "This project demonstrates an end-to-end ETL (Extract, Transform, Load) data engineering pipeline for Redfin real estate data.", 
      imgUrl: projImg2, 
      githubUrl: "https://github.com/RavinduTharanga/Data_Engineering_Project1" 
    },
    { 
      title: "ETL and Visualization of Reddit Data Using Power BI", 
      description: "This project provides an end-to-end data pipeline for extracting, transforming, and loading (ETL) Reddit data.", 
      imgUrl: projImg22, 
      githubUrl: "https://github.com/RavinduTharanga/DataEngineeringProject2" 
    },
    // Add more projects as needed
  ];

  const dataAnalyticsProjects = [
    { 
      title: "ChatGPT's Rapid Growth Among Users", 
      description: "This project focuses on analyzing the growth of users on ChatGPT, a language model developed by OpenAI, using Power BI. The data for this analysis was obtained by scraping the relevant information from the website https://explodingtopics.com/blog/chatgpt-users. The collected data was then cleaned and visualized to derive meaningful insights.", 
      imgUrl: projImg3, 
      githubUrl: "https://github.com/RavinduTharanga/ChatGPT-s-Rapid-Growth?tab=readme-ov-file" 
    },
    { 
      title: "Cryptocurrency Dashboard Analysis", 
      description: "This project focuses on providing a comprehensive analysis of cryptocurrency pricing and overall market trends through an interactive dashboard. The dashboard utilizes data from various popular cryptocurrencies such as BTC, BNB, ETH, LINK, XEM, XRP, and more. By visualizing key metrics and trends, this dashboard aims to offer valuable insights into the cryptocurrency market's behavior over time.", 
      imgUrl: projImg32, 
      githubUrl: "https://github.com/RavinduTharanga/Crypto-currency" 
    },
    { 
      title: "Tableau Dashboard: Emergency Room Analysis", 
      description: "Welcome to the Emergency Room Analysis Tableau Dashboard! This dynamic dashboard offers a comprehensive exploration of vital insights extracted from emergency room data. From patient demographics to department referrals, this visualization serves as a valuable tool for understanding the patterns and trends within emergency room visits.", 
      imgUrl: projImg33, 
      githubUrl: "https://github.com/RavinduTharanga/Emergency_Dashboard" 
    },
      { 
        title: "Prime Tv Analysis", 
        description: "This project is based on prime tv analysis base on prime data and Insightfull visulize using Power BI", 
        imgUrl: projImg34, 
        githubUrl: "https://github.com/RavinduTharanga/Power-BI-Project" 
      }
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <h2>Projects</h2>
                  <p>Explore projects across Machine Learning, Data Engineering, and Data Analytics.</p>

                  {/* Machine Learning Projects */}
                  <h3>AI & Machine Learning</h3>
                  <Row className="justify-content-center">
                    {machineLearningProjects.map((project, index) => (
                      <Col md={4} key={index}>
                        <ProjectCard 
                          title={project.title} 
                          description={project.description} 
                          imgUrl={project.imgUrl} 
                          githubUrl={project.githubUrl} 
                        />
                      </Col>
                    ))}
                  </Row>

                  {/* Data Engineering Projects */}
                  <h3>Data Engineering</h3>
                  <Row className="justify-content-center">
                    {dataEngineeringProjects.map((project, index) => (
                      <Col md={4} key={index}>
                        <ProjectCard 
                          title={project.title} 
                          description={project.description} 
                          imgUrl={project.imgUrl} 
                          githubUrl={project.githubUrl} 
                        />
                      </Col>
                    ))}
                  </Row>

                  {/* Data Analytics Projects */}
                  <h3>Data Analytics</h3>
                  <Row className="justify-content-center">
                    {dataAnalyticsProjects.map((project, index) => (
                      <Col md={4} key={index}>
                        <ProjectCard 
                          title={project.title} 
                          description={project.description} 
                          imgUrl={project.imgUrl} 
                          githubUrl={project.githubUrl} 
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};