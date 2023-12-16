import React, { useState } from "react";

const Formm=()=>{
  
const [formdetails,setformdetails]=useState({email:"",password:"",confirmpassword:""});

let {email,password,confirmpassword}=formdetails;

function updateInput(e)
{
  setformdetails({...formdetails,[e.target.name]:e.target.value})
}

function handlesubmit(e)
{
  e.preventDefault();

  if(!email||!password||!confirmpassword)
  alert("Form not submitted");
else if(password!=confirmpassword)
alert("Form not submitted");
else
alert("Form submitted successfully")
}

return(
<div>
  <form onSubmit={handlesubmit}>
  <input type="text" placeholder="Email" name="email"
onChange={updateInput}/>
<input type="password" placeholder="Password" name="password"
onChange={updateInput}/>
<input type="password" placeholder="Confirm password" name="confirmpassword"
onChange={updateInput}/>
<button type="submit">Submit</button>
  </form>

<p>{email}</p>
<p>{password}</p>
<p>{confirmpassword}</p>
</div>
)




}

export default Formm;