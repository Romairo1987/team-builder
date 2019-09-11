import React,{useState} from 'react';
import Form from "./components/Form";

function App() {
  const [newMember, setnewMember]=useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
      <Form newMember={newMember} setnewMember={setnewMember}/>
      {newMember.map((member,index)=>(
        <div key={index}>
          <h2>{member.Name}</h2>
          <h3>{member.Email}</h3>
          <h4>{member.Role}</h4>
          <br/>
        </div>
      ))}
      </header>
    </div>
  );
}

export default App;
