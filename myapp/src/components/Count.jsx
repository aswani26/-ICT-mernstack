import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Count = () => {
  var[a,seta]=useState(0)
  const increment=()=>{
    seta(a+1)
  }
  const decrement=()=>{
    seta(a-1)

  }
  
  return (
  
    <div>
<h2>count {a}</h2>
<Button variant='contained'color='success' onClick={increment}>+</Button> &nbsp;
<Button variant='contained' color='error' onClick={decrement}>-</Button>
    </div>
  )
}

export default Count