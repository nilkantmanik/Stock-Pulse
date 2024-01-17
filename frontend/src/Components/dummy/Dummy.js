import React, { Component } from 'react';
import './Dummy.css';

class Dummy extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      "David",
      "Damien",
      "Sara",
      "James",
      "Jane",
      "Sapiens"
    ];
    
    this.state = {
      suggestions: [],
      text: ''
    }
  }
  
onTextChanged = (e) => {
  const value = e.target.value;
  let suggestions = [];
  if(value.length > 0) {
    const regex = new RegExp(`^${value}`, 'i');
    suggestions = this.items.sort().filter(v => regex.test(v));
  }
  this.setState(() => ({suggestions, text: value}));
}

suggestionSelected(value) {
  this.setState(() => ({
    text: value,
    suggestions: []
  }));
}

renderSuggestions() {
  const {suggestions} = this.state;
  if(suggestions.length === 0) {
    return null;
  }
  return (
    <div className="srchList">
      <ul>
        {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
      </ul>
    </div>
  );
}

  render() {
    const { text } = this.state;
    return (
      <>
      
      <div className="container">
      
        <div className="row justify-content-md-center">
          <div className="">
            <input value={text} onChange={this.onTextChanged} type="text" placeHolder="Enter the stock name" />
          </div>
          <div className="col-md-12 justify-content-md-center">
            {this.renderSuggestions()}
            
          </div>
          
        </div>
        <button className="btn" type="submit">search</button>
      </div>
      
      </>
    );
  }
}
        

export default Dummy;