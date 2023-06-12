import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setData } from "../features/users/userSlice";
const Card = () => {
  const { id } = useParams();
  // const [data, setData] = useState(null);
  const { data } = useSelector((state) => {
    return state.userDetails;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://dummyjson.com/users/" + `${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setData(data));
      })
      .catch((error) => {
        return error;
      });
  }, []);
  console.log(data);
  return data === null ? (
    <h1>Loading....</h1>
  ) : (
    <>
      <div
        className="card"
        style={{ border: "1px solid black", padding: "15px" }}
      >
        <div className="image" alt="no image">
          <img src={data?.image} />
        </div>
        <div className="description">
          <h1>Name:{data?.firstName}</h1>
          <p>Contact:{data?.phone}</p>
          <p>username:{data?.username}</p>
          <p>BloodGroup:{data?.bloodGroup}</p>
          <p>Height:{data?.height}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
