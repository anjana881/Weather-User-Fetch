import React, { useState, useEffect } from "react";
import "./user.css";
const Users = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  console.log("data", data);
  console.log("error", error);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (data === null) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="userDetail">
      {data?.users?.map((user) => (
        <div
          key={user.id}
          className="card"
          style={{ border: "1px solid black", padding: "20px", margin: "10px" }}
        >
          <div className="image">
            <img src={user.image} alt="User" />
          </div>
          <div className="description">
            <h1>Name: {user.firstName}</h1>
            <p>Contact: {user.phone}</p>
            <p>Username: {user.username}</p>
            <p>Blood Group: {user.bloodGroup}</p>
            <p>Height: {user.height}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
