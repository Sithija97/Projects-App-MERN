import axios from "axios";

const baseURL = "http://localhost:9000";

/* GET */
export const getProjects = () => {
  return axios.get(`${baseURL}/get/projects`);
};

/* POST */
export const postProject = (project) => {
  return axios.post(`${baseURL}/new/project`, project);
};
