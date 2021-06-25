import React, { useCallback, useState } from "react";
import axios from "axios";

export const tokenBreak = () => {
  const accessToken = axios
    .get("https://ecoerest.com/api/security")
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  const apiUrl = "https://ecoerest.com/";

  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  function App() {
    const [users, setUsers] = useState([]);
    const [requestError, setRequestError] = useState();
    const fetchData = useCallback(async () => {
      try {
        const result = await authAxios.get(`/api/users`);
      } catch (err) {
        setRequestError(err.message);
      }
    });
    return (
      <div>
        {users.map((user) => {
          return <p key={user.userID}>{user.username}</p>;
        })}
      </div>
    );
  }
};
