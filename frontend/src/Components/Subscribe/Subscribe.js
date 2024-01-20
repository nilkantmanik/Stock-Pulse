import React, {useState} from 'react'
import "./Subscribe.css"

export default function Login() {

    const [email, setEmail] = useState("")
    // const [phno, setphno] = useState("")
    // const [name, setname] = useState("")

    let handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    let handleSubmit = (event) => {
        fetch('http://localhost:4000/subscribe', {
        method : "POST",
        mode: 'cors',
        body : JSON.stringify({email : email}),
        headers: {'Content-Type' : 'application/json'}
        
      })
      .then(response => response.json())
      .catch(er => console.log(er));
      alert("Thanks for subscribe")
      let emailInput = document.getElementById("email");
      emailInput.value = ""
        event.preventDefault()
    }
    return (
        <>
            <div className="Logincontainer">
                <form onSubmit={handleSubmit}>
                    <h1>
                        Subscribe to get daily updates
                    </h1>
                    <p style={{marginTop : "10px"}}>
                        When it comes to investing and stock trading, news and reaction time can make or break an investor. This is the best site for up-to-date financial news.
                    </p>
                    <div>
                        {/* <label htmlFor="email">Email :</label> */}
                        <input type="email" name="email" id="email" onChange={handleEmailChange} placeholder="Enter your email"/>
                    </div>
                    <button onClick={handleSubmit}>Subscribe</button>
                </form>

            </div>
        </>
    )
}
