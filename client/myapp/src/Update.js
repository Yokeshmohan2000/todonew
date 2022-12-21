import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Update.css'


function Update() {

const navi=useNavigate();

    const [id,setid]=useState(0)
    const [name,setname]=useState('')

    useEffect(()=>{
       setid (localStorage.getItem('_id'))
        setname (localStorage.getItem('name'))

    },[])
    const valuechange=(e)=>{
        setname(e.target.value)
    }
    function add(e){
      e.preventDefault()
      axios.put(`http://localhost:8000/${id}`,{
          name:name
      })
      navi('/')
    }
  return (
    <div class='editform'>
        <form onSubmit={add}>
        <TextField id="outlined-basic" onChange={valuechange} label="Edit Name" variant="outlined" value={name}/>
            <Button  type='submit' variant="contained" >Post</Button>
            {/* <input type='text'onChange={valuechange} value={name}></input>
            <button>Add</button> */}
        </form>

    </div>
  )
}

export default Update