import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Data = () => {
      var[user,setUser]=useState([])
      axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      setUser(res.data)
      console.log(user)
    })
  return (
    <div><center>
        <TableContainer>
          <h1>table</h1>
            <TableHead>
                <TableRow>
                    <TableCell>name </TableCell>
                    <TableCell>username</TableCell>
                    <TableCell>email </TableCell>
                  <TableCell>city </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {user.map((val)=>{
                return(

              
              <TableRow>
                <TableCell>{val .name}</TableCell>
                <TableCell>{val .username}</TableCell>
                <TableCell>{val .email}</TableCell>
                <TableCell>{val .address.city}</TableCell>
              </TableRow>
                )
              })}
            </TableBody>
        </TableContainer>
        </center>
    </div>
  )
}

export default Data