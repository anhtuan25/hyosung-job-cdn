import React, { useState } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import classnames from 'classnames';

import SearchButton from '../SearchButton';
import NavBox from './NavBox';
import MegaDropdown from './MegaDropdown';
import MenuItem from './MenuItem';

const menuBoxItems = {
  homePage: [],
  jobPage: [
    {
      id: 1,
      title: 'Jobs',
      path: '/job',
    },
    {
      id: 2,
      title: 'Job Single',
      path: '/job/details',
    },
  ],
  pageList: [
 

    {
      id: 2,
      title: 'Vị trí tuyển dụng',
      path: '/company',
    },


    {
      id: 7,
      title: 'Đăng ký ứng tuyển',
      path: '/signup',
    },
  ],
  dashboardPage: [
    {
      id: 1,
      title: 'Candidate',
      path: '/candidate',
    },
    {
      id: 2,
      title: 'Company',
      path: '/employer',
    },
  ],
  // aboutPage: [
  //   {
  //     id: 1,
  //     title: 'Giới thiệu',
  //     path: '/about',
  //   },
  //   // {
  //   //   id: 2,
  //   //   title: 'Gongchae',
  //   //   path: '/gongchae',
  //   // },
  // ],
};

const animatedMenu = [
  { id: 1, component: () => <MenuItem items={menuBoxItems.homePage} /> },
  { id: 2, component: () => <MenuItem items={menuBoxItems.jobPage} /> },
  { id: 3, component: MegaDropdown },
  { id: 4, component: () => <MenuItem items={menuBoxItems.pageList} /> },
  { id: 5, component: () => <MenuItem items={menuBoxItems.dashboardPage} /> },
];

const Navigation = () => {
  const [visable, setVisable] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const el = document.getElementById('menu-con');

  const onMouseEnter = (e, i, size) => {
    const offset =
      -1 *
      (window.innerWidth / 2 -
        (e.target.getBoundingClientRect().left + e.target.offsetWidth / 2));
    el.style.setProperty('--siteMenuArrowOffset', `${offset}px`);
    if (size) {
      el.style.setProperty('--siteMenuBoxHeight', `${size[0]}px`);
      el.style.setProperty('--siteMenuBoxWidth', `${size[1]}px`);
    }

    setActiveIndex(i);
    setVisable(true);
  };

  const resetNavBoc = () => {
    setVisable(false);
  };

  return (
    <div
      className={classnames('navigation position-relative', {
        'menu-container-visable': visable,
      })}
      onMouseLeave={resetNavBoc}
    >
      <Navbar className="p-0 border-right d-lg-block d-xl-block d-none">
        <Nav>
          <NavItem className="dropdown">
            <Link
              className="nav-link position-relative main-nav text-dark"
              to="/"
            >
              Trang chủ
            </Link>
          </NavItem>
          <NavItem className="dropdown">
            <Link
              className="nav-link position-relative main-nav text-dark"
              to="/about"
            >
              Về công ty Hyosung
            </Link>
          </NavItem>
          <NavItem className="dropdown">
            <Link
              onMouseEnter={(e) => onMouseEnter(e, 2, [100, 220])}
              className="nav-link position-relative main-nav text-dark"
              to="#"
            >
              Tái tuyển công nhân
            </Link>
          </NavItem>

          <NavItem>
            <NavLink
              exact
              onMouseEnter={resetNavBoc}
              className="nav-link position-relative main-nav text-dark"
              to="/blog"
            >
              Tin Tức
            </NavLink>
          </NavItem>
          {/* <NavItem className="dropdown position-static mega-dropdown">
            <Link
              onMouseEnter={(e) => onMouseEnter(e, 3, [360, 0])}
              className="nav-link main-nav position-relative text-dark"
              to="#"
            >
              Candidates
            </Link>
          </NavItem> */}
          <NavItem className="dropdown">
            <Link
              onMouseEnter={(e) => onMouseEnter(e, 4, [110, 220])}
              className="nav-link position-relative main-nav text-dark"
              to="/hyosung-gongchae"
            >
              Hyosung Gongchae
            </Link>
          </NavItem>
          {/* <NavItem className="dropdown">
            <Link
              onMouseEnter={(e) => onMouseEnter(e, 5, [100, 220])}
              className="nav-link position-relative main-nav text-dark"
              to="#"
            >
              Dashboard
            </Link>
          </NavItem> */}

          <NavItem>
            <NavLink
              exact
              onMouseEnter={resetNavBoc}
              className="nav-link position-relative main-nav text-dark"
              to="/contactus"
            >
              Liên Hệ
            </NavLink>
          </NavItem>
          {/* <SearchButton /> */}
        </Nav>
      </Navbar>

      <div
        className={classnames('menu-container', {
          'full-menu-content': [3].includes(activeIndex),
        })}
        id="menu-con"
      >
        <div className="site-arrow bg-primary"></div>
        <div className="menu-area" hidden={!visable}>
          <div className="menu-card">
            {animatedMenu.map(({ id, component: Component }) => (
              <NavBox key={id} id={id} activeIndex={activeIndex}>
                <Component />
              </NavBox>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
