import React,{useState} from "react";

const Form =props=>{
    const [newMember,setnewMember]=useState({
      Name:"",
      Email:"",
      Role:""  
    });
 
    const handleChange=(event)=>{
        setnewMember({...newMember, [event.target.name]: event.target.value});
    };

    const handleSubmit= event=>{
        event.preventDefault();
        props.setnewMember([...props.newMember,newMember]);
        resetForm();
    };

    const resetForm=()=>{
        setnewMember({
            Name:"",
            Email:"",
            Role:"" 
        });
    }

    return(
    <form method="post" onSubmit={handleSubmit}>
        
        <input  type="text" name="Name" placeholder="Name" onChange={handleChange} value={newMember.Name}></input>
        <br/><br/><br/>
        
        <input  type="email" name="Email" placeholder="Email" onChange={handleChange} value={newMember.Email}></input>
        <br/><br/><br/>

        <input  type="text" name="Role" placeholder="Role" onChange={handleChange} value={newMember.Role}></input>
        <br/><br/><br/>

        <button type="submit">submit</button>
    </form>
    )
}

export default Form;