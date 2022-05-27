import axios from "axios";

// submit api call
export const fetchCreateProject = async (formData) => {
  try {
    const token = localStorage.getItem("token");

    const config = token
      ? { headers: { Authorization: `Bearer ${token}` } }
      : null;
    const data = await axios.post("https://gsdevportfolio.herokuapp.com/api/projects/create", formData, config);

    return data;
  } catch (err) {
    console.log(err);
  }
};
