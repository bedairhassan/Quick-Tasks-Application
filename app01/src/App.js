import React,{useState} from 'react';
import Input from './components/Input'
import Button from './components/Button'
import List from './components/List'

// Polishing: Emptying Field As Soon As User Presses Button

function App() {

  const [user,setUser]=useState({input:``,tasks:[]})

  const deleteTask = taskName=>{ 

    const filtered = user.tasks.filter(taskName1=>taskName1!==taskName)
    setUser({...user,tasks:[...filtered]})
  }

  return (
    <center>
        <Input placeholder={`Enter Task Name`} onChange={input=>setUser({...user,input})}/>
        <Button onClick={()=>setUser({...user,tasks:[...user.tasks,user.input]})} name={`Add Task`}/>
        <List data={user.tasks} deleteTask={deleteTask}/>
    </center>
  );
}

export default App;
