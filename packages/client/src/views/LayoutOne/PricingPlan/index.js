import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';

import SectionHeading from 'src/components/SectionHeading';
import PricingCardOne from 'src/components/PricingCardOne';

const PricingPlan = () => {
  const pricingPlan = useSelector((store) => store.pricingPlan);
  return (
    <section className="pricing-plan--layoutone bg-light mb-6 mb-lg-13 position-relative pt-13 pt-lg-0">
      <img
        src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/line.png"
        alt="line-shape"
        className="line-shape1 position-absolute d-none d-xl-block"
      />
      <SectionHeading
        title="Choose Pricing Plan"
        description="Your next level Product developemnt company assets"
      />
      <Container className="pricing-plan-item ">
        <Row className="justify-content-center">
          {Array.isArray(pricingPlan) &&
            pricingPlan.map((item) => (
              <Col
                lg={4}
                md={12}
                sm={12}
                key={item.id}
                className="mb-md-6 mb-sm-6 mb-6"
              >
                <PricingCardOne
                  title={item.title}
                  price={item.price}
                  list={item.list}
                  id={item.id}
                />
              </Col>
            ))}
        </Row>
      </Container>
      <img
        src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/line3.png"
        alt="line-shape"
        className="line-shape2 position-absolute d-none d-xl-block"
      />
    </section>
  );
};

export default PricingPlan;
