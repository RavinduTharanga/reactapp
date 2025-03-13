// import { Container, Row, Col } from "react-bootstrap";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Resume = () => {
//   return (
//     <section className="resume" id="resume">
//       <Container>
//         <Row>
//           <Col size={12}>
//             {/* Static Resume Header */}

//             <div className="resume-header">
//               <h2>Resume</h2>
//             </div>

//             {/* Data Science Intern */}
//             <TrackVisibility partialVisibility>
//               {({ isVisible }) => (
//                 <div className={isVisible ? "animate__animated animate__fadeInUp" : "hidden"}>
//                   <div className="experience-item">
//                     <h3>Data Science Intern</h3>
//                     <p><strong>Clemson University Libraries</strong> | Clemson, SC | 8/2024 - Present</p>
//                     <ul>
//                       <li>Guide students and staff in Python (Pandas, Matplotlib, Seaborn), Power BI, Microsoft Excel, and Tableau to enhance their data visualization skills.</li>
//                       <li>Collaborated with researchers to optimize data cleaning, transformation, and visualization workflows, and developed interactive dashboards to enhance decision-making.</li>
//                       <li>Utilizing Python to clean data and convert it into structured data.</li>
//                     </ul>
//                   </div>
//                 </div>
//               )}
//             </TrackVisibility>

//             {/* Research Assistant */}
//             <TrackVisibility partialVisibility>
//               {({ isVisible }) => (
//                 <div className={isVisible ? "animate__animated animate__fadeInUp" : "hidden"}>
//                   <div className="experience-item">
//                     <h3>Research Assistant</h3>
//                     <p><strong>Clemson University</strong> | Clemson, SC | 8/2023 - 8/2024</p>
//                     <ul>
//                       <li>Designed an AI task manager for Google Workspace by integrating Google Apps Script and ChatGPT 4 for enhanced task management capabilities in the workplace.</li>
//                       <li>Implemented VirtuaScreens, a research framework for creating multiple screens in virtual reality environments, enhancing productivity and immersive work experiences.</li>
//                       <li>Designed an AI recommendation system for Windows and MacOS to assist users with goal-oriented tasks, increasing workplace efficiency by 20%.</li>
//                     </ul>
//                   </div>
//                 </div>
//               )}
//             </TrackVisibility>

//             {/* Web Developer */}
//             <TrackVisibility partialVisibility>
//               {({ isVisible }) => (
//                 <div className={isVisible ? "animate__animated animate__fadeInUp" : "hidden"}>
//                   <div className="experience-item">
//                     <h3>Web Developer</h3>
//                     <p><strong>Deviitor</strong> | Colombo, Sri Lanka | 3/2018 - 6/2022</p>
//                     <ul>
//                       <li>Developed over 20 user-friendly websites, boosting client engagement by 30% and ensuring 99% cross-device compatibility.</li>
//                       <li>Utilized React, Node.js, JavaScript, HTML5, CSS3, Bootstrap, jQuery, Rest API, XML, and WordPress to create custom designs and features.</li>
//                       <li>Troubleshot websites for clients, identifying and resolving issues affecting functionality, performance, or user experience.</li>
//                     </ul>
//                   </div>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2} alt="background" />
//     </section>
//   );
// };

import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Resume = () => {
  return (
    <section className="resume" id="resume">
      <Container>
        <Row>
          <Col size={12}>
            {/* Static Resume Header */}
            <div className="resume-header">
              <h2>Resume</h2>
            </div>

            {/* Timeline Container */}
            <div className="timeline">
              {/* Data Science Intern */}
              <TrackVisibility partialVisibility>
                {({ isVisible }) => (
                  <div className={`timeline-item ${isVisible ? "animate__animated animate__fadeInUp" : "hidden"}`}>
                    <div className="timeline-content">
                      <h3>Data Science Intern</h3>
                      <p><strong>Clemson University Libraries</strong> | Clemson, SC | 8/2024 - Present</p>
                      <ul>
                        <li>Guide students and staff in Python (Pandas, Matplotlib, Seaborn), Power BI, Microsoft Excel, and Tableau to enhance their data visualization skills.</li>
                        <li>Collaborated with researchers to optimize data cleaning, transformation, and visualization workflows, and developed interactive dashboards to enhance decision-making.</li>
                        <li>Utilizing Python to clean data and convert it into structured data.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </TrackVisibility>

              {/* Research Assistant */}
              <TrackVisibility partialVisibility>
                {({ isVisible }) => (
                  <div className={`timeline-item ${isVisible ? "animate__animated animate__fadeInUp" : "hidden"}`}>
                    <div className="timeline-content">
                      <h3>Research Assistant</h3>
                      <p><strong>Clemson University</strong> | Clemson, SC | 8/2023 - 8/2024</p>
                      <ul>
                        <li>Designed an AI task manager for Google Workspace by integrating Google Apps Script and ChatGPT 4 for enhanced task management capabilities in the workplace.</li>
                        <li>Implemented VirtuaScreens, a research framework for creating multiple screens in virtual reality environments, enhancing productivity and immersive work experiences.</li>
                        <li>Designed an AI recommendation system for Windows and MacOS to assist users with goal-oriented tasks, increasing workplace efficiency by 20%.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </TrackVisibility>

              {/* Web Developer */}
              <TrackVisibility partialVisibility>
                {({ isVisible }) => (
                  <div className={`timeline-item ${isVisible ? "animate__animated animate__fadeInUp" : "hidden"}`}>
                    <div className="timeline-content">
                      <h3>Web Developer</h3>
                      <p><strong>Deviitor</strong> | Colombo, Sri Lanka | 3/2018 - 6/2022</p>
                      <ul>
                        <li>Developed over 20 user-friendly websites, boosting client engagement by 30% and ensuring 99% cross-device compatibility.</li>
                        <li>Utilized React, Node.js, JavaScript, HTML5, CSS3, Bootstrap, jQuery, Rest API, XML, and WordPress to create custom designs and features.</li>
                        <li>Troubleshot websites for clients, identifying and resolving issues affecting functionality, performance, or user experience.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};