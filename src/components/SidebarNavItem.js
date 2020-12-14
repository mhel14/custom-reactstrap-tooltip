import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import TooltipContent from './TooltipContent';
import PropTypes from 'prop-types';

const SidebarNavItem = ({id, component}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <li id={`nav-${id}`} key={id}>
      {component}
      <Tooltip
        placement="right"
        isOpen={tooltipOpen}
        target={`nav-${id}`}
        toggle={toggle}
        autohide={false}
      >
        <TooltipContent />
      </Tooltip>
    </li>
  )
}

SidebarNavItem.propTypes = {
  id: PropTypes.number,
  component: PropTypes.element
}

export default SidebarNavItem