import { TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Statebasic = () => {
    const[name,setName]=useState('aswani')
    const[input,setInput]=useState('')
    const inputHandler=(e)=>{
        console.log(e.target.value)
    setInput(e.target.value)
    }
    const buttonHandler=()=>{
        setName(input)
    }
  return (
    <div>
        <h2>welcome {name}</h2>
        <TextField varient='outlined' onChange={inputHandler}/> <br /> <br />
        <button onClick={buttonHandler}>submit</button>
    
    </div>
  )
}

export default Statebasic