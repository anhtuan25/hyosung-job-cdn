import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import SectionHeading from 'src/components/SectionHeading';
import PricingCardThree from 'src/components/PricingCardThree';

const PricingPlan = () => {
  const pricingPlan = useSelector((store) => store.pricingPlan);
  return (
    <section className="bg-light pricing-plan pt-6 pt-md-13">
      <SectionHeading
        title="Choose Pricing Plan"
        description="Your next level Product developemnt company assets"
      />
      <Container className="pricing-plan-item pb-6 pb-md-13">
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
                <PricingCardThree
                  title={item.title}
                  price={item.price}
                  list={item.list}
                  id={item.id}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default PricingPlan;
