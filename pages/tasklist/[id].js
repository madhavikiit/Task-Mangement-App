import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

//task detail page

const TaskDetail = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (projectId) {
          const response = await axios.get(`/api/tasks?projectId=${projectId}`);
          setTasks(response.data);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [projectId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Task List for Project {projectId}</h1>
      <Link href="/">Back to Projects</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.task_name}</td>
              <td>{task.task_description}</td>
              <td>{task.status}</td>
              <td>{task.start_date}</td>
              <td>{task.end_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskDetail;
