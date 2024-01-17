import React,{useState} from 'react'
import axios from 'axios'

const Nilkant = () => {

    const [suggestion, setSuggestion] = useState([]);
    const [searchBox, setSearchBox] = useState("");

    let handleSearchBoxChange = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.get(`http://localhost:4000/dummyarray?keyword=${e.target.value}`);
          const arr_values = response.data.data || [];
          setSuggestion(arr_values);
          console.log("arr_values",arr_values);
      
          if (arr_values.length > 0) {
            let len = arr_values.length;
            console.log(len);
            // let myArr1 = new Array(len).fill(true);
            // myArr1 = myArr1.concat(new Array(8 - len).fill(false));
            // setShowSuggestion(myArr1);
    
            setSuggestion([...arr_values]);
            console.log("myarr",suggestion);
          }
        } catch (error) {
          console.error(error);
          // Handle error as needed
        }
      
        setSearchBox(e.target.value);
      };
      

  return (
    <>

    </>
  )
}

export default Nilkant