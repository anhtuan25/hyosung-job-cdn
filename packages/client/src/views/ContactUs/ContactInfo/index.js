import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const data = [
  {
    title: 'Hotline',
    logo: faPhone,
    contactNumber: '0251.3566.000',
    secondNumber: 'Ext: 1182 (Mr. Tính) hoặc 1061 (Mr. Tuấn)',
    email: null,
    location: null,
  },
  {
    title: 'Email',
    logo: faEnvelope,
    contactNumber: null,
    email: 'tuyendung@hyosung.com',
    secondEmail: 'support@example.com',
    location: null,
  },
  {
    title: 'Địa Chỉ',
    logo: faMapMarkerAlt,
    contactNumber: null,
    email: null,
    location: 'Đường N2, KCN Nhơn Trạch 5, Đồng Nai',
  },
];
const ContactInfo = () => {
  return (
    <Container className="pb-11 overflow-hidden">
      <Row>
        {data &&
          data.map((item, i) => (
            <Col key={i} md={4} className="text-center">
              <Card className="contact-info">
                <CardTitle className="h5 text-primary my-5">
                  {item.title}
                </CardTitle>
                <CardBody className="py-6 bg-primary card-bg-gradient position-relative">
                  <span className=" d-inline-block p-4">
                    <FontAwesomeIcon
                      className="text-white h4 m-0"
                      icon={item.logo}
                    />
                  </span>
                </CardBody>
                <CardFooter className="py-6 bg-white">
                  {item.contactNumber && (
                    <>
                      <CardText className="mb-0 text-muted">
                        {item.contactNumber}
                      </CardText>
                      <CardText className="mb-0 text-muted">
                        {item.secondNumber}
                      </CardText>
                    </>
                  )}
                  {item.email && (
                    <>
                      <Link to="#" className="d-block text-muted ">
                        {item.email}
                      </Link>
             
                    </>
                  )}
                  {item.location && (
                    <>
                      <CardText className="mb-0 text-muted">
                        {item.location}
                      </CardText>
        
                    </>
                  )}
                </CardFooter>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ContactInfo;
