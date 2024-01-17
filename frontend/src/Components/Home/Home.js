import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import axios from 'axios';

export default function Home(props) {
  let navigate = useNavigate();

  const [data, setData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  // const [showSuggestion, setShowSuggestion] = useState([false, false, false, false, false, false]);
  const [searchBox, setSearchBox] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  let handleSearchBoxChange = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.get(`http://localhost:4000/suggestion?keyword=${e.target.value}`);
      const arr_values = response.data.data || [];
      setSuggestion(arr_values);
      console.log("arr_values",arr_values);
  
      if (arr_values.length > 0) {
        let len = arr_values.length;
        console.log(len);
        setSuggestion([...arr_values]);
        console.log("myarr",suggestion);
      }
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  
    setSearchBox(e.target.value);
  };
  
  
  let handleSubmit = (event) => {
    fetch(`http://localhost:4000/getScrapedData?cName=${searchBox}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        props.setMakeEmpty(true);
        setShowDetails(true);
        navigate({
          pathname: "/Details",
          state: data,
        });
      });
    event.preventDefault();
  };

  let handleSuggestionClick = (item) => {
    let instrumentName = item.name.trim() || "";
    let inputBox = document.getElementById("search");
    inputBox.value = instrumentName;
    setSearchBox(instrumentName);

    // Now you can perform further actions or fetch data based on the selected item
    console.log(item);
    fetch(`http://localhost:4000/getScrapedData?cName=${instrumentName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <div className="homeContainer">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search" style={{ display: "block" }}>
            {" "}
            Search Stock's here
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter stock name"
            value={searchBox || ""}
            onChange={handleSearchBoxChange}
          />

          <button type="submit" onClick={handleSubmit}>
            Search
          </button>

          <ul>
            {suggestion.length === 0 ? (
              <p></p>
            ) : (
              suggestion.map((item, index) => (
                <li key={index} className="myList" onClick={() => handleSuggestionClick(item)}>
                  {item.name}
                </li>
              ))
            )}
          </ul>
        </form>
      </div>
    </>
  );
}
