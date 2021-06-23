// External components
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Sticky } from 'react-sticky';

// Own Components
import ButtonGroups from './ButtonGroups';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <Sticky disableCompensation topOffset={400}>
      {({ style, isSticky }) => (
        <header
          style={style}
          className={` ${
            isSticky ? 'sticky-header' : 'position-relative border bg-white'
          }`}
        >
          <Container fluid>
            <Row className="align-items-center ">
              <Col xl={2} lg={2} md={2} sm={2} xs={2} className="d-flex">
                <div className="jb-logo">
                  <Logo />
                </div>
              </Col>
              <Col className="nav-col" xl={8} lg={9} md={5} sm={7} xs={5}>
                <Navigation />
              </Col>
              <Col className="p-0" xl={2} lg={1} md={5} sm={3} xs={5}>
                <div className="user-info d-flex justify-content-center align-items-center align-self-center text-center">
                  <ButtonGroups />
                </div>
              </Col>
            </Row>
          </Container>
        </header>
      )}
    </Sticky>
  );
};

export default Header;
