import { Button } from '@mui/material'
import React,{ useEffect, useState } from 'react'

const ThreeName = () => {

    const[Name,setn]= useState(" ")
    const sinu=()=>{
        setn("sinu")

    }
    const aswani=()=>{
        setn("aswani")

    }
    const sahva=()=>{
        setn("sahva")
    }
    useEffect(()=>{
        sinu()

    },[])

  return (
    <div>
        <h2>welcome {Name}</h2>
<Button variant='contained'color='error' onClick={sinu}>sinu</Button> &nbsp;
<Button variant='contained' color='error' onClick={aswani}>aswani</Button> &nbsp;
<Button variant='contained' color='error' onClick={sahva}>sahva</Button> &nbsp;

    </div>
  )
}

export default ThreeName