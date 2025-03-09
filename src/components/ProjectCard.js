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
import React from 'react';
import { CCard, CCardBody, CCardImage, CCardTitle, CCardText, CButton } from '@coreui/react';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <CCard style={{ width: '100%', marginBottom: '20px' }}>
      <CCardImage orientation="top" src={imgUrl} />
      <CCardBody>
        <CCardTitle>{title}</CCardTitle>
        <CCardText>{description}</CCardText>
        <CButton color="primary" href="#">
          Github
        </CButton>
      </CCardBody>
    </CCard>
  );
};