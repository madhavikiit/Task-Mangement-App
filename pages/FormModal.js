import React from 'react';
import { Modal } from 'react-bootstrap';
import FormExample from './Form'; 

const FormModal = ({ show, handleClose, handleSubmit, initialValues }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{initialValues ? 'Edit Project' : 'Create Project'}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FormExample handleSubmit={handleSubmit} handleClose={handleClose} initialValues={initialValues} />
    </Modal.Body>
  </Modal>
);

export default FormModal;





























// import React from 'react';
// import { Modal } from 'react-bootstrap';
// import FormExample from './Form'; 

// const FormModal = ({ show, handleClose, handleSubmit }) => (
//   <Modal show={show} onHide={handleClose}>
//     <Modal.Header closeButton>
//       <Modal.Title>Create Project</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <FormExample handleSubmit={handleSubmit} handleClose={handleClose} />
//     </Modal.Body>
//   </Modal>
// );

// export default FormModal;