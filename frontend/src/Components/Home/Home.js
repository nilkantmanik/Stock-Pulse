import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import axios from "axios";

export default function Home() {
  let navigate = useNavigate();

  const [sdata, setData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  // const [showSuggestion, setShowSuggestion] = useState([false, false, false, false, false, false]);
  const [searchBox, setSearchBox] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  let handleSearchBoxChange = async (e) => {
    // e.preventDefault();

    setSearchBox(e.target.value);

    try {
      const response = await axios.get(
        // `http://localhost:4000/suggestion?keyword=${e.target.value}`
        `http://localhost:4000/dummyarray?keyword=${e.target.value}`
      );
      const arr_values = response.data.data.bestMatches
      || [];
      setSuggestion(arr_values);
      console.log("arr_values", arr_values);

      console.log("myarr", suggestion);

      // if (arr_values.length > 0) {
      //   let len = arr_values.length;
      //   console.log(len);
      //   setSuggestion([...arr_values]);
      //   console.log("myarr",suggestion);
      // }
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };

  let handleSubmit = (event) => {
    fetch(`http://localhost:4000/getScrapedData?cName=${searchBox}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        console.log(sdata)
        setShowDetails(true);
        navigate({
          pathname: "/Details",
          state: data,
        });
      });
    event.preventDefault();
  };

  let handleSuggestionClick = (item) => {
    let itemname = item['2. name'].trim() || "";
    // let inputBox = document.getElementById("search");
    // inputBox.value = instrumentName;
    setSearchBox(itemname);

    // Now you can perform further actions or fetch data based on the selected item
    console.log(item);
    console.log(showDetails);
    fetch(`http://localhost:4000/getScrapedData?cName=${itemname}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <div className="homeContainer">
        <form onSubmit={handleSubmit}>
          {/* <form onSubmit={() =>{console.log("cliclked")}}> */}
          <label htmlFor="search" style={{ display: "block" }}>
            {" "}
            Search Stock's here
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter stock name"
            value={searchBox}
            onChange={handleSearchBoxChange}
          />

          {/* onClick={handleSubmit} */}
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>

          <ul>
            {/* {suggestion.data.length === 0 ? ( 
              <p></p>
            ) : ( */}
            {/* {suggestion.data &&  suggestion.data.map((item, index) => (

              
              
                <li key={index} className="myList" onClick={() => handleSuggestionClick(item)}>
                  {item.symbol }
                  {console.log("here")}
                </li>
              ))
            } */}

            {searchBox && suggestion &&
              suggestion.map((item, index) => (
                <li
                  key={index}
                  // className="myList"
                  onClick={() => handleSuggestionClick(item)}
                  className="suggestionli"
                >
                  {item['2. name']}
                  {console.log(item['2. name'])}
                </li>
              ))}
          </ul>
        </form>
      </div>
    </>
  );
}
