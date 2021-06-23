import React, { useState } from 'react';
import { Row, Col, CustomInput } from 'reactstrap';

import PricingCardThree from 'src/components/PricingCardThree';

const pricingMonthly = [
  {
    id: 1,
    title: 'Basic Plan',
    price: '29',
    list: [
      'Unlimited Reservations',
      '2 Clients And Products',
      '5Gb Of Storage',
      'Housekeeping Status',
      'Web Booking Widget',
      'Monthly Reports And Analytics',
    ],
  },
  {
    id: 2,
    title: 'Premium Plan',
    price: '59',
    list: [
      'Unlimited Reservations',
      '2 Clients And Products',
      '5Gb Of Storage',
      'Housekeeping Status',
      'Web Booking Widget',
      'Monthly Reports And Analytics',
    ],
  },
];

const pricingYearly = [
  {
    id: 1,
    title: 'Basic Plan',
    price: '299',
    list: [
      'Unlimited Reservations',
      '2 Clients And Products',
      '5Gb Of Storage',
      'Housekeeping Status',
      'Web Booking Widget',
      'Monthly Reports And Analytics',
    ],
  },
  {
    id: 2,
    title: 'Premium Plan',
    price: '599',
    duration: 'Yearly',
    list: [
      'Unlimited Reservations',
      '2 Clients And Products',
      '5Gb Of Storage',
      'Housekeeping Status',
      'Web Booking Widget',
      'Monthly Reports And Analytics',
    ],
  },
];
const Pricing = () => {
  const [annually, setannually] = useState(false);
  return (
    <>
      <Row className="justify-content-center">
        <Col md={12} className="d-flex mb-5">
          <span
            className={` font-18 mr-5 ${
              annually ? 'text-dark' : 'text-primary'
            }`}
          >
            Monthly
          </span>
          <CustomInput
            type="switch"
            id="exampleCustomSwitch2"
            name="customSwitch"
            label=""
            onClick={() => setannually(!annually)}
            className="mt-1 mr-1"
          />
          <span
            className={` font-18 ${annually ? 'text-primary' : 'text-dark'}`}
          >
            Annually{' '}
          </span>
          <span className="ml-3 mt-1 font-15 text-success">(SAVE 10%)</span>
        </Col>
        {annually ? (
          <>
            {' '}
            {Array.isArray(pricingYearly) &&
              pricingYearly.map((item) => (
                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  key={item.id}
                  className="mb-md-6 mb-sm-6 mb-6 pricing-plan "
                >
                  <PricingCardThree
                    title={item.title}
                    price={item.price}
                    list={item.list}
                    id={item.id}
                  />
                </Col>
              ))}{' '}
          </>
        ) : (
          <>
            {' '}
            {Array.isArray(pricingMonthly) &&
              pricingMonthly.map((item) => (
                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  key={item.id}
                  className="mb-md-6 mb-sm-6 mb-6 pricing-plan "
                >
                  <PricingCardThree
                    title={item.title}
                    price={item.price}
                    list={item.list}
                    id={item.id}
                  />
                </Col>
              ))}{' '}
          </>
        )}
      </Row>
    </>
  );
};

export default Pricing;
