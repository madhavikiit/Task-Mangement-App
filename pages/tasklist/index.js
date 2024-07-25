import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import Header from '../../pages/header';
import Sidebar from '../../pages/Sidebar';
import styles from '../../styles/Home.module.css';
import { getTasks, createTask, updateTask, deleteTask } from '../../pages/api/tasks';
import FormModal from '../../components/FormModal';


const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [projectId,setProjectId] = useState(0);

  
  useEffect(()=>{
    if(typeof window !== "undefined"){
      setProjectId(localStorage.getItem("projectID"))
    }
  },[])

  useEffect(() => {
    if (projectId != 0) {
      fetchTasks(projectId);
    }
  }, [projectId]);

  const fetchTasks = async (projectId) => {
    try {
      const taskData = await getTasks(projectId);
      setTasks(taskData);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleShowModal = (task = null) => {
    setEditingTask(task);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingTask(null);
  };

  const handleAddTask = async (task) => {
    try {
      const newTask = await createTask({ ...task, project_id: projectId });
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setShowModal(false);
      
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleEditTask = async (task) => {
    try {
      const updatedTask = await updateTask(task.id, task);
      setTasks((prevTasks) => prevTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
      setShowModal(false);
      
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleSubmit = async (task) => {
    if (editingTask) {
      await handleEditTask(task);
      setShowModal(false);
    } else {
      await handleAddTask(task);
      setShowModal(false);
    }
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <Sidebar />
      </div>
      
      <Button className={styles.addTaskButton} variant="primary" onClick={() => handleShowModal()}>
  Add Task
</Button>


      <Container className={`${styles.container} ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {tasks.length > 0 ? (
          <div className={`${styles.tableContainer} mt-4`}>
            <Table striped bordered hover className="table">
              <thead>
                <tr>
                  <th>Task no.</th>
                  <th>Task Name</th>
                  <th>Task Description</th>
                  <th>Start date</th>
                  <th>End date</th>
                  <th>Status</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr key={task.id}>
                    <td>{index + 1}</td>
                    <td>{task.task_title}</td>
                    <td>{task.task_description}</td>
                    <td>{task.start_date}</td>
                    <td>{task.due_date}</td>
                    <td>{task.task_state}</td>
                    <td>
                      <Button variant="outline-primary" onClick={() => handleShowModal(task)}>Edit</Button>
                    </td>
                    <td>
                      <Button variant="outline-danger" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p className= {styles.noTaskMessage}>No tasks available</p>
        )}
      </Container>

      <FormModal
        show={showModal}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmit}
        task={editingTask}
        projectId = {projectId}
      />
    </div>
  );
};

export default TaskList;




























// import React, { useState, useEffect } from 'react';
// import { Container, Table, Button } from 'react-bootstrap';
// import Header from '../../pages/header';
// import Sidebar from '../../pages/Sidebar';
// import styles from '../../styles/Home.module.css';
// import { getTasks, createTask, updateTask, deleteTask } from '../../pages/api/tasks';
// import FormModal from '../../components/FormModal';

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [editingTask, setEditingTask] = useState(null);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const projectId = 1;
//       const taskData = await getTasks(projectId);
//       setTasks(taskData);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const handleShowModal = (task = null) => {
//     setEditingTask(task);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setEditingTask(null);
//   };

//   const handleAddTask = async (task) => {
//     try {
//       const newTask = await createTask(task);
//       setTasks((prevTasks) => [...prevTasks, newTask]);
//       handleCloseModal();
//     } catch (error) {
//       console.error('Error creating task:', error);
//     }
//   };

//   const handleEditTask = async (task) => {
//     try {
//       const updatedTask = await updateTask(task.id, task);
//       setTasks((prevTasks) => prevTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
//       handleCloseModal();
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };

//   const handleDeleteTask = async (taskId) => {
//     try {
//       await deleteTask(taskId);
//       setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const handleSubmit = async (task) => {
//     if (editingTask) {
//       await handleEditTask(task);
//       setShowModal(false);
//     } else {
//       await handleAddTask(task);
//       setShowModal(false);
//     }
//   };

//   return (
//     <div>
//       <Header toggleSidebar={toggleSidebar} />
//       <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
//         <Sidebar />
//       </div>
//       <Button className={styles.topRightButton} variant="primary" onClick={() => handleShowModal()}>
//         Add task
//       </Button>
//       <Container className={`${styles.container} ${sidebarOpen ? 'sidebar-open' : ''}`}>
//         {tasks.length > 0 ? (
//           <div className={`${styles.tableContainer} mt-4`}>
//             <Table striped bordered hover className="table">
//               <thead>
//                 <tr>
//                   <th>Task no.</th>
//                   <th>Task Name</th>
//                   <th>Task Description</th>
//                   <th>Start date</th>
//                   <th>End date</th>
//                   <th>Status</th>
//                   <th>Edit</th>
//                   <th>Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tasks.map((task, index) => (
//                   <tr key={task.id}>
//                     <td>{index + 1}</td>
//                     <td>{task.task_title}</td>
//                     <td>{task.task_description}</td>
//                     <td>{task.start_date}</td>
//                     <td>{task.due_date}</td>
//                     <td>{task.task_state}</td>
//                     <td>
//                       <Button variant="outline-primary" onClick={() => handleShowModal(task)}>Edit</Button>
//                     </td>
//                     <td>
//                       <Button variant="outline-danger" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         ) : (
//           <p>No tasks available</p>
//         )}
//       </Container>

//       <FormModal
//         show={showModal}
//         handleClose={handleCloseModal}
//         handleSubmit={handleSubmit}
//         task={editingTask}
//       />
//     </div>
//   );
// };

// export default TaskList;



































// import React, { useState, useEffect } from 'react';
// import { Container, Table, Button } from 'react-bootstrap';
// import Header from '../../pages/header';
// import Sidebar from '../../pages/Sidebar';
// import styles from '../../styles/Home.module.css';
// import { getTasks, createTask, updateTask, deleteTask } from '../../pages/api/tasks';
// import FormModal from '../../components/FormModal';

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [editingTask, setEditingTask] = useState(null);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const projectId = 1; // Replace with your actual projectId
//       const taskData = await getTasks(projectId);
//       setTasks(taskData);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const handleShowModal = (task = null) => {
//     setEditingTask(task);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setEditingTask(null);
//   };

//   const handleAddTask = async (task) => {
//     try {
//       const newTask = await createTask(task);
//       setTasks((prevTasks) => [...prevTasks, newTask]); 
//       handleCloseModal();
//     } catch (error) {
//       console.error('Error creating task:', error);
//     }
//   };

//   const handleEditTask = async (task) => {
//     try {
//       const updatedTask = await updateTask(task.id, task);
//       setTasks((prevTasks) => prevTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
//       handleCloseModal();
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };

//   const handleDeleteTask = async (taskId) => {
//     try {
//       await deleteTask(taskId);
//       setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId)); 
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const handleSubmit = async (task) => {
//     if (editingTask) {
//       await handleEditTask(task);
//       setShowModal(false);
//     } else {
//       await handleAddTask(task);
//       setShowModal(false);
//     }
//   };

//   return (
//     <div>
//       <Header toggleSidebar={toggleSidebar} />
//       <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
//         <Sidebar />
//       </div>
//       <Button className={styles.topRightButton} variant="primary" onClick={() => handleShowModal()}>
//         Add task
//       </Button>
//       <Container className={`${styles.container} ${sidebarOpen ? 'sidebar-open' : ''}`}>
//         {tasks.length > 0 ? (
//           <div className={`${styles.tableContainer} mt-4`}>
//             <Table striped bordered hover className="table">
//               <thead>
//                 <tr>
//                   <th>Task no.</th>
//                   <th>Task Name</th>
//                   <th>Task Description</th>
//                   <th>Start date</th>
//                   <th>End date</th>
//                   <th>Status</th>
//                   <th>Edit</th>
//                   <th>Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tasks.map((task, index) => (
//                   <tr key={task.id}>
//                     <td>{index + 1}</td>
//                     <td>{task.taskName}</td>
//                     <td>{task.taskDescription}</td>
//                     <td>{task.startDate}</td>
//                     <td>{task.endDate}</td>
//                     <td>{task.taskStatus}</td>
//                     <td>
//                       <Button variant="outline-primary" onClick={() => handleShowModal(task)}>Edit</Button>
//                     </td>
//                     <td>
//                       <Button variant="outline-danger" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         ) : (
//           <p>No tasks available</p>
//         )}
//       </Container>

//       <FormModal
//         show={showModal}
//         handleClose={handleCloseModal}
//         handleSubmit={handleSubmit}
//         task={editingTask}
//       />
//     </div>
//   );
// };

// export default TaskList;
























// import React, { useState, useEffect } from 'react';
// import { Container, Table, Button } from 'react-bootstrap';
// import Header from '../../pages/header';
// import Sidebar from '../../pages/Sidebar';
// import styles from '../../styles/Home.module.css';
// import { getTasks, createTask, updateTask, deleteTask } from '../../pages/api/tasks';
// import FormModal from '../../components/FormModal';

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [editingTask, setEditingTask] = useState(null);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const taskData = await getTasks();
     
//       setTasks(taskData);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const handleShowModal = (task = null) => {
//     setEditingTask(task);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setEditingTask(null);
//   };

//   const handleAddTask = async (task) => {
//     try {
//       const newTask = await createTask(task);
      
//       setTasks((prevTasks) => [...prevTasks, newTask]); 
//       handleCloseModal();
//     } catch (error) {
//       console.error('Error creating task:', error);
//     }
//   };

//   const handleEditTask = async (task) => {
//     try {
//       const updatedTask = await updateTask(task.id, task);
      
//       setTasks((prevTasks) =>
//         prevTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
//       );
//       handleCloseModal();
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };

//   const handleDeleteTask = async (taskId) => {
//     try {
//       await deleteTask(taskId);
      
//       setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId)); 
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const handleSubmit = async (task) => {
//     if (editingTask) {
//       await handleEditTask(task);
//       setShowModal(false);
//     } else {
//       await handleAddTask(task);
//       setShowModal(false);
//     }
//   };

//   return (
//     <div>
//       <Header toggleSidebar={toggleSidebar} />
//       <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
//         <Sidebar />
//       </div>
//       <Button className={styles.topRightButton} variant="primary" onClick={() => handleShowModal()}>
//         Add task
//       </Button>
//       <Container className={`${styles.container} ${sidebarOpen ? 'sidebar-open' : ''}`}>
//         {tasks.length > 0 ? (
//           <div className={`${styles.tableContainer} mt-4`}>
//             <Table striped bordered hover className="table">
//               <thead>
//                 <tr>
//                   <th>Task no.</th>
//                   <th>Task Name</th>
//                   <th>Task Description</th>
          
//                   <th>Start date</th>
//                   <th>End date</th>
//                   <th>Status</th>
//                   <th>Edit</th>
//                   <th>Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tasks.map((task, index) => (
//                   <tr key={task.id}>
//                     <td>{index + 1}</td>
//                     <td>{task.taskName}</td>
//                     <td>{task.taskDescription}</td>
//                     <td>{task.taskStartDate}</td>
//                     <td>{task.taskEndDate}</td>
//                     <td>{task.taskStatus}</td>
                    
//                     <td>
//                       <Button variant="outline-primary" onClick={() => handleShowModal(task)}>Edit</Button>
//                     </td>
//                     <td>
//                       <Button variant="outline-danger" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         ) : (
//           <p>No tasks available</p>
//         )}
//       </Container>

//       <FormModal
//         show={showModal}
//         handleClose={handleCloseModal}
//         handleSubmit={handleSubmit}
//         task={editingTask}
//       />
//     </div>
//   );
// };

// export default TaskList;










































































// import React, { useState, useEffect } from 'react';
// import { Container, Table, Button } from 'react-bootstrap';
// import Header from '../../pages/header'; 
// import Sidebar from '../../pages/Sidebar'; 
// import styles from '../../styles/Home.module.css'; 
// import { getTasks, createTask, updateTask, deleteTask } from '../../pages/api/tasks'; 
// import FormModal from '../../components/FormModal';

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [editingTask, setEditingTask] = useState(null);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const taskData = await getTasks();
//         console.log('Fetched tasks:', taskData); // Log fetched data
//         setTasks(taskData);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };

//     fetchTasks();
//   }, []);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const handleShowModal = (task = null) => {
//     setEditingTask(task);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setEditingTask(null);
//   };

//   const handleAddTask = async (task) => {
//     try {
//       const newTask = await createTask(task);
//       console.log('New task added:', newTask); // Log new task
//       setTasks((prevTasks) => [...prevTasks, newTask]); // Update tasks with new task
//       handleCloseModal();
//     } catch (error) {
//       console.error('Error creating task:', error);
//     }
//   };

//   const handleEditTask = async (task) => {
//     try {
//       const updatedTask = await updateTask(task.id, task);
//       console.log('Task updated:', updatedTask); // Log updated task
//       setTasks((prevTasks) =>
//         prevTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
//       );
//       handleCloseModal();
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };

//   const handleDeleteTask = async (taskId) => {
//     try {
//       await deleteTask(taskId);
//       console.log('Task deleted:', taskId); // Log deleted task
//       setTasks(tasks.filter(task => task.id !== taskId));
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const handleSubmit = async (task) => {
//     if (editingTask) {
//       handleEditTask(task);
//     } else {
//       handleAddTask(task);
//     }
//   };

//   return (
//     <div>
//       <Header toggleSidebar={toggleSidebar} />
//       <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
//         <Sidebar />
//       </div>
//       <Button className={styles.topRightButton} variant="primary" onClick={() => handleShowModal()}>
//         Add task
//       </Button>
//       <Container className={`${styles.container} ${sidebarOpen ? 'sidebar-open' : ''}`}>
//         {tasks.length > 0 ? (
//           <div className={`${styles.tableContainer} mt-4`}>
//             <Table striped bordered hover className="table">
//               <thead>
//                 <tr>
//                   <th>Task no.</th>
//                   <th>Task Name</th>
//                   <th>Task Description</th>
//                   <th>Status</th>
//                   <th>Edit</th>
//                   <th>Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tasks.map((task, index) => (
//                   <tr key={task.id}>
//                     <td>{index + 1}</td>
//                     <td>{task.taskName}</td>
//                     <td>{task.taskDescription}</td>
//                     <td>{task.taskStatus}</td>
//                     <td>
//                       <Button variant="outline-primary" onClick={() => handleShowModal(task)}>Edit</Button>
//                     </td>
//                     <td>
//                       <Button variant="outline-danger" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         ) : (
//           <p>No tasks available</p>
//         )}
//       </Container>
      
//       <FormModal
//         show={showModal}
//         handleClose={handleCloseModal}
//         handleSubmit={handleSubmit}
//         task={editingTask}
//       />
//     </div>
//   );
// };

// export default TaskList;
































































// import React, { useState } from 'react';
// import { Container, Table, Button } from 'react-bootstrap';
// import Header from '../../pages/header'; 
// import Sidebar from '../../pages/Sidebar'; 
// import styles from '../../styles/Home.module.css'; 
// import FormModal from '../../components/FormModal';



// const TaskList = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [tasks, setTasks] = useState([]);
//   const [editingTask, setEditingTask] = useState(null);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const handleShowModal = (task = null) => {
//     setEditingTask(task);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setEditingTask(null);
//   };

//   const handleSubmit = (task) => {
//     if (task.id) {
      
//       setTasks(tasks.map(t => t.id === task.id ? task : t));
//     } else {
      
//       setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
//     }
//     handleCloseModal();
//   };

//   const handleDelete = (taskId) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   };

//   return (
//     <div>
//       <Header toggleSidebar={toggleSidebar} />
//       <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
//         <Sidebar />
//       </div>
//       <Container className={`${styles.container} ${sidebarOpen ? 'sidebar-open' : ''}`}>
//         <Button
//           className={styles.topRightButton}
//           variant="primary"
//           onClick={() => handleShowModal()}
//         >
//           Add Task
//         </Button>
//         {tasks.length > 0 && (
//           <div className={`${styles.tableContainer} mt-4`}>
//             <Table striped bordered hover className="table">
//               <thead>
//                 <tr>
//                   <th>Task no.</th>
//                   <th>Task Name</th>
//                   <th>Task Description</th>
//                   <th>Status</th>
//                   <th>Edit</th>
//                   <th>Delete</th>

//                 </tr>
//               </thead>
//               <tbody>
//                 {tasks.map((task, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{task.taskName}</td>
//                     <td>{task.taskDescription}</td>
//                     <td>{task.taskStatus}</td>
//                     <td>
//                       <Button variant="outline-primary" onClick={() => handleShowModal(task)}>Edit</Button>
//                     </td>
//                     <td>
//                       <Button variant="outline-danger" onClick={() => handleDelete(task.id)}>Delete</Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         )}
//       </Container>
//       <FormModal show={showModal} handleClose={handleCloseModal} handleSubmit={handleSubmit} task={editingTask} />
//     </div>
//   );
// };

// export default TaskList;
