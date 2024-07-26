import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

function FormExample({ handleSubmit, handleClose, initialValues }) {
  const schema = yup.object().shape({
    project_name: yup.string().required('Project name is required'),
    project_description: yup.string(),
    project_priority: yup.string().required('Priority is required'),
    start_date: yup.date().required('Start date is required'),
    end_date: yup.date(),
    project_type: yup.string().required('Project type is required'),
    project_code: yup.string().required('Project code is required'),
   
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await handleSubmit(values);
        } catch (error) {
          console.error('Error occurred during submission:', error);
        } finally {
          setSubmitting(false);
          handleClose();
        }
      }}
      initialValues={{
        project_name: initialValues?.project_name || '',
        project_description: initialValues?.project_description || '',
        project_priority: initialValues?.project_priority || '',
        project_status: initialValues?.project_status || '',
        start_date: initialValues?.start_date ? moment(initialValues.start_date).format('YYYY-MM-DD') : '',
        end_date: initialValues?.end_date ? moment(initialValues.end_date).format('YYYY-MM-DD') : '',
        project_type: initialValues?.project_type || '',
        project_code: initialValues?.project_code || '',
       
        
        
        
        
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors, setFieldValue }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="validationFormik01" className="mb-3">
            <Form.Label>Project name</Form.Label>
            <Form.Control
              type="text"
              name="project_name"
              value={values.project_name}
              onChange={handleChange}
              isValid={touched.project_name && !errors.project_name}
              isInvalid={!!errors.project_name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.project_name}
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Project description</Form.Label>
            <Form.Control
              as="textarea"
              name="project_description"
              value={values.project_description}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="validationFormik02" className="mb-3">
            <Form.Label>Priority</Form.Label>
            <Form.Control
              as="select"
              name="project_priority"
              value={values.project_priority}
              onChange={handleChange}
              isValid={touched.project_priority && !errors.project_priority}
              isInvalid={!!errors.project_priority}
            >
              <option value="">Select priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.project_priority}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationFormik03" className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              name="project_status"
              value={values.project_status}
              onChange={handleChange}
              isValid={touched.project_status && !errors.project_status}
              isInvalid={!!errors.project_status}
            >
              <option value="">Select status</option>
              <option value="Todo">Todo</option>
              <option value="WIP">WIP</option>
              <option value="Done">Done</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.project_status}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationFormik04" className="mb-3">
            <Form.Label>Start Date</Form.Label>
            <br />
            <DatePicker
              selected={values.start_date ? moment(values.start_date, 'YYYY-MM-DD').toDate() : null}
              onChange={(date) => setFieldValue('start_date', moment(date).format('YYYY-MM-DD'))}
              className="form-control"
              dateFormat="yyyy-MM-dd"
            />
            <Form.Control.Feedback type="invalid">
              {errors.start_date}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationFormik05" className="mb-3">
            <Form.Label>End Date</Form.Label>
            <br/>
            <DatePicker
              selected={values.end_date ? moment(values.end_date, 'YYYY-MM-DD').toDate() : null}
              onChange={(date) => setFieldValue('end_date', moment(date).format('YYYY-MM-DD'))}
              className="form-control"
              dateFormat="yyyy-MM-dd"
            />
            <Form.Control.Feedback type="invalid">
              {errors.end_date}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationFormik06" className="mb-3">
            <Form.Label>Project type</Form.Label>
            <Form.Control
              type="text"
              name="project_type"
              value={values.project_type}
              onChange={handleChange}
              isValid={touched.project_type && !errors.project_type}
              isInvalid={!!errors.project_type}
            />
            <Form.Control.Feedback type="invalid">
              {errors.project_type}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationFormik07" className="mb-3">
            <Form.Label>Project code</Form.Label>
            <Form.Control
              type="text"
              name="project_code"
              value={values.project_code}
              onChange={handleChange}
              isValid={touched.project_code && !errors.project_code}
              isInvalid={!!errors.project_code}
            />
            <Form.Control.Feedback type="invalid">
              {errors.project_code}
            </Form.Control.Feedback>
          </Form.Group>

         
       



          

          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormExample;






















// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import moment from 'moment';

// function FormExample({ handleSubmit, handleClose, initialValues }) {
//   const schema = yup.object().shape({
//     project_name: yup.string().required('Project name is required'),
//     project_description: yup.string(),
//     project_priority: yup.string().required('Priority is required'),
//     start_date: yup.date().required('Start date is required'),
//     end_date: yup.date(),
//     project_type: yup.string().required('Project type is required'),
//     project_code: yup.string().required('Project code is required'),
//     completed_at: yup.date(),
//     estimated_hours: yup.number(),
//     default_task_type: yup.string(),
//     task_status_group: yup.string(),
//     project_template_id: yup.number(),
//   });

