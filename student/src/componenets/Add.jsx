import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
  var Navigate=useNavigate()  
  var location=useLocation()
  console.log(location.state)
  var[student,setStudent]=useState({
    Name:"",
    Age:"",
    Department:"",
    Mark:""
  })
  //axios.post('http://localhost:3004/add',student)
  const Handleinput=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value})
    console.log(student)  
  }

  const Handleadd=(student)=>{
    console.log()  
    if(location.state!==null){
      axios.post('http://localhost:3004/update',student)
    .then((res)=>{
      alert(res.data)
      Navigate("/view")
    })
    }
    else{

      axios.post('http://localhost:3004/add',student)
    .then((res)=>{
      alert(res.data)
      Navigate("/view")     
    }
  )
  }
  if(location.state!==null){
    useEffect(()=>{
      setStudent({...student,
        Name:location.state.val.Name,
        Age:location.state.val.Age,
        Department:location.state.val.Department,
        Mark:location.state.val.Mark,
      })
  },[])
}}
  return (
    <div>
        <br /><br /><br />
        <h1>Add student</h1>
       <TextField name='Name' label="name" variant="filled" value={student.Name} onChange={Handleinput}/><br />
       <TextField name='Age' label="age" variant="filled" value={student.Age} onChange={Handleinput}/><br />
       <TextField name='Department' label="department" variant="filled" value={student.Department} onChange={Handleinput}/><br />
       <TextField name='Mark' label="mark" variant="filled" value={student.Mark} onChange={Handleinput}/><br />
        <br />
        <Button variant="contained" color="info" onClick={()=>{Handleadd()}}>submit</Button>
        
    </div>
  )
}

export default Add