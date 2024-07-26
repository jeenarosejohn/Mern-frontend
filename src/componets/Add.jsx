import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import{ useNavigate } from 'react-router-dom';


const Add = () => {
 // const [counter,setCounter]=useState(0);
  const [form,setForm]=useState({
   "movieName":'',
   "category":'',
   "director":'',
   "releaseYear":''
  })
  useEffect(()=>{
    if(location.state!=null){
      setForm({form,
        movieName:location.state.movie.movieName,
        category:location.stae.movie.moviecategory,
        director:location.state.movie.director,
        releaseYear:location.state.movie.releaseYear
        
      })
    }
    
  },[])
  const location=uselocation();
  var navigate=useNavigate();
let updateMovie=(movie)=>{
  navigate('/add',{state:{movie}})
let showData=()=>{
  console.log(form);
}
let postData=()=>{
  if(location.state!=null){
    axios.put('http://localhost:400/movie-updation'+location.state.movie._id,form).then((res)=>{
      alert('Data updated');
      Navigate('/')
    }).catch((error)=>{
      console.log(error)
    })
  }
  else{
//  console.log(form);
axios.post('http://localhost:400/new-movies',form).then((res)=>{
  alert('movie data posted');
  Navigate('/')

})
}
}
}

  // let valueAdd=()=>{
  //   setCounter(counter+1);
  // }

  function valueCap(e){
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})

  }


  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        required
        id="outlined"
        label="Movie Name"
        defaultValue="Name"
        name='movieName'
        value={form.movieName}
        onChange={valueCap}
      />
      
       <TextField
        required
        id="outlined"
        label="Category"
        defaultValue="Category"
        name="category"
        value={form.category}
        onChange={valueCap}
      />
      
       <TextField
        required
        id="outlined"
        label="Movie Director"
        defaultValue="Director"
        name="director"
        value={form.director}
        onChange={valueCap}
      />
      
       <TextField
        required
        id="outlined"
        label="Release Year"
        defaultValue="Year"
        name="releaseYear"
        value={form.releaseYear}
        onChange={valueCap}
        
      />
      <br/>
      <Button variant="contained" color="success" onClick={postData}>
 Submit
</Button>
<br/>
{/* <small>Button clicked {counter} time(s).</small> */}
         </div>
         </Box>
  )
}

export default Add