//   return (
//     <Formik
//       validationSchema={schema}
//       onSubmit={async (values, { setSubmitting }) => {
//         try {
//           await handleSubmit(values); 
//         } catch (error) {
//           console.error('Error occurred during submission:', error);
//         } finally {
//           setSubmitting(false);
//           handleClose();
//         }
//       }}
//       initialValues={{
//         project_name: initialValues?.project_name || '',
//         project_description: initialValues?.project_description || '',
//         project_priority: initialValues?.project_priority || '',
//         project_status: initialValues?.project_status || '',
//         start_date: initialValues?.start_date || null,
//         end_date: initialValues?.end_date || null,
//         project_type: initialValues?.project_type || '',
//         project_code: initialValues?.project_code || '',
//         completed_at: initialValues?.completed_at || null,
//         estimated_hours: initialValues?.estimated_hours || 0,
//         default_task_type: initialValues?.default_task_type || '',
//         task_status_group: initialValues?.task_status_group || '',
//         projectId: initialValues?.projectId || 0,
//       }}
//     >
//       {({ handleSubmit, handleChange, values, touched, errors, setFieldValue }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Form.Group controlId="validationFormik01" className="mb-3">
//             <Form.Label>Project name</Form.Label>
//             <Form.Control
//               type="text"
//               name="project_name"
//               value={values.project_name}
//               onChange={handleChange}
//               isValid={touched.project_name && !errors.project_name}
//               isInvalid={!!errors.project_name}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.project_name}
//             </Form.Control.Feedback>
//           </Form.Group>
          
//           <Form.Group className="mb-3">
//             <Form.Label>Project description</Form.Label>
//             <Form.Control
//               as="textarea"
//               name="project_description"
//               value={values.project_description}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Form.Group controlId="validationFormik06" className="mb-3">
//              <Form.Label>Priority</Form.Label>
//             <Form.Control
//                as="select"
//                name="project_priority"
//                value={values.project_priority}
//                onChange={handleChange}
//                isValid={touched.project_priority && !errors.project_priority}
//                isInvalid={!!errors.project_priority}
//              >
//                <option value="">Select priority</option>
//                <option value="low">Low</option>
//                <option value="medium">Medium</option>
//                <option value="high">High</option>
//              </Form.Control>
//              <Form.Control.Feedback type="invalid">
//                {errors.project_priority}
//              </Form.Control.Feedback>
//            </Form.Group>

//           <Form.Group controlId ="validationFormik11" className="mb-3">
//             <Form.Label>Status</Form.Label>
//             <Form.Control
//               type="select"
//               name="project_status"
//               value={values.project_status}
//               onChange={handleChange}
//               isValid={touched.project_status && !errors.project_status}
//               isInvalid={!!errors.project_status}
//             >
//                <option value="">Select status</option>
//                <option value="low">Todo</option>
//                <option value="medium">WIP</option>
//                <option value="high">Done</option>
//              </Form.Control>
//             <Form.Control.Feedback type="invalid">
//               {errors.project_status}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Start Date</Form.Label>
//             <DatePicker
//               selected={values.start_date ? moment(values.start_date).toDate() : null}
//               onChange={(date) => setFieldValue('start_date', date)}
//               className="form-control"
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.start_date}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>End Date</Form.Label>
//             <DatePicker
//               selected={values.end_date ? moment(values.end_date).toDate() : null}
//               onChange={(date) => setFieldValue('end_date', date)}
//               className="form-control"
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.end_date}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Project type</Form.Label>
//             <Form.Control
//               type="text"
//               name="project_type"
//               value={values.project_type}
//               onChange={handleChange}
//               isValid={touched.project_type && !errors.project_type}
//               isInvalid={!!errors.project_type}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.project_type}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Project code</Form.Label>
//             <Form.Control
//               type="text"
//               name="project_code"
//               value={values.project_code}
//               onChange={handleChange}
//               isValid={touched.project_code && !errors.project_code}
//               isInvalid={!!errors.project_code}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.project_code}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Completed At</Form.Label>
//             <br />
//             <DatePicker
//               selected={values.completed_at ? moment(values.completed_at).toDate() : null}
//               onChange={(date) => setFieldValue('completed_at', date)}
//               className="form-control"
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.completed_at}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Estimated Hours</Form.Label>
//             <Form.Control
//               type="number"
//               name="estimated_hours"
//               value={values.estimated_hours}
//               onChange={handleChange}
//               isValid={touched.estimated_hours && !errors.estimated_hours}
//               isInvalid={!!errors.estimated_hours}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.estimated_hours}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Default Task Type</Form.Label>
//             <Form.Control
//               type="text"
//               name="default_task_type"
//               value={values.default_task_type}
//               onChange={handleChange}
//               isValid={touched.default_task_type && !errors.default_task_type}
//               isInvalid={!!errors.default_task_type}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.default_task_type}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Task Status Group</Form.Label>
//             <Form.Control
//               type="text"
//               name="task_status_group"
//               value={values.task_status_group}
//               onChange={handleChange}
//               isValid={touched.task_status_group && !errors.task_status_group}
//               isInvalid={!!errors.task_status_group}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.task_status_group}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Project ID</Form.Label>
//             <Form.Control
//               type="number"
//               name="project_template_id"
//               value={values.project_template_id}
//               onChange={handleChange}
//               isValid={touched.projectId && !errors.projectId}
//               isInvalid={!!errors.projectId}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.projectId}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Button type="submit">Submit form</Button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default FormExample;


















// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import moment from 'moment';

// const FormExample = ({ handleSubmit, handleClose, initialValues }) => {
//   const schema = yup.object().shape({
//     project_name: yup.string().required('Project name is required'),
//     project_description: yup.string(),
//     project_priority: yup.string().required('Priority is required'),
//     start_date: yup.date().required('Start date is required'),
//     end_date: yup.date(),
//     project_type: yup.string().required('Project type is required'),
//     project_code: yup.string().required('Project code is required'),
//     completed_at: yup.date(),
//     estimated_hours: yup.number(),
//     default_task_type: yup.string(),
//     task_status_group: yup.string(),
//     project_template_id: yup.number(),
//   });

//   const onSubmit = async (values, { setSubmitting }) => {
//     try {
//       await handleSubmit(values);
//       handleClose(); // Ensure this runs after the form is submitted
//     } catch (error) {
//       console.error('Error occurred during submission:', error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Formik
//       validationSchema={schema}
//       onSubmit={onSubmit}
//       initialValues={{
//         project_name: initialValues?.project_name || '',
//         project_description: initialValues?.project_description || '',
//         project_priority: initialValues?.project_priority || '',
//         project_status: initialValues?.project_status || '',
//         start_date: initialValues?.start_date || null,
//         end_date: initialValues?.end_date || null,
//         project_type: initialValues?.project_type || '',
//         project_code: initialValues?.project_code || '',
//         completed_at: initialValues?.completed_at || null,
//         estimated_hours: initialValues?.estimated_hours || 0,
//         default_task_type: initialValues?.default_task_type || '',
//         task_status_group: initialValues?.task_status_group || '',
//         project_template_id: initialValues?.project_template_id || 0,
//       }}
//     >
//       {({
//         handleSubmit,
//         handleChange,
//         values,
//         touched,
//         errors,
//         setFieldValue,
//       }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Form.Group controlId="validationFormik01" className="mb-3">
//             <Form.Label>Project Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="project_name"
//               value={values.project_name}
//               onChange={handleChange}
//               isValid={touched.project_name && !errors.project_name}
//               isInvalid={!!errors.project_name}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.project_name}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="validationFormik02" className="mb-3">
//             <Form.Label>Project Description</Form.Label>
//             <Form.Control
//               type="text"
//               name="project_description"
//               value={values.project_description}
//               onChange={handleChange}
//               isValid={touched.project_description && !errors.project_description}
//               isInvalid={!!errors.project_description}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.project_description}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="validationFormik06" className="mb-3">
//             <Form.Label>Priority</Form.Label>
//             <Form.Control
//               as="select"
//               name="project_priority"
//               value={values.project_priority}
//               onChange={handleChange}
//               isValid={touched.project_priority && !errors.project_priority}
//               isInvalid={!!errors.project_priority}
//             >
//               <option value="">Select priority</option>
//               <option value="low">Low</option>
//               <option value="medium">Medium</option>
//               <option value="high">High</option>
//             </Form.Control>
//             <Form.Control.Feedback type="invalid">
//               {errors.project_priority}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="validationFormikStartDate" className="mb-3">
//             <Form.Label>Start Date</Form.Label>
//             <br />
//             <DatePicker
//               selected={values.start_date ? moment(values.start_date).toDate() : null}
//               onChange={(date) => setFieldValue('start_date', moment(date).format('YYYY-MM-DD'))}
//               dateFormat="yyyy-MM-dd"
//               className={`form-control ${touched.start_date && errors.start_date ? 'is-invalid' : ''}`}
//             />
//             {touched.start_date && errors.start_date && (
//               <Form.Control.Feedback type="invalid">
//                 {errors.start_date}
//               </Form.Control.Feedback>
//             )}
//           </Form.Group>

