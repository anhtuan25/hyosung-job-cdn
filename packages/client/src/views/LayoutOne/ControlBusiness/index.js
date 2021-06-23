import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import RoundShapeAnimation from 'src/components/RoundShapeAnimation';
import SectionHeading from 'src/components/SectionHeading';
import ControlCard from './ControlCard';

const controlBusiness = [
  {
    id: 1,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c1.png',
    title: 'Lương',
    text:
      'Mức lương cạnh tranh; Xét duyệt Tăng lương/ Thăng chức hằng năm theo hệ số đánh giá A/B/C.',
    to: '',
  },
  {
    id: 2,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c2.png',
    title: 'Xe Đưa Rước',
    text:
      'Xe đưa rước miễn phí tại Văn Thánh, Quận 7, Thủ Đức, BR-VT và nội tỉnh Đồng Nai; Xe về quê ăn tết từ Hà Nội đến Cà Mau.',
    to: '',
  },
  {
    id: 3,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c3.png',
    title: ' Nhà ở ',
    text:
      'Nhà ở/ Ký túc xá Hyosung miễn phí cho ứng viên ở xa theo quy định công ty (Phòng 2 người, đầy đủ trang thiết bị).',
    to: '',
  },
  {
    id: 4,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c4.png',
    title: 'Trainning ',
    text:
      'Được đào tạo bởi các quản lý và chuyên gia giàu kinh nghiệm ở mọi lĩnh vực...',
    to: '',
  },
  {
    id: 5,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c5.png',
    title: 'Thưởng',
    text:
      'Thưởng Tết/ Thưởng sản xuất/ Thưởng đánh giá hằng năm, Phụ cấp ngoại ngữ, Card điện thoại,...',
    to: '',
  },
  {
    id: 6,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c6.png',
    title: 'Đồng Phục',
    text:
      'Được cấp phát đồng phục miễn phí theo quy định của công ty.',
    to: '',
  },
  {
    id: 7,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c7.png',
    title: 'assest managment ',
    text:
      'Create jobs, allocate to technicians, track time & materials to determine job profitability ',
    to: '',
  },
  {
    id: 8,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c8.png',
    title: 'job notifications ',
    text:
      'Create jobs, allocate to technicians, track time & materials to determine job profitability ',
    to: '',
  },
  {
    id: 9,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c9.png',
    title: 'customer portal ',
    text:
      'Create jobs, allocate to technicians, track time & materials to determine job profitability ',
    to: '',
  },
];

const ControlBusiness = () => {
  return (
    <section className="control-business pt-7 pb-7 pt-sm-13 pb-sm-13 position-relative">
      <RoundShapeAnimation className="round-shape--left" />
      <div className="line3">
        <img
          src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/line3.png"
          alt="line"
          className="img-fluid"
        />
      </div>
      <SectionHeading
        title="Phúc lợi ưu việt"
        description="Your next level Product developemnt company assets"
      />
      <Container>
        <Row>
          {Array.isArray(controlBusiness) &&
            controlBusiness.map((item) => {
              if (item.id > 9) return false;
              return (
                <Col lg={4} key={item.id}>
                  <ControlCard {...item} />
                </Col>
              );
            })}
        </Row>
      </Container>
      <RoundShapeAnimation className="round-shape--right" />
    </section>
  );
};

export default ControlBusiness;
