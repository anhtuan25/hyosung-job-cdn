import React from 'react';
import { Button, ListGroup } from 'reactstrap';
import {
  faCalendar,
  faInfo,
  faMapMarkerAlt,
  faUserTie,
  faEnvelope,
  faGlobeAsia,
} from '@fortawesome/free-solid-svg-icons';
import DashboardCard from 'src/components/DashboardCard';
import Information from 'src/components/Information';

const overview = [
  {
    icon: faCalendar,
    title: 'LĨnh vực:',
    description: 'Nguyên liệu công nghiệp',
  },
  {
    icon: faMapMarkerAlt,
    title: 'Địa Chỉ',
    description: 'Đường N2, KCN Nhơn Trạch 5, Huyện Nhơn Trạch, Tỉnh Đồng Nai',
  },
  {
    icon: faInfo,
    title: 'Hotline:',
    description: '0251 3566 000',
  },
  {
    icon: faEnvelope,
    title: 'Email:',
    description: 'tuyendung@hyosung.com',
  },
  {
    icon: faUserTie,
    title: 'Company Size:',
    description: '7000+',
  },
  {
    icon: faGlobeAsia,
    title: 'Website:',
    description: 'http://hyosungvina.com/',
  },
];

const CompanyOverview = () => {
  return (
    <DashboardCard title="Giới thiệu công ty">
      <ListGroup>
        {overview &&
          overview.map((item, i) => <Information key={i} {...item} />)}
      </ListGroup>
      <Button block className="outline-hover--effect hyoColor">
       <a href="tel: 0251 3566 000">Liên hệ chúng tôi</a> 
      </Button>
    </DashboardCard>
  );
};

export default CompanyOverview;
