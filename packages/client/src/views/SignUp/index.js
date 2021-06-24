import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faEnvelope,
  faLock,
  faCalendar,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

import RegistrationItem from 'src/components/RegistrationItem';
import LoginItem from 'src/components/LoginItem';
import '../../assets/js/functions.js';

const SignUp = () => {
  return (
    <Container className="pt-13">
      <Card className="overflow-hidden">
        <Row>
          <Col md={12} lg={12} className="p-0">
            <Form
              className="text-center signup-form py-9 px-10"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h4 className="pb-5">Form Đăng Kí Ứng Tuyển</h4>
              <Row>
                <Col md={12} lg={6} className="pr-2">
                  <h6 style={{ textAlign: ' left', fontWeight: 'bold' }}>
                    Họ Và Tên
                  </h6>
                  <RegistrationItem inputtype="text" icon={faUser} />
                </Col>
                <Col md={12} lg={6} className="p-0">
                  <h6 style={{ textAlign: ' left', fontWeight: 'bold' }}>
                    CMND/CCCD
                  </h6>
                  <RegistrationItem inputtype="text" icon={faEnvelope} />
                </Col>
                <Col md={12} lg={6} className="pr-2">
                  <h6 style={{ textAlign: ' left', fontWeight: 'bold' }}>
                    Email
                  </h6>
                  <RegistrationItem inputtype="email" icon={faEnvelope} />
                </Col>
                <Col md={12} lg={6} className="p-0 birthDayInput">
                  <h6 style={{ textAlign: ' left', fontWeight: 'bold' }}>
                    Ngày Sinh
                  </h6>
                  <RegistrationItem
                    inputtype="date"
                    inputplaceholder="Ngày Sinh*"
                  />
                </Col>

                <Col md={12} lg={6} className="pr-2">
                  <h6 style={{ textAlign: ' left', fontWeight: 'bold' }}>
                    Giới Tính
                  </h6>
                  <Input type="select" name="select">
                    <option>Nam</option>
                    <option>Nữ</option>
                  </Input>
                </Col>

                <Col md={12} lg={6} className="p-0">
                  <h6 style={{ textAlign: ' left', fontWeight: 'bold' }}>
                    Số Điện Thoại
                  </h6>
                  <RegistrationItem inputtype="tel" icon={faPhone} />
                </Col>
                <Col md={12} lg={6} className="pr-2">
                  <h6 style={{ textAlign: ' left', fontWeight: 'bold' }}>
                    Địa Chỉ Thường Trú
                  </h6>
                  <RegistrationItem inputtype="text" icon={faPhone} />
                </Col>
                <Col md={12} lg={6} className="p-0">
                  <h6 style={{ textAlign: ' left', fontWeight: 'bold' }}>
                    Địa Chỉ Tạm Trú
                  </h6>
                  <RegistrationItem
                    inputtype="text"
                    icon={faPhone}
                    inputplaceholder="Nếu giống địa chỉ thường trú vui lòng bỏ qua trường này"
                  />
                </Col>
              </Row>

              <Button
                block
                color="primary"
                className="btn-lg my-5 outline-hover--effect "
              >
                Gửi Thông Tin
              </Button>
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default SignUp;
