// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img className="card" src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   )
// }
// import React from 'react';
// import { CCard, CCardBody, CCardImage, CCardTitle, CCardText, CButton } from '@coreui/react';

// export const ProjectCard = ({ title, description, imgUrl,gihubUrl }) => {
//   return (
//     <CCard style={{ width: '100%', marginBottom: '20px' }}>
//       <CCardImage orientation="top" src={imgUrl} />
//       <CCardBody>
//         <CCardTitle>{title}</CCardTitle>
//         <CCardText>{description}</CCardText>
//         <CButton color="primary" href={gihubUrl}>
//           Github
//         </CButton>
//       </CCardBody>
//     </CCard>
//   );
// };

// import React from 'react';
// import { CCard, CCardBody, CCardImage, CCardTitle, CCardText, CButton } from '@coreui/react';

// export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
//   return (
//     <CCard style={{ width: '100%', marginBottom: '20px' }}>
//       <CCardImage orientation="top" src={imgUrl} />
//       <CCardBody>
//         <CCardTitle>{title}</CCardTitle>
//         <CCardText>{description}</CCardText>
//         <CButton color="primary" href={githubUrl} target="_blank" rel="noopener noreferrer">
//           Github
//         </CButton>
//       </CCardBody>
//     </CCard>
//   );
// };

import React from 'react';
import { CCard, CCardBody, CCardImage, CCardTitle, CCardText, CButton } from '@coreui/react';
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon from react-icons

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <CCard style={{ width: '100%', marginBottom: '20px' }}>
      <CCardImage orientation="top" src={imgUrl} />
      <CCardBody>
        <CCardTitle>{title}</CCardTitle>
        {/* <CCardText>{description}</CCardText> */}
        <CButton 
          color="" 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            border: '2px solid #000', // Add a border
            backgroundColor: 'transparent', // Transparent background
            color: '#000', // Text color
            alignItems: 'center', // Center items vertically
            gap: '8px', // Space between icon and text
            transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#c0c0c0'; // Silver background on hover
            e.target.style.color = '#000'; // Text color on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent'; // Reset background
            e.target.style.color = '#000'; // Reset text color
          }}
        >
          <FaGithub /> View on GitHub
        </CButton>
      </CCardBody>
    </CCard>
  );
};

export const ProjectCard2 = ({ title, description, imgUrl, Url }) => {
  return (
    <CCard style={{ width: '100%', marginBottom: '20px' }}>
      <CCardImage orientation="top" src={imgUrl} />
      <CCardBody>
        <CCardTitle>{title}</CCardTitle>
        {/* <CCardText>{description}</CCardText> */}
        <CButton 
          color="" 
          href={Url} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            border: '2px solid #000', // Add a border
            backgroundColor: 'transparent', // Transparent background
            color: '#000', // Text color
            alignItems: 'center', // Center items vertically
            gap: '8px', // Space between icon and text
            transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#c0c0c0'; // Silver background on hover
            e.target.style.color = '#000'; // Text color on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent'; // Reset background
            e.target.style.color = '#000'; // Reset text color
          }}
        >
          Go to Website
        </CButton>
      </CCardBody>
    </CCard>
  );
};