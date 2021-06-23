import React from 'react';
import classnames from 'classnames';

const NavBox = (props) => {
  const { id, activeIndex, children } = props;
  return (
    <div
      className={classnames('menu-item', {
        'menu-item-left': activeIndex < id,
        'menu-item-right': activeIndex > id,
      })}
      hidden={activeIndex === id ? false : true}
    >
      <ul className="content-menu border-primary">{children}</ul>
    </div>
  );
};

export default NavBox;
