import React from 'react';
import { Container, Row, Col, ListGroup } from 'reactstrap';
import coreValueImg from 'src/assets/images/AboutSlider/hyosung-way_Viet.png';
import img1 from 'src/assets/images/AboutSlider/Hyosung_over_VI.jpg';

const data = [
    {
        counterNumber: 7500 + '+',
        counterName: 'Công nhân viên',
    },
    {
        counterNumber: 30 + '+',
        counterName: 'Vị trí ứng tuyển',
    },
    {
        counterNumber: '9+',
        counterName: 'Average Rating',
    },
];
const CoreValue = (props) => {
    return (
        <section
            className={`${' overflow-hidden mb-6 mb-md-13'
                } ${'statics-banner-three'}`}
        >
            <Container>
                <Row className="align-items-center">
                    <Col md={12} lg={12} >
                        <img src={img1} className="img-fluid"
                            width="60%" />
                    </Col>
                    <Col
                        md={12}
                        lg={6}
                        xs={12}
                        sm={12}
                        className="text-center text-lg-left "
                    >
                        <h1 className={`' text-white' : 'text-dark'}  `}>
                            Giá Trị Hạt Nhân
                        </h1>

                    </Col>
                    <Col
                        md={12}
                        lg={6}
                        xs={12}
                        sm={12}
                        className="mb-md-6 mb-sm-6 mb-6 text-center"
                    >
                        <img
                            src={coreValueImg}
                            className="img-fluid"
                            width="100%"
                        />                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default CoreValue;
