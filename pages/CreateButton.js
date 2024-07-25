import React from 'react';
import Button from 'react-bootstrap/Button';

const CreateButton = ({ onClick }) => {
  return (
    <Button variant="outline-primary" onClick={onClick}>
      + Create Project
    </Button>
  );
};

export default CreateButton;
