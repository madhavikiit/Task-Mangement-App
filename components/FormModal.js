import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, Field, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

const validationSchema = Yup.object().shape({
  task_title: Yup.string().required('Task title is required'),
  task_description: Yup.string().required('Task description is required'),
  start_date: Yup.date().nullable(),
  due_date: Yup.date().nullable(),
  task_state: Yup.string().required('Status is required')
});

const FormModal = ({ show, handleClose, handleSubmit, task,projectId }) => {
  const initialValues = {
    task_title: task?.task_title || '',
    task_description: task?.task_description || '',
    start_date: task?.start_date ? new Date(task.start_date) : null,
    due_date: task?.due_date ? new Date(task.due_date) : null,
    task_state: task?.task_state || '',
    task_priority: task?.task_priority || 'low',
    task_type: task?.task_type || 'Development',
    project_id: task?.project_id || projectId,
    parent_task_id: task?.parent_task_id || 0,
    task_reference_type: task?.task_reference_type || 'H',
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await handleSubmit(values);
    } catch (error) {
      console.log('Error occurred during submission', error);
    } finally {
      setSubmitting(false);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{task ? 'Edit Task' : 'Add Task'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ values, errors, touched, setFieldValue, isSubmitting }) => (
            <FormikForm>
              <Form.Group controlId="formTaskTitle">
                <Form.Label>Task Title</Form.Label>
                <Field
                  name="task_title"
                  type="text"
                  className={`form-control ${touched.task_title && errors.task_title ? 'is-invalid' : ''}`}
                  placeholder="Enter task title"
                />
                {touched.task_title && errors.task_title && (
                  <div className="invalid-feedback">{errors.task_title}</div>
                )}
              </Form.Group>
              <br />
              <Form.Group controlId="formTaskDescription">
                <Form.Label>Task Description</Form.Label>
                <Field
                  name="task_description"
                  as="textarea"
                  className={`form-control ${touched.task_description && errors.task_description ? 'is-invalid' : ''}`}
                  placeholder="Enter task description"
                />
                {touched.task_description && errors.task_description && (
                  <div className="invalid-feedback">{errors.task_description}</div>
                )}
              </Form.Group>
              <br />
              <Form.Group controlId="formTaskStartDate">
                <Form.Label>Start Date</Form.Label>
                <br />
                <DatePicker
                  selected={values.start_date ? moment(values.start_date, 'YYYY-MM-DD').toDate() : null}
                  name="start_date"
                  onChange={(date) => setFieldValue('start_date', moment(date).format('YYYY-MM-DD'))}
                  dateFormat="yyyy-MM-dd"
                  className={`form-control ${touched.start_date && errors.start_date ? 'is-invalid' : ''}`}
                />
                {touched.start_date && errors.start_date && (
                  <div className="invalid-feedback d-block">{errors.start_date}</div>
                )}
              </Form.Group>
              <br />
              <Form.Group controlId="formTaskDueDate">
                <Form.Label>Due Date</Form.Label>
                <br />
                <DatePicker
                  selected={values.due_date? moment(values.start_date, 'YYYY-MM-DD').toDate() : null}
                  name="due_date"
                  onChange={(date) => setFieldValue('due_date', moment(date).format('YYYY-MM-DD'))}
                  dateFormat="yyyy-MM-dd"
                  className={`form-control ${touched.due_date && errors.due_date ? 'is-invalid' : ''}`}
                />
                {touched.due_date && errors.due_date && (
                  <div className="invalid-feedback d-block">{errors.due_date}</div>
                )}
              </Form.Group>
              <br/>
              <Form.Group controlId="formTaskPriority">
                <Form.Label>Task Priority</Form.Label>
                <Field
                  as="select"
                  name="task_priority"
                  className={`form-control ${touched.task_priority && errors.task_priority ? 'is-invalid' : ''}`}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </Field>
                {touched.task_priority && errors.task_priority && (
                  <div className="invalid-feedback">{errors.task_priority}</div>
                )}
              </Form.Group>
              <br />
              <Form.Group controlId="formTaskState">
                <Form.Label>Status</Form.Label>
                <Field
                  as="select"
                  name="task_state"
                  className={`form-control ${touched.task_state && errors.task_state ? 'is-invalid' : ''}`}
                >

                  <option value="">Select status</option>
                  <option value="todo">Todo</option>
                  <option value="wip">WIP</option>
                  <option value="done">Done</option>
                </Field>
                {touched.task_state && errors.task_state && (
                  <div className="invalid-feedback">{errors.task_state}</div>
                )}
              </Form.Group>
              <br />
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                {task ? 'Update' : 'Submit'}
              </Button>
            </FormikForm>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;











































// import React, { useEffect } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { Formik, Field, Form as FormikForm } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//   taskName: Yup.string().required('Task name is required'),
//   taskDescription: Yup.string().required('Task description is required'),
//   startDate: Yup.date().nullable(),
//   endDate: Yup.date().nullable(),
//   taskStatus: Yup.string().required('Status is required')
// });

// const FormModal = ({ show, handleClose, handleSubmit, task }) => {
//   const initialValues = {
//     taskName: task?.taskName || '',
//     taskDescription: task?.taskDescription || '',
//     startDate: task?.startDate ? new Date(task.startDate) : null,
//     endDate: task?.endDate ? new Date(task.endDate) : null,
//     taskStatus: task?.taskStatus || ''
//   };

//   const onSubmit = (values, { setSubmitting }) => {
//     handleSubmit({
//       id: task ? task.id : null,
//       ...values,
//       startDate: values.startDate ? values.startDate.toISOString().split('T')[0] : null,
//       endDate: values.endDate ? values.endDate.toISOString().split('T')[0] : null
//     });
//     setSubmitting(false);
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>{task ? 'Edit Task' : 'Add Task'}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={onSubmit}
//           enableReinitialize
//         >
//           {({ values, errors, touched, setFieldValue, isSubmitting }) => (
//             <FormikForm>
//               <Form.Group controlId="formTaskName">
//                 <Form.Label>Task Name</Form.Label>
//                 <Field
//                   name="taskName"
//                   type="text"
//                   className={`form-control ${touched.taskName && errors.taskName ? 'is-invalid' : ''}`}
//                   placeholder="Enter task name"
//                 />
//                 {touched.taskName && errors.taskName && (
//                   <div className="invalid-feedback">{errors.taskName}</div>
//                 )}
//               </Form.Group>
//               <br />
//               <Form.Group controlId="formTaskDescription">
//                 <Form.Label>Task Description</Form.Label>
//                 <Field
//                   name="taskDescription"
//                   as="textarea"
//                   className={`form-control ${touched.taskDescription && errors.taskDescription ? 'is-invalid' : ''}`}
//                   placeholder="Enter task description"
//                 />
//                 {touched.taskDescription && errors.taskDescription && (
//                   <div className="invalid-feedback">{errors.taskDescription}</div>
//                 )}
//               </Form.Group>
//               <br />
//               <Form.Group controlId="formTaskStartDate">
//                 <Form.Label>Start Date</Form.Label>
//                 <br />
//                 <DatePicker
//                   selected={values.startDate}
//                   name="taskStartDate"
//                   onChange={(date) => setFieldValue('startDate', date)}
//                   dateFormat="yyyy-MM-dd"
//                   className={`form-control ${touched.startDate && errors.startDate ? 'is-invalid' : ''}`}
//                 />
//                 {touched.startDate && errors.startDate && (
//                   <div className="invalid-feedback d-block">{errors.startDate}</div>
//                 )}
//               </Form.Group>
//               <br />
//               <Form.Group controlId="formTaskEndDate">
//                 <Form.Label>End Date</Form.Label>
//                 <br />
//                 <DatePicker
//                   selected={values.endDate}
//                   name="taskEndDate"
//                   onChange={(date) => setFieldValue('endDate', date)}
//                   dateFormat="yyyy-MM-dd"
//                   className={`form-control ${touched.endDate && errors.endDate ? 'is-invalid' : ''}`}
//                 />
//                 {touched.endDate && errors.endDate && (
//                   <div className="invalid-feedback d-block">{errors.endDate}</div>
//                 )}
//               </Form.Group>
//               <br/>
//               <Form.Group controlId="formTaskPriority">
//                 <Form.Label>Task Priority</Form.Label>
//                 <Field
//                   as="select"
//                   name="taskPriority"
//                   className={`form-control ${touched.taskPriority && errors.Priority ? 'is-invalid' : ''}`}
//                 >
//                   <option value="">Select Priority</option>
//                   <option value="Low">Low</option>
//                   <option value="Medium">Medium</option>
//                   <option value="High">High</option>
//                 </Field>
//                 {touched.taskPriority && errors.taskPriority && (
//                   <div className="invalid-feedback">{errors.taskPriority}</div>
//                 )}
//               </Form.Group>
//               <br />
//               <Form.Group controlId="formTaskStatus">
//                 <Form.Label>Status</Form.Label>
//                 <Field
//                   as="select"
//                   name="taskStatus"
//                   className={`form-control ${touched.taskStatus && errors.taskStatus ? 'is-invalid' : ''}`}
//                 >
//                   <option value="">Select status</option>
//                   <option value="Todo">Todo</option>
//                   <option value="WIP">WIP</option>
//                   <option value="Done">Done</option>
//                 </Field>
//                 {touched.taskStatus && errors.taskStatus && (
//                   <div className="invalid-feedback">{errors.taskStatus}</div>
//                 )}
//               </Form.Group>
//               <br />
//               <Button variant="primary" type="submit" disabled={isSubmitting}>
//                 {task ? 'Update' : 'Submit'}
//               </Button>
//             </FormikForm>
//           )}
//         </Formik>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default FormModal;













































// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import moment from 'moment';

// const FormModal = ({ show, handleClose, handleSubmit, task }) => {
//   const [taskName, setTaskName] = useState('');
//   const [taskDescription, setTaskDescription] = useState('');
//   const [taskStatus, setTaskStatus] = useState('');

//   useEffect(() => {
//     if (task) {
//       setTaskName(task.taskName);
//       setTaskDescription(task.taskDescription);
//       setTaskStatus(task.taskStatus);
//     } else {
//       setTaskName('');
//       setTaskDescription('');
//       setTaskStatus('');
//     }
//   }, [task]);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     handleSubmit({ id: task ? task.id : null, taskName, taskDescription, taskStatus });
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>{task ? 'Edit Task' : 'Add Task'}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={onSubmit}>
//           <Form.Group controlId="formTaskName">
//             <Form.Label>Task Name</Form.Label>
//             <Form.Control
//               type="text"
//               value={taskName}
//               placeholder="Enter task name"
//               onChange={(e) => setTaskName(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <br />
//           <Form.Group controlId="formTaskDescription">
//             <Form.Label>Task Description</Form.Label>
//             <Form.Control
//               as="textarea"
//               value={taskDescription}
//               placeholder="Enter task description"
//               onChange={(e) => setTaskDescription(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <br />
//           <Form.Group controlId="formTaskStartDate" className="mb-3">
//             <Form.Label>Start Date</Form.Label>
//             <br />
//             <DatePicker
//               selected={values.start_date}
//               onChange={(date) => setFieldValue('start_date', moment(date).format("YYYY-MM-DD"))}
//               dateFormat="yyyy-MM-dd"
//               className={`form-control ${touched.start_date && errors.start_date ? 'is-invalid' : ''}`}
//             />
//             {touched.start_date && errors.start_date && (
//               <Form.Control.Feedback type="invalid">
//                 {errors.start_date}
//               </Form.Control.Feedback>
//             )}
//           </Form.Group>
//           <br/>

//           <Form.Group controlId="formTaskEndDate" className="mb-3">
//             <Form.Label>End Date</Form.Label>
//             <br />
//             <DatePicker
//               selected={values.end_date}
//               onChange={(date) => setFieldValue('end_date', moment(date).format("YYYY-MM-DD"))}
//               dateFormat="yyyy-MM-dd"
//               className={`form-control ${touched.end_date && errors.end_date ? 'is-invalid' : ''}`}
//             />
//             {touched.end_date && errors.end_date && (
//               <Form.Control.Feedback type="invalid">
//                 {errors.end_date}
//               </Form.Control.Feedback>
//             )}
//           </Form.Group>
//           <br/>
//           <Form.Group controlId="formTaskStatus">
//             <Form.Label>Status</Form.Label>
//             <Form.Control
//               as="select"
//               value={taskStatus}
//               onChange={(e) => setTaskStatus(e.target.value)}
//               required
//             >
//               <option value="">Select status</option>
//               <option value="High">Todo</option>
//               <option value="Medium">WIP</option>
//               <option value="Low">Done</option>
//             </Form.Control>
//           </Form.Group>
//           <br />
//           <Button variant="primary" type="submit">
//             {task ? 'Update' : 'Submit'}
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default FormModal;


































































// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';

// const FormModal = ({ show, handleClose, handleSubmit, task }) => {
//   const [taskName, setTaskName] = useState('');
//   const [taskDescription, setTaskDescription] = useState('');
//   const [taskStatus, setTaskStatus] = useState('');

//   useEffect(() => {
//     if (task) {
//       setTaskName(task.taskName);
//       setTaskDescription(task.taskDescription);
//       setTaskStatus(task.taskStatus);
//     } else {
//       setTaskName('');
//       setTaskDescription('');
//       setTaskStatus('');
//     }
//   }, [task]);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     handleSubmit({ id: task ? task.id : null, taskName, taskDescription, taskStatus });
//     handleClose();
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>{task ? 'Edit Task' : 'Add Task'}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={onSubmit}>
//           <Form.Group controlId="formTaskName">
//             <Form.Label>Task Name</Form.Label>
//             <Form.Control
//               type="text"
//               value={taskName}
//               placeholder="Enter task name"
//               onChange={(e) => setTaskName(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <br/>
//           <Form.Group controlId="formTaskDescription">
//             <Form.Label>Task Description</Form.Label>
//             <Form.Control
//               as="textarea"
//               value={taskDescription}
//               placeholder="Enter task description"
//               onChange={(e) => setTaskDescription(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <br/>
//           <Form.Group controlId="formTaskStatus">
//             <Form.Label>Status</Form.Label>
//             <Form.Control
//               as="select"
//               value={taskStatus}
//               onChange={(e) => setTaskStatus(e.target.value)}
//               required
//             >
//               <option value="">Select status</option>
//               <option value="High">High</option>
//               <option value="Medium">Medium</option>
//               <option value="Low">Low</option>
//             </Form.Control>
//           </Form.Group>
//           <br/>
//           <Button variant="primary" type="submit">
//             {task ? 'Update' : 'Submit'}
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default FormModal;




















































// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';

// const FormModal = ({ show, handleClose, handleSubmit, task }) => {
//   const [taskName, setTaskName] = useState('');
//   const [taskDescription, setTaskDescription] = useState('');
//   const [taskStatus, setTaskStatus] = useState('');


//   useEffect(() => {
//     if (task) {
//       setTaskName(task.taskName);
//       setTaskDescription(task.taskDescription);
//       setTaskStatus(task.taskStatus);
//     }
//   }, [task]);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     handleSubmit({ id: task ? task.id : null, taskName, taskDescription, taskStatus });
//     setTaskName('');
//     setTaskDescription('');
//     setTaskStatus('');
//     handleClose();
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>{task ? 'Edit Task' : 'Add Task'}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={onSubmit}>
//           <Form.Group controlId="formTaskName">
//             <Form.Label>Task Name</Form.Label>
//             <Form.Control
//               type="text"
//               value={taskName}
//               placeholder="Enter task name"
//               onChange={(e) => setTaskName(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <br/>
//           <Form.Group controlId="formTaskDescription">
//             <Form.Label>Task Description</Form.Label>
//             <Form.Control
//               as="textarea"
//               value={taskDescription}
//               placeholder="Enter task description"
//               onChange={(e) => setTaskDescription(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <br/>
//           <Form.Group controlId="formTaskStatus">
//             <Form.Label>Status</Form.Label>
//             <Form.Control
//               as="textarea"
//               value={taskStatus}
//               placeholder="Enter task status"
//               onChange={(e) => setTaskStatus(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <br/>
//           <Button variant="primary" type="submit">
//             {task ? 'Update' : 'Submit'}
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default FormModal;
