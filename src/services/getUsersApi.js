import axios from "axios";

axios.defaults.baseURL = "https://6468a6c2e99f0ba0a8298847.mockapi.io/";

const fetchUsersData = async (page) => {
  const response = axios
    .get(`users?page=${page}&limit=8`)
    .catch(function (error) {
      throw new Error();
    });

  return response;
};

const updateUserData = async (id, followers, following) => {
  const response = axios.put(
    `users/${id}`,
    {
      followers: followers,
      following: following,
    },
    { headers: { "content-type": "application/json" } }
  );

  return response;
};

export { fetchUsersData, updateUserData };
