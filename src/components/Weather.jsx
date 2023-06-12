import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setapiData,
  setSearch,
  setLat,
  setLon,
} from "../features/users/weatherSlice";
import "../components/weather.css";
const Weather = () => {
  // const [apiData, setapiData] = useState();
  const dispatch = useDispatch();
  const { apiData } = useSelector((state) => {
    return state.weatherDetails;
  });
  // const [search, setSearch] = useState("");
  const { search } = useSelector((state) => {
    return state.weatherDetails;
  });
  // const [lat, setLat] = useState();
  // const [lon, setLon] = useState();
  const { lat } = useSelector((state) => {
    return state.weatherDetails;
  });
  const { lon } = useSelector((state) => {
    return state.weatherDetails;
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7729aa7d77cd4dbe5ccb93437202f4d9&units=metric`
      );
      const data = await res.json();
      console.log("data", data);
      if (res.ok) {
        dispatch(setapiData(data));
      }
    };
    fetchData();
  }, [search]);
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7729aa7d77cd4dbe5ccb93437202f4d9&units=metric`
      );
      const data = await res.json();
      if (res.ok) {
        dispatch(setapiData(data));
      }
    };
    fetcher();
  }, [lon, lat]);
  console.log(lat, lon);
  navigator.geolocation.getCurrentPosition((position) => {
    dispatch(setLon(position.coords.longitude));
    dispatch(setLat(position.coords.latitude));
  });

  return (
    <div className="box">
      <h1>
        Weather <span>App</span>
        <input
          type="text"
          name="Search"
          placeholder="Search city"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          value={search}
        />
        {apiData ? (
          <div className="element">
            <img
              src={
                "http://openweathermap.org/img/w/" +
                apiData.weather[0].icon +
                ".png"
              }
              alt="weather"
            />
            <p>
              <span>Temp:</span> &nbsp;
              {apiData.main.temp}
            </p>
            <p>
              <span>Name:</span> &nbsp;
              {apiData.name}
            </p>
            <p>
              <span>Country:</span> &nbsp;
              {apiData.sys.country}
            </p>

            <p>
              <span>Temp:</span> &nbsp;
              {apiData.main.temp}
            </p>
            <p>
              <span>min/max:</span> &nbsp;
              {apiData.main.temp_min}/{apiData.main.temp_max}
            </p>

            <p>
              <span>Long/Lat:</span> &nbsp;
              {apiData.coord.lon}/{apiData.coord.lat}
            </p>
          </div>
        ) : (
          <h1>No data found</h1>
        )}
      </h1>
    </div>
  );
};

export default Weather;
