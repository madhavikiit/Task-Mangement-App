import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Header = () => {
  const router = useRouter();
  

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    router.push('/login');
   
  };

  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
      </Nav>
      <Button className={styles.logoutButton} variant="outline-light" onClick={handleLogout}>
        Logout
      </Button>
    </Navbar>
  );
};

export default Header;
