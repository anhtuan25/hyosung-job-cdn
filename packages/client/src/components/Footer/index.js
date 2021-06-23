import React from 'react';
import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

import FooOverview from './FooOverview';
import FooNav from './FooNav';
import FooBottom from './FooBottom';

const Footer = () => {
  return (
    <footer className="text-white pt-11 pb-11">
      <Container>
        <Row>
          <FooOverview />
          <FooNav />
          <div className="copyright pt-5 pl-3 text-capitalize">
            <FontAwesomeIcon icon={faCopyright} /> 2021
            <Link to="/"> HYOSUNG </Link>
            ALL RIGHTS RESERVED.
          </div>
        </Row>
      </Container>
      <FooBottom />
    </footer>
  );
};

export default Footer;
