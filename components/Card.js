import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

const Card = ({ project, onEdit, onDelete }) => {
  const {
    id,
    project_name,
    project_description,
    start_date,
    end_date,
    project_status,
    project_type,
    project_priority,
    project_code,
    completed_at,
    estimated_hours,
    default_task_type,
    task_status_group,
    project_template_id,
    
  } = project;

  // const userCount = members.filter(member => member.resource_name === "User").length;
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/tasklist`);
    localStorage.setItem("projectID",id)
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <h3>{project_name}</h3>
      <p>{project_description}</p>
      <p><strong>Type:</strong> {project_type}</p>
      <p><strong>Priority:</strong> {project_priority}</p>
      <p><strong>Code:</strong> {project_code}</p>
      <p><strong>Start Date:</strong> {start_date}</p>
      <p><strong>End Date:</strong> {end_date}</p>
      <p><strong>Status:</strong> {project_status}</p>
      <p><strong>Completed At:</strong> {completed_at}</p>
      <p><strong>Estimated Hours:</strong> {estimated_hours}</p>
      <p><strong>Default Task Type:</strong> {default_task_type}</p>
      <p><strong>Task Status Group:</strong> {task_status_group}</p>
      <p><strong>Template ID:</strong> {project_template_id}</p>
      {/* {members.length > 0 && (
        <div>
          <h4>Members:</h4>
          <div className={styles.memberIcon}>
            <FontAwesomeIcon icon={faUsers} /> {userCount} {userCount !== 1 ? 'Users' : 'User'}
          </div>
          <ul>
            {members.map((member, index) => (
              <li key={index} className={styles.memberItem}>
                {member.resource_name}
              </li>
            ))}
          </ul>
        </div>
      )} */}
      <div className={styles.cardActions}>
        <Button variant="outline-primary" className={styles.buttonSpacing} onClick={(e) => { e.stopPropagation(); onEdit(project); }}>Edit</Button>
        <Button variant="outline-danger" className={styles.buttonSpacing} onClick={(e) => { e.stopPropagation(); onDelete(project.id); }}>Delete</Button>
      </div>
    </div>
  );
};

export default Card;








































// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrashAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
// import styles from '../styles/Home.module.css';
// import { Button } from 'react-bootstrap';
// import { useRouter } from 'next/router';

// const Card = ({ project, onEdit, onDelete }) => {
//   const {
//     project_name = "",
//     project_description = "",
//     start_date = "",
//     end_date = "",
//     project_status = "",
//     project_type = "",
//     project_priority = "",
//     project_code = "",
//     completed_at = "",
//     estimated_hours = "",
//     default_task_type = "",
//     task_status_group = "",
//     project_template_id = "",
//     members = []
//   } = project;

//   const userCount = members.filter(member => member.resource_name === "User").length;
//   const router = useRouter();

//   const handleCardClick = () => {
//     router.push(`/tasklist/${project.id}`); // Navigate to the task list page with project id
//   };

//   return (
//     <div className={styles.card}    onClick={handleCardClick}>
//       <h3>{project_name}</h3>
//       <p>{project_description}</p>
//       <p><strong>Type:</strong> {project_type}</p>
//       <p><strong>Priority:</strong> {project_priority}</p>
//       <p><strong>Code:</strong> {project_code}</p>
//       <p><strong>Start Date:</strong> {start_date}</p>
//       <p><strong>End Date:</strong> {end_date}</p>
//       <p><strong>Status:</strong> {project_status}</p>
//       <p><strong>Completed At:</strong> {completed_at}</p>
//       <p><strong>Estimated Hours:</strong> {estimated_hours}</p>
//       <p><strong>Default Task Type:</strong> {default_task_type}</p>
//       <p><strong>Task Status Group:</strong> {task_status_group}</p>
//       <p><strong>Template ID:</strong> {project_template_id}</p>
//       {members.length > 0 && (
//         <div>
//           <h4>Members:</h4>
//           <div className={styles.memberIcon}>
//             <FontAwesomeIcon icon={faUsers} /> {userCount} {userCount !== 1 ? 'Users' : 'User'}
//           </div>
//           <ul>
//             {members.map((member, index) => (
//               <li key={index} className={styles.memberItem}>
//                 {member.resource_name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <div className={styles.cardActions}>
//          <Button variant="outline-primary" className={styles.buttonSpacing} onClick={() => onEdit(project)}>Edit</Button>
//          <Button variant="outline-danger" className={styles.buttonSpacing} onClick={() => onDelete(project.id)}>Delete</Button>
//        </div>
//     </div>
//   );
// };

// export default Card;

































// import styles from '../styles/Home.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUsers } from '@fortawesome/free-solid-svg-icons';
// import { Button } from 'react-bootstrap';

// const Card = ({ project, onEdit, onDelete }) => {
//   const {
//     project_name = "",
//     project_description = "",
//     start_date = "",
//     end_date = "",
//     project_status = "",
//     project_type = "",
//     project_priority = "",
//     project_code = "",
//     completed_at = "",
//     estimated_hours = "",
//     default_task_type = "",
//     task_status_group = "",
//     project_template_id = "",
//     members = []
//   } = project;

//   const userCount = members.filter(member => member.resource_name === "User").length;

//   return (
//     <div className={styles.card}>
//       <h3>{project_name}</h3>
//       <p>{project_description}</p>
//       <p><strong>Type:</strong> {project_type}</p>
//       <p><strong>Priority:</strong> {project_priority}</p>
//       <p><strong>Code:</strong> {project_code}</p>
//       <p><strong>Start Date:</strong> {start_date}</p>
//       <p><strong>End Date:</strong> {end_date}</p>
//       <p><strong>Status:</strong> {project_status}</p>
//       <p><strong>Completed At:</strong> {completed_at}</p>
//       <p><strong>Estimated Hours:</strong> {estimated_hours}</p>
//       <p><strong>Default Task Type:</strong> {default_task_type}</p>
//       <p><strong>Task Status Group:</strong> {task_status_group}</p>
//       <p><strong>Template ID:</strong> {project_template_id}</p>
//       {members.length > 0 && (
//         <div>
//           <h4>Members:</h4>
//           <div className={styles.memberIcon}>
//             <FontAwesomeIcon icon={faUsers} /> {userCount} {userCount !== 1 ? 'Users' : 'User'}
//           </div>
//           <ul>
//             {members.map((member, index) => (
//               <li key={index} className={styles.memberItem}>
//                 {member.resource_name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <div className={styles.cardActions}>
//         <Button variant="outline-primary" className={styles.buttonSpacing} onClick={() => onEdit(project)}>Edit</Button>
//         <Button variant="outline-danger" className={styles.buttonSpacing} onClick={() => onDelete(project.id)}>Delete</Button>
//       </div>
//     </div>
//   );
// };

// export default Card;
