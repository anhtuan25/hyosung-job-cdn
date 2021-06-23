import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Thumbnail from 'src/components/Thumbnail';
import OpenJobs from 'src/components/OpenJobs';
import {
  faThLarge,
  faHeart,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import thumbnailImg from 'src/assets/images/CompanySingle/thumbnail.png';
import CompanyDescription from './CompanyDescription';
import CompanyOverview from './CompanyOverview';
import CompanyLocation from './CompanyLocation';
import CompanySocial from './CompanySocial';

const data = [
  {
    id: 1,
    thumbnailImg,
    title: 'Hyosung Gongchae',
    jobCategory: 'Staff',
    jobCategoryIcon: faThLarge,
    location: 'Nhơn Trạch',
    locationIcon: faMapMarkerAlt,
    iconbutton: faHeart,
    buttonName: '30+ Vị Trí Tuyển Dụng',
    btnSize: 'sm',
  },
];

const CompanyDetails = () => {
  return (
    <Container className="company-single">
      <Row>
        <Col lg={12} md={12}>
          {data && data.map((item) => <Thumbnail key={item.id} {...item} />)}
        </Col>
        <Col md={12} sm={12} lg={8}>
          <CompanyDescription />
          <OpenJobs />
        </Col>
        <Col md={12} sm={12} lg={4}>
          <CompanyOverview />
          <CompanyLocation />
          <CompanySocial />
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyDetails;