//           <Form.Group controlId="validationFormikEndDate" className="mb-3">
//             <Form.Label>End Date</Form.Label>
//             <br />
//             <DatePicker
//               selected={values.end_date ? moment(values.end_date).toDate() : null}
//               onChange={(date) => setFieldValue('end_date', moment(date).format('YYYY-MM-DD'))}
//               dateFormat="yyyy-MM-dd"
//               className={`form-control ${touched.end_date && errors.end_date ? 'is-invalid' : ''}`}
//             />
//             {touched.end_date && errors.end_date && (
//               <Form.Control.Feedback type="invalid">
//                 {errors.end_date}
//               </Form.Control.Feedback>
//             )}
//           </Form.Group>

//           <Form.Group controlId="validationFormik04" className="mb-3">
//             <Form.Label>Project Code</Form.Label>
//             <Form.Control
//               type="text"
//               name="project_code"
//               value={values.project_code}
//               onChange={handleChange}
//               isValid={touched.project_code && !errors.project_code}
//               isInvalid={!!errors.project_code}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.project_code}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="validationFormik05" className="mb-3">
//             <Form.Label>Completed At</Form.Label>
//             <br />
//             <DatePicker
//               selected={values.completed_at ? moment(values.completed_at).toDate() : null}
//               onChange={(date) => setFieldValue('completed_at', moment(date).format('YYYY-MM-DD'))}
//               dateFormat="yyyy-MM-dd"
//               className={`form-control ${touched.completed_at && errors.completed_at ? 'is-invalid' : ''}`}
//             />
//             {touched.completed_at && errors.completed_at && (
//               <Form.Control.Feedback type="invalid">
//                 {errors.completed_at}
//               </Form.Control.Feedback>
//             )}
//           </Form.Group>

//           <Form.Group controlId="validationFormik08" className="mb-3">
//             <Form.Label>Estimated Hours</Form.Label>
//             <Form.Control
//               type="number"
//               name="estimated_hours"
//               value={values.estimated_hours}
//               onChange={handleChange}
//               isValid={touched.estimated_hours && !errors.estimated_hours}
//               isInvalid={!!errors.estimated_hours}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.estimated_hours}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="validationFormik09" className="mb-3">
//             <Form.Label>Default Task Type</Form.Label>
//             <Form.Control
//               type="text"
//               name="default_task_type"
//               value={values.default_task_type}
//               onChange={handleChange}
//               isValid={touched.default_task_type && !errors.default_task_type}
//               isInvalid={!!errors.default_task_type}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.default_task_type}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="validationFormik10" className="mb-3">
//             <Form.Label>Task Status Group</Form.Label>
//             <Form.Control
//               type="text"
//               name="task_status_group"
//               value={values.task_status_group}
//               onChange={handleChange}
//               isValid={touched.task_status_group && !errors.task_status_group}
//               isInvalid={!!errors.task_status_group}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.task_status_group}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="validationFormik11" className="mb-3">
//             <Form.Label>Project Template Id</Form.Label>
//             <Form.Control
//               type="number"
//               name="project_template_id"
//               value={values.project_template_id}
//               onChange={handleChange}
//               isValid={touched.project_template_id && !errors.project_template_id}
//               isInvalid={!!errors.project_template_id}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.project_template_id}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Button type="submit">Submit</Button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default FormExample;





















//current


// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import moment from 'moment';

// function FormExample({ handleSubmit, handleClose, initialValues }) {
//   const schema = yup.object().shape({
//     project_name: yup.string().required('Project name is required'),
//     project_description: yup.string(),
//     project_priority: yup.string().required('Priority is required'),
//     start_date: yup.date().required('Start date is required'),
//     end_date: yup.date(),
//     project_type: yup.string().required('Project type is required'),
//     project_code: yup.string().required('Project code is required'),
//     completed_at: yup.date(),
//     estimated_hours: yup.number(),
//     default_task_type: yup.string(),
//     task_status_group: yup.string(),
//     project_template_id: yup.number(),
//   });




