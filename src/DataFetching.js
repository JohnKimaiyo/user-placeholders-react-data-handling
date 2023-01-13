import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataFetching() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <ul>
        {users.map((users) => (
          <li key={users.id}>{users.name}</li>
        ))}
      </ul>
    </div>
  );
}
