import React from 'react';
import { Nav } from 'react-bootstrap';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link eventKey="link-1">Projects Menu</Nav.Link>
        <Nav.Link eventKey="link-2">Tasks</Nav.Link>
        <Nav.Link eventKey="link-3">Settings</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