//   return (
//     <Formik
//       validationSchema={schema}
//       onSubmit={async (values, { setSubmitting }) => {
//         try {
//           await handleSubmit(values); 
//         } catch (error) {
//           console.error('Error occurred during submission:', error);
//         } finally {
//           setSubmitting(false);
//           handleClose();
//         }
//       }}
//       initialValues={{
//                  project_name: initialValues?.project_name || '',
//                  project_description: initialValues?.project_description || '',
//                  project_priority: initialValues?.project_priority || '',
//                  project_status: initialValues?.project_status || '',
//                  start_date: initialValues?.start_date || null,
//                  end_date: initialValues?.end_date || null,
//                  project_type: initialValues?.project_type || '',
//                  project_code: initialValues?.project_code || '',
//                  completed_at: initialValues?.completed_at || null,
//                  estimated_hours: initialValues?.estimated_hours || 0,
//                  default_task_type: initialValues?.default_task_type || '',
//                  task_status_group: initialValues?.task_status_group || '',
//                  projectId: initialValues?.projectId || 0,
//                }}
//     >
//       {({ handleSubmit, handleChange, values, touched, errors, setFieldValue }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Form.Group controlId="validationFormik01" className="mb-3">
//             <Form.Label>Project name</Form.Label>
//             <Form.Control
//               type="text"
//               name="project_name"
//               value={values.project_name}
//               onChange={handleChange}
//               isValid={touched.project_name && !errors.project_name}
//               isInvalid={!!errors.project_name}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.project_name}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="validationFormik02" className="mb-3">
//             <Form.Label>Project Description</Form.Label>
//             <Form.Control
//               type="text"
//               name="project_description"
//               value={values.project_description}
//               onChange={handleChange}
//               isValid={touched.project_description && !errors.project_description}
//               isInvalid={!!errors.project_description}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.project_description}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="validationFormik06" className="mb-3">
//             <Form.Label>Priority</Form.Label>
//             <Form.Control
//               as="select"
//               name="project_priority"
//               value={values.project_priority}
//               onChange={handleChange}
//               isValid={touched.project_priority && !errors.project_priority}
//               isInvalid={!!errors.project_priority}
//             >
//               <option value="">Select priority</option>
//               <option value="low">Low</option>
//               <option value="medium">Medium</option>
//               <option value="high">High</option>
//             </Form.Control>
//             <Form.Control.Feedback type="invalid">
//               {errors.project_priority}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="validationFormikStartDate" className="mb-3">
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

//           <Form.Group controlId="validationFormikEndDate" className="mb-3">
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

//           <Form.Group controlId="validationFormik04" className="mb-3">
//             <Form.Label>Project Code</Form.Label>
//             <Form.Control
//               type="text"
//               name="project_code"
//               value={values.project_code}
//               onChange={handleChange}
//               isValid={touched.project_code && !errors.project_code}
//               isInvalid={!!errors.project_code}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.project_code}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="validationFormik05" className="mb-3">
//             <Form.Label>Completed At</Form.Label>
//             <br />
//             <DatePicker
//               selected={values.completed_at}
//               onChange={(date) => setFieldValue('completed_at', moment(date).format("YYYY-MM-DD"))}
//               dateFormat="yyyy-MM-dd"
//               className={`form-control ${touched.completed_at && errors.completed_at ? 'is-invalid' : ''}`}
//             />
//             {touched.completed_at && errors.completed_at && (
//               <Form.Control.Feedback type="invalid">
//                 {errors.completed_at}
//               </Form.Control.Feedback>
//             )}
//           </Form.Group>

//           <Form.Group controlId="validationFormik08" className="mb-3">
//             <Form.Label>Estimated Hours</Form.Label>
//             <Form.Control
//               type="number"
//               name="estimated_hours"
//               value={values.estimated_hours}
//               onChange={handleChange}
//               isValid={touched.estimated_hours && !errors.estimated_hours}
//               isInvalid={!!errors.estimated_hours}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.estimated_hours}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="validationFormik09" className="mb-3">
//             <Form.Label>Default Task Type</Form.Label>
//             <Form.Control
//               type="text"
//               name="default_task_type"
//               value={values.default_task_type}
//               onChange={handleChange}
//               isValid={touched.default_task_type && !errors.default_task_type}
//               isInvalid={!!errors.default_task_type}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.default_task_type}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="validationFormik10" className="mb-3">
//             <Form.Label>Task Status Group</Form.Label>
//             <Form.Control
//               type="text"
//               name="task_status_group"
//               value={values.task_status_group}
//               onChange={handleChange}
//               isValid={touched.task_status_group && !errors.task_status_group}
//               isInvalid={!!errors.task_status_group}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.task_status_group}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="validationFormik11" className="mb-3">
//             <Form.Label>Project Template Id</Form.Label>
//             <Form.Control
//               type="number"
//               name="project_template_id"
//               value={values.project_template_id}
//               onChange={handleChange}
//               isValid={touched.project_template_id && !errors.project_template_id}
//               isInvalid={!!errors.project_template_id}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.project_template_id}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Button type="submit">Submit</Button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default FormExample;
