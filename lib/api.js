import axios from 'axios';


const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Create a separate instance for form-urlencoded requests
export const formInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});



const baseURL = "https://osbaseleaf-api.andolasoft.co.in";
export default instance;

// const headers = {
//   'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMjUxYTYyYS1mZThhLTRkMTctOGY4NC1lODY5N2M2MTAyNTciLCJhdWQiOlsiZmFzdGFwaS11c2VyczphdXRoIl0sImV4cCI6MTcyMTEwNDUxN30.lp6vGxeFvX3vJ47vMhN__57Pbk6NGFAZEsf2hIxG-No',

//   'Accept': 'application/json',

//   'x-tenant-id': 203,
// };







//  export const login = async (credentials) => {
//   try {
//     const response = await axios.post(`${baseURL}/v1/auth/jwt/login`, credentials);
//     return response.data; 
//   } catch (error) {
//     throw error;
//   }
// };



//  export async function login(userData) {
//   const params = new URLSearchParams();
//   params.append("username", userData.username);
//   params.append("password", userData.password);

//   return await formInstance.post(`/v1/auth/jwt/login`, params.toString());
// }


// export const getProjects = async () => {
//   try {
//     const response = await axios.get(`${baseURL}/projectsapi/projects/?order_by=-id`, {
//       headers: headers()
//     });
//     return response.data.items;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };

// export const createProject = async (projectData) => {
//   try {
//     const response = await axios.post(`${baseURL}/projectsapi/projects/`, projectData, { headers: headers });
    

//     return response.data;
//   } catch (error) {
//     console.error('Error creating project:', error);
//     throw error;
//   }
// };


// export const updateProject = async (project_template_id, projectData) => {
//   try {
//     const response = await axios.put(`${baseURL}/projectsapi/projects/${project_template_id}`, projectData, { headers: headers });
//     return response.data;
//   } catch (error) {
//     console.error('Error updating project:', error);
//     throw error;
//   }
// };

// export const deleteProject = async (project_template_id) => {
//   try {
//     await axios.delete(`${baseURL}/projectsapi/projects/${project_template_id}`, { headers: headers });
//   } catch (error) {
//     console.error('Error deleting project:', error);
//     throw error;
//   }
// };

// export const getProjectTasks = async (projectId) => {
//   try {
//     const response = await axios.get(`${baseURL}/projectsapi/projects/${projectId}/tasks`, { headers: headers });
//     return response.data.items;
//   } catch (error) {
//     console.error('Error fetching tasks:', error);
//     throw error;
//   }
// };




































// import axios from 'axios';

// const baseURL = "https://osbaseleaf-api.andolasoft.co.in";

// const headers = {
//   'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMjUxYTYyYS1mZThhLTRkMTctOGY4NC1lODY5N2M2MTAyNTciLCJhdWQiOlsiZmFzdGFwaS11c2VyczphdXRoIl0sImV4cCI6MTcyMDUwMDk1M30.DAz6ST2ysmE6YJT1f5BpmqKcIbQkBHiRqwtetNYrC7k',
//   'Accept': 'application/json',
//   'x-tenant-id': 203,
// };



//  export const login = async (credentials) => {
//   try {
//     const response = await axios.post(`${baseURL}/v1/auth/jwt/login`, credentials);
//     return response.data; // Assuming your API returns the token in response.data.accessToken
//   } catch (error) {
//     throw error;
//   }
// };

// export const getProjects = async () => {
//   try {
//     const response = await axios.get(`${baseURL}/projectsapi/projects/?order_by=-id`, {
//       headers: headers
//     });
//     return response.data.items;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };

// export const createProject = async (projectData) => {
//   try {
//     const response = await axios.post(`${baseURL}/projectsapi/projects/`, projectData, { headers: headers });
    

//     return response.data;
//   } catch (error) {
//     console.error('Error creating project:', error);
//     throw error;
//   }
// };


// export const updateProject = async (project_template_id, projectData) => {
//   try {
//     const response = await axios.put(`${baseURL}/projectsapi/projects/${project_template_id}`, projectData, { headers: headers });
//     return response.data;
//   } catch (error) {
//     console.error('Error updating project:', error);
//     throw error;
//   }
// };

// export const deleteProject = async (project_template_id) => {
//   try {
//     await axios.delete(`${baseURL}/projectsapi/projects/${project_template_id}`, { headers: headers });
//   } catch (error) {
//     console.error('Error deleting project:', error);
//     throw error;
//   }
// };

// export const getProjectTasks = async (projectId) => {
//   try {
//     const response = await axios.get(`${baseURL}/projectsapi/projects/${projectId}/tasks`, { headers: headers });
//     return response.data.items;
//   } catch (error) {
//     console.error('Error fetching tasks:', error);
//     throw error;
//   }
// };
