import React from 'react';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItem = ({ items }) =>
  items &&
  items.map(({ id, title, path }) => (
    <NavItem key={id}>
      <NavLink
        className="nav-link single-link position-relative "
        exact
        to={path}
      >
        <FontAwesomeIcon
          className="squre mr-2 position-relative"
          icon={faSquare}
        />
        {title}
      </NavLink>
    </NavItem>
  ));

export default MenuItem;
