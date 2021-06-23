import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// Own Component
import ContactForm from './ContactForm';
import LocationMap from 'src/components/LocationMap';

const Contact = () => {
  return (
    <Container fluid className="pb-10 overflow-hidden">
      <Row className="align-items-center">
        <Col md={12} lg={12} xs={12} sm={12} className="px-0">
          {/* <LocationMap height={550} /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31363.36253843532!2d106.91543039084927!3d10.702027823604084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3833cfd519978eb9!2sHyosung%20Viet%20Nam%20Co.%2Cltd!5e0!3m2!1sen!2s!4v1623295538416!5m2!1sen!2s"
            width="100%"
            height="550"
            allowfullscreen="true"
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
