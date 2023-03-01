import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Rensteve = () => {
  return (


   
    <Box sx={{ width: '100%', height: '100%' ,boxShadow: 4,  bgcolor: 'grey', flexDirection: 'column',display: 'flex',pt: 4, gap:2}}>
      
      <Box sx={{ bgcolor: 'green',pt: 4}}>  <TextField id="filled-basic" label="item name" variant="filled" />
            <TextField id="outlined-basic" label="item description" variant="outlined" />
            <Button variant="contained">Add here</Button>
            <Button variant="contained">Edit</Button>
            <Button variant="outlined">Delete</Button>
      </Box>
      
      <Box sx={{ bgcolor: 'green', pt: 4,}}>  <TextField id="filled-basic" label="item name" variant="filled" />
            <TextField id="outlined-basic" label="item description" variant="outlined" />
            <Button variant="contained">Add here</Button>
            <Button variant="contained">Edit</Button>
            <Button variant="outlined">Delete</Button>
      </Box>
      
    
    </Box>

  )
}

export default Rensteve

