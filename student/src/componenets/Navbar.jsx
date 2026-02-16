import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <h3>student</h3>
                <Link to='/add'> 
                <Button variant="contained" color='info'>Add</Button> </Link>&nbsp; &nbsp;
                
                <Link to='/view'>

                <Button variant="contained" color='info' >View</Button>
                </Link>
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar