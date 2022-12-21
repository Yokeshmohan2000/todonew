import React, { useEffect } from 'react'
import axios from 'axios'
import './Form.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


import { useState} from "react"
import { useNavigate } from 'react-router-dom'





function Form() {
const [Post,setPost]=useState([])
const [data,setdata]=useState([])
const navi=useNavigate();



const clk=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8000',{
            name:Post
    })
setPost('')
}


axios.get('http://localhost:8000').then((res)=>{
    setdata(res.data)
    // console.log(res.data)
})



function Sample(){    
            axios.get('http://localhost:8000').then((res)=>{
                setdata(res.data)
                console.log(res.data)
        })
       
    }
    
     
    

    const edit=(_id,name)=>{
        localStorage.setItem('_id',_id)
        localStorage.setItem('name',name)
    
    navi('/Update')
    }

    useEffect(()=>{
        Sample()
    },[])
    const valuedelete=(_id)=>{
        axios.delete(`http://localhost:8000/${_id}`).then(()=>{
            Sample();
        })
    }
    // navi('/')

    
   
    
    const change=(e)=>{
    setPost(e.target.value)
      
}

    return (
    <div class='formtable'>
        <form onSubmit={clk}>
            <h2>ToDo Form</h2>
            <TextField id="outlined-basic" onChange={change} label="Enter Name" variant="outlined" value={Post}/>
            <Button  type='submit' variant="contained" >Post</Button>

            {/* <input type='text'  class='' placeholder='Enter name'/>
            <button type="submit" class=''>Add</button> */}
            {/* <button onClick={GetData}>list</button> */}


        </form>
        <Table sx={{width:"100%" ,padding:"10px"}}>
        <TableHead>
                   <TableRow >
                     <TableCell>Datas</TableCell>
                     <TableCell >Edit</TableCell>
                     <TableCell >Delete</TableCell>
                     </TableRow>
                 </TableHead>
        
            {data.map((add,index)=>(
                
               
                 <TableBody>
                   <TableRow>
                     <TableCell><p>{add.name}</p></TableCell>
             
                     <TableCell ><Button onclick={()=>edit(add.id)}><EditIcon/></Button></TableCell>
                     <TableCell ><Button onclick={()=>valuedelete(add._id)}><DeleteIcon/></Button></TableCell>
                     </TableRow>
                 </TableBody>
                 
              
            ))}
            </Table>
        
    </div>
  )
}

export default Form