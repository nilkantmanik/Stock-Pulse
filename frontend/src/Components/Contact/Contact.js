import React, {useState} from 'react'
import './Contact.css'

export default function Contact() {

    const [name,  setName] = useState("")
    
    const [phno,  setPhno] = useState()
    
    const [email,  setEmail] = useState("")
    
    const [dummy,  setDummy] = useState("")

    const [quary,  setQuary] = useState("")

    let handleNameChange = e => {
        e.persist();
        setName(e.target.value);
      };

      let handlePhnoChange = e => {
        e.persist();
        setPhno(e.target.value);
      };

      let handleEmailChange = e => {
        e.persist();
        setEmail(e.target.value);
      };

      let handleDummyChange = e => {
        e.persist();
        setDummy(e.target.value);
      };

      let handleQuaryChange = e => {
        e.persist();
        setQuary(e.target.value);
      };


    let handleContactSubmit = (event) => {
        fetch('http://localhost:3000/contactSubmit', {
            method : "POST",
            mode: 'cors',
            body : JSON.stringify({
                name : name,
                Phno : phno,
                email : email,
                dummy : dummy,
                quary : quary
            }),
            headers: {'Content-Type' : 'application/json'}
            
          })
          .then(response => response.json())
          .catch(er => console.log(er)); 
          alert("Your response have been submited")
          let nameINPUT  = document.getElementById("name")
          let ph_noINPUT = document.getElementById("phno")
          let emailINPUT = document.getElementById("email")
          let commentINPUT = document.getElementById("message")

          nameINPUT.value = ""
          ph_noINPUT.value = ""
          emailINPUT.value = ""
          commentINPUT.value = ""

        event.preventDefault();   
    }
    return (
        <>
            <div className="contactContainer">
                <form action="" onSubmit={handleContactSubmit}>
                    <div>
                        <label htmlFor="name" style = {{ whiteSpace: "pre" }}>Name : {`${'            '}`}</label>
                        <input type="text" name="name" id="name" onChange={handleNameChange}/> 
                    </div>
                    <div id="phnodiv">
                        <label htmlFor="phno" style = {{ whiteSpace: "pre" }}>Phone no. : {`${'    '}`}</label>
                        <input type="number" name="phno" id="phno" onChange={handlePhnoChange}/>
                    </div>
                    <div>
                        <label htmlFor="email" style = {{ whiteSpace: "pre" }}>Email : {`${'             '}`}</label>
                        <input type="email" name="email" id="email" onChange={handleEmailChange}/>
                    </div>
                    <div>
                        <label htmlFor="message">write your comment here : </label>
                    </div>
                    <div>
                        <textarea rows="10" cols="60" name="message" id="message" onChange={handleQuaryChange}>
                        </textarea>
                    </div>
                    <div>
                        <input id="submitBit" type="submit"/>
                    </div>
                </form>
            </div>
        </>
    )
}

