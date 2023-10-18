
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile(){
    const navigate= useNavigate()

   const handlesubmission=(event)=>{
     event.preventDefault();
    // Update the form data state when the form is submitted\
    const con = event.target.elements.nm.value;
    if (con==""){
        alert("Fill the required fields")
    }
    else{
        //navigate("/profile-two", { state: data });
        console.log(con)
    navigate("/submit",{state:{con}})}

   }
    return(
        
        <>
        {/* <header>Profile</header> */}
        <section id="info">
            <h2>Contact</h2>
        </section>
        <footer>
            <form onSubmit={handlesubmission} >
            <input type="text" name="nm"placeholder="Enter Name"/><br/>
                <input type="text" name="em"placeholder="Enter E-mail"/><br/>
                <button type="submit" >Submit</button>
                    
            </form>
        </footer>

        </>
      
        
    )
}

export default Profile