import React from 'react';
import {
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardTitle,
  Button,
} from 'reactstrap';

const PricingCardThree = (props) => {
  const { title, price, list, id } = props;
  return (
    <Card className="bg-white">
      <CardTitle className="text-primary h4 text-center p-2 py-4 font-weight-normal">
        {title}
      </CardTitle>
      <div className="card-bg-gradient text-white border-0 d-flex pl-8 py-6 pricing-one position-relative m-0 justify-content-center ">
        <h2 className="text-white">
          <span className="text-white h4">$</span>
          <span className="display-2 font-weight-normal ml-1 mr-2 ">
            {price}
          </span>
        </h2>
        <small className="d-flex align-items-end text-white h6  mt-2 ml-1 ">
          / per month
        </small>
      </div>
      <CardBody className="pl-6 pr-6">
        <ListGroup className="text-center pt-2 pb-2">
          {Array.isArray(list) &&
            list.map((item, i) => (
              <ListGroupItem key={i} className="border-0 mb-1 pb-0">
                {item}
              </ListGroupItem>
            ))}
        </ListGroup>
      </CardBody>
      <div className="text-center pb-6">
        <Button outline color="primary">
          Select Plan
        </Button>
      </div>
    </Card>
  );
};

export default PricingCardThree;
