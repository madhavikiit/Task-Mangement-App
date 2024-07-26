import instance from '../../lib/api'
import { authHeader } from '../authHeader';




export const getTasks = async (projectId) => {
  try {
    // /tasksapi/tasks/?get_all=false&project_id=101&page=1&size=10&order_by=-id

    const response = await instance.get(`/tasksapi/tasks/?project_id=${projectId}/tasks`, { headers: authHeader() });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const createTask = async (taskData) => {
  try {
    const response = await instance.post(`/tasksapi/tasks/`, taskData, { headers : authHeader() });
    return response.data; 
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const updateTask = async (taskId, taskData) => {
  try {
    const response = await instance.put(`/tasksapi/tasks/${taskId}`, taskData, { headers: authHeader() });
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    await instance.delete(`/tasksapi/tasks/${taskId}`, { headers: authHeader() });
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};

// export const getProjectTasks = async (projectId) => {
//   try {
//     const response = await instance.get(`/tasksapi/tasks/${projectId}/tasks`, { headers: authHeader() });
//     return response.data.items;
//   } catch (error) {
//     console.error('Error fetching project tasks:', error);
//     throw error;
//   }
// };









































// import axios from 'axios';
// // import axiosInstance from './axiosInstance';

// const baseURL = "https://osbaseleaf-api.andolasoft.co.in";

// const headers = {
//   'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMjUxYTYyYS1mZThhLTRkMTctOGY4NC1lODY5N2M2MTAyNTciLCJhdWQiOlsiZmFzdGFwaS11c2VyczphdXRoIl0sImV4cCI6MTcyMTI4MDc2NH0.wO6OcW6I5YyGx3koqGEXJs_loGfwi440qVtP7do6eDo',
  
//   'Accept': 'application/json',
//   'x-tenant-id': 203,
//   'Content-Type': 'application/json'
// };

// export const getTasks = async (projectId) => {
//   try {
//     // /tasksapi/tasks/?get_all=false&project_id=101&page=1&size=10&order_by=-id

//     const response = await axios.get(`${baseURL}/tasksapi/tasks/?project_id=${projectId}`, { headers });
//     return response.data.items;
//   } catch (error) {
//     console.error('Error fetching tasks:', error);
//     throw error;
//   }
// };

// export const createTask = async (taskData) => {
//   try {
//     const response = await axios.post(`${baseURL}/tasksapi/tasks/`, taskData, { headers });
//     return response.data; 
//   } catch (error) {
//     console.error('Error creating task:', error);
//     throw error;
//   }
// };

// export const updateTask = async (taskId, taskData) => {
//   try {
//     const response = await axios.put(`${baseURL}/tasksapi/tasks/${taskId}`, taskData, { headers });
//     return response.data;
//   } catch (error) {
//     console.error('Error updating task:', error);
//     throw error;
//   }
// };

// export const deleteTask = async (taskId) => {
//   try {
//     await axios.delete(`${baseURL}/tasksapi/tasks/${taskId}`, { headers });
//   } catch (error) {
//     console.error('Error deleting task:', error);
//     throw error;
//   }
// };

// export const getProjectTasks = async (projectId) => {
//   try {
//     const response = await axios.get(`${baseURL}/tasksapi/tasks/${projectId}/tasks`, { headers });
//     return response.data.items;
//   } catch (error) {
//     console.error('Error fetching project tasks:', error);
//     throw error;
//   }
// };
