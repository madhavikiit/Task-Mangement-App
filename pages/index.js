import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';
import CreateButton from './CreateButton';
import FormModal from './FormModal';
import { getProjects, createProject, updateProject, deleteProject } from './apiService';
import Header from './header'; 
import Sidebar from './Sidebar';


const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await getProjects();
        setProjects(projects);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleShowModal = (project = null) => {
    setEditingProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingProject(null);
  };

  const handleFormSubmit = async (values) => {
    try {
      if (editingProject) {
        console.log('Editing project:', editingProject);
        const updatedProject = await updateProject(editingProject.id, values);
        setProjects((prevProjects) =>
          prevProjects.map((project) =>
            project.id === updatedProject.id ? updatedProject : project
          )
         
        );
        console.log('Updated project:', updatedProject);
        
        
      } else {
        console.log('Creating new project with values:', values);
        const newProject = await createProject(values);
        setProjects((prevProjects) => [...prevProjects, newProject]);
        console.log('New project created:', newProject);
        
        
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      handleCloseModal();
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      await deleteProject(projectId);
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== projectId)
      );
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <Sidebar />
      </div>
      <Container className={`${styles.container} ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Row className="justify-content-end mt-3">
          <Col xs="auto">
            <CreateButton onClick={() => handleShowModal()} />
          </Col>
        </Row>
        <Row className={styles.cardContainer}>
          {loading ? (
            <p>Loading...</p>
          ) : projects.length > 0 ? (
            projects.map((project) => (
              <Col key={project.id} xs={12} md={6} lg={4}>
                <Card project={project} onEdit={handleShowModal} onDelete={handleDeleteProject} />
              </Col>
            ))
          ) : (
            <Col xs={12} md={6} lg={4}>
              <div className={styles.card}>
                <h3>No Projects Found</h3>
              </div>
            </Col>
          )}
        </Row>
        <FormModal
          show={showModal}
          handleClose={handleCloseModal}
          handleSubmit={handleFormSubmit}
          initialValues={editingProject}
        />

        
        
        
       
        
      </Container>
    </div>
  );
};

export default Home;





































// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import Card from '../components/Card';
// import styles from '../styles/Home.module.css';
// import CreateButton from './CreateButton';
// import FormModal from './FormModal';
// import { getProjects, createProject, updateProject, deleteProject } from '../lib/api';
// import Header from './header'; 
// import Sidebar from './Sidebar';
// import Login from './login.js';
// import Signup from './signUp.js';


// const Home = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [editingProject, setEditingProject] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const projects = await getProjects();
//         setProjects(projects);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const handleShowModal = (project = null) => {
//     setEditingProject(project);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setEditingProject(null);
//   };

//   const handleFormSubmit = async (values) => {
//     try {
//       if (editingProject) {
//         const updatedProject = await updateProject(editingProject.id, values);
//         setProjects((prevProjects) =>
//           prevProjects.map((project) =>
//             project.id === updatedProject.id ? updatedProject : project
//           )
//         );
//       } else {
//         const newProject = await createProject(values);
//         setProjects((prevProjects) => [...prevProjects, newProject]);
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     } finally {
//       handleCloseModal();
//     }
//   };

//   const handleDeleteProject = async (projectId) => {
//     try {
//       await deleteProject(projectId);
//       setProjects((prevProjects) =>
//         prevProjects.filter((project) => project.id !== projectId)
//       );
//     } catch (error) {
//       console.error('Error deleting project:', error);
//     }
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div>
//       <Header toggleSidebar={toggleSidebar} />
//       <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
//         <Sidebar />
//       </div>
//       <Container className={`${styles.container} ${sidebarOpen ? 'sidebar-open' : ''}`}>
//         <Row className="justify-content-end mt-3">
//           <Col xs="auto">
//             <CreateButton onClick={() => handleShowModal()} />
//           </Col>
//         </Row>
//         <Row className={styles.cardContainer}>
//           {loading ? (
//             <p>Loading...</p>
//           ) : projects.length > 0 ? (
//             projects.map((project) => (
//               <Col key={project.id} xs={12} md={6} lg={4}>
//                 <Card project={project} onEdit={handleShowModal} onDelete={handleDeleteProject} />
//               </Col>
//             ))
//           ) : (
//             <Col xs={12} md={6} lg={4}>
//               <div className={styles.card}>
//                 <h3>No Projects Found</h3>
//               </div>
//             </Col>
//           )}
//         </Row>
//         <FormModal
//           show={showModal}
//           handleClose={handleCloseModal}
//           handleSubmit={handleFormSubmit}
//           initialValues={editingProject}
//         />
//       </Container>
//     </div>
//   );
// };

// export default Home;

























































































































































// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import Card from '../components/Card';
// import styles from '../styles/Home.module.css';
// import CreateButton from './CreateButton';
// import FormModal from './FormModal';
// import { getProjects, createProject, updateProject, deleteProject } from '../lib/api';
// // import Header from './Header';
// // import Sidebar from './Sidebar';
// const Home = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [editingProject, setEditingProject] = useState(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const projects = await getProjects();
//         setProjects(projects);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const handleShowModal = (project = null) => {
//     setEditingProject(project);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setEditingProject(null);
//   };

//   const handleFormSubmit = async (values) => {
//     try {
//       if (editingProject) {
//         const updatedProject = await updateProject(editingProject.id, values);
//         setProjects((prevProjects) =>
//           prevProjects.map((project) =>
//             project.id === updatedProject.id ? updatedProject : project
//           )
//         );
//       } else {
//         const newProject = await createProject(values);
//         setProjects((prevProjects) => [...prevProjects, newProject]);
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     } finally {
//       handleCloseModal();
//     }
//   };

//   const handleDeleteProject = async (projectId) => {
//     try {
//       await deleteProject(projectId);
//       setProjects((prevProjects) =>
//         prevProjects.filter((project) => project.id !== projectId)
//       );
//     } catch (error) {
//       console.error('Error deleting project:', error);
//     }
//   };

//   return (
//     <div>
//       <Header/>

//       <Container className={styles.container}>
//       <Row className="justify-content-end mt-3">
//         <Col xs="auto">
//           <CreateButton onClick={() => handleShowModal()} />
//         </Col>
//       </Row>
//       <Row className={styles.cardContainer}>
//         {loading ? (
//           <p>Loading...</p>
//         ) : projects.length > 0 ? (
//           projects.map((project) => (
//             <Col key={project.id} xs={12} md={6} lg={4}>
//               <Card project={project} onEdit={handleShowModal} onDelete={handleDeleteProject} />
//             </Col>
//           ))
//         ) : (
//           <Col xs={12} md={6} lg={4}>
//             <div className={styles.card}>
//               <h3>No Projects Found</h3>
//             </div>
//           </Col>
//         )}
//       </Row>
//       <FormModal
//         show={showModal}
//         handleClose={handleCloseModal}
//         handleSubmit={handleFormSubmit}
//         initialValues={editingProject}
//       />
//     </Container>
//     </div>
//   );
// };

// export default Home;






























// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import Card from '../components/Card';
// import styles from '../styles/Home.module.css';
// import CreateButton from './CreateButton';
// import FormModal from './FormModal';
// import { getProjects, createProject, deleteProject, updateProject } from '../lib/api';

// const Home = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [editProject, setEditProject] = useState(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const projects = await getProjects();
//         setProjects(projects);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const handleShowModal = (project = null) => {
//     setEditingProject(project);
//     setShowModal(true);
//   };
//   const handleCloseModal = () => {
//     setShowModal(false);
//     setEditProject(null);
//   };

//   const handleFormSubmit = async (values) => {
//     try {
//       if (editProject) {
//         await updateProject(editProject.id, values);
//         setProjects((prevProjects) =>
//           prevProjects.map((project) =>
//             project.id === editProject.id ? { ...project, ...values } : project
//           )
//         );
//       } else {
//         const newProject = await createProject(values);
//         setProjects((prevProjects) => [...prevProjects, newProject]);
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     } finally {
//       handleCloseModal();
//     }
//   };

//   const handleEdit = (project) => {
//     setEditProject(project);
//     setShowModal(true);
//   };

//   const handleDelete = async (projectId) => {
//     try {
//       await deleteProject(projectId);
//       setProjects((prevProjects) => prevProjects.filter((project) => project.id !== projectId));
//     } catch (error) {
//       console.error('Error deleting project:', error);
//     }
//   };

//   return (
//     <Container className={styles.container}>
//       <Row className="justify-content-end mt-3">
//         <Col xs="auto">
//           <CreateButton onClick={handleShowModal} />
//         </Col>
//       </Row>
//       <Row className={styles.cardContainer}>
//         {loading ? (
//           <p>Loading...</p>
//         ) : projects.length > 0 ? (
//           projects.map((project) => (
//             <Col key={project.id} xs={12} md={6} lg={4}>
//               <Card project={project} onEdit={handleEdit} onDelete={handleDelete} />
//             </Col>
//           ))
//         ) : (
//           <Col xs={12} md={6} lg={4}>
//             <div className={styles.card}>
//               <h3>No Projects Found</h3>
//             </div>
//           </Col>
//         )}
//       </Row>
//       <FormModal
//         show={showModal}
//         handleClose={handleCloseModal}
//         handleSubmit={handleFormSubmit}
//         initialValues={editProject || {
//           project_name: '',
//           project_description: '',
//           project_priority: '',
//           project_status: '',
//           start_date: null,
//           end_date: null,
//           project_type: '',
//           project_code: '',
//           completed_at: null,
//           estimated_hours: 0,
//           default_task_type: '',
//           task_status_group: '',
//           project_template_id: 0,
//         }}
//       />
//     </Container>
//   );
// };

// export default Home;






















// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import Card from '../components/Card';
// import styles from '../styles/Home.module.css';
// import CreateButton from './CreateButton';
// import FormModal from './FormModal';
// import { getProjects, createProject } from '../lib/api';

// const Home = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const projects = await getProjects();
//         setProjects(projects);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const handleShowModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   const handleFormSubmit = async (values) => {
//     try {
//       const newProject = await createProject(values);
//       setProjects((prevProjects) => [...prevProjects, newProject]);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     } finally {
//       handleCloseModal();
//     }
//   };

//   return (
//     <Container className={styles.container}>
//       <Row className="justify-content-end mt-3">
//         <Col xs="auto">
//           <CreateButton onClick={handleShowModal} />
//         </Col>
//       </Row>
//       <Row className={styles.cardContainer}>
//         {loading ? (
//           <p>Loading...</p>
//         ) : projects.length > 0 ? (
//           projects.map((project) => (
//             <Col key={project.id} xs={12} md={6} lg={4}>
//               <Card project={project} />
//             </Col>
//           ))
//         ) : (
//           <Col xs={12} md={6} lg={4}>
//             <div className={styles.card}>
//               <h3>No Projects Found</h3>
              
//             </div>
//           </Col>
//         )}
//       </Row>
//       <FormModal
//         show={showModal}
//         handleClose={handleCloseModal}
//         handleSubmit={handleFormSubmit}
//       />
//     </Container>
//   );
// };

// export default Home;