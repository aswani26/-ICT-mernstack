import { AppBar, Button, ButtonGroup, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar> 
            <Toolbar> 
                <h3> myapp</h3> &nbsp; &nbsp; 
                <Link to='/login'> 
                <Button variant="contained" color='info'>Login</Button> </Link>&nbsp; &nbsp;
                
                <Link to='/signup'>

                <Button variant="contained" color='info' >signup</Button>
                </Link>
                <Link to='/table'>
                <Button variant="contained" color='info'>table</Button> </Link>&nbsp; &nbsp;
                <Link to='/state'>
                <Button variant="contained" color='info'>state</Button> </Link>&nbsp; &nbsp;
                <Link to='/count'>
                <Button variant="contained" color='info'>count</Button> </Link>&nbsp; &nbsp;
                <Link to='/name'>
                <Button variant="contained" color='info'>Name</Button> </Link>&nbsp; &nbsp;
                <Link to='/card'>
                <Button variant="contained" color='info'>card</Button> </Link>&nbsp; &nbsp;
            </Toolbar>
        </AppBar>
        <br /> <br />
    </div>
  )
}

export default Navbar