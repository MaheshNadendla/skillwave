import axios from "axios";

export const authenticateWithGoogle = async (token) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/google`, {
      token
    });
    // console.log(response, token);
    return response;
  } catch (error) {
    throw new Error("Error authenticating with Google: " + error.message);
  }
};

// Function to refresh user data from backend
export const refreshUserData = async (token) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/google`, {
      token
    });
    return response;
  } catch (error) {
    throw new Error("Error refreshing user data: " + error.message);
  }
};

export const checkAuth = async (token) => {

  console.log("checkauth function : ",token)

  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/check`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error verifying authentication: " + (error.response?.data?.message || error.message));
  }
};