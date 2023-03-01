import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Borrow_Page = () => {
  return (

    <Box sx={{pt:6, padding:3, display:"flex", flexDirection:"row", gap:3, width:"100%"}}>

        <Box sx={{display:"flex", flex:1, justifyContent:"center"}}>
            <TextField fullWidth id="filled-basic1" label="Student Name" variant="filled" />
        </Box>
            
        <Box sx={{display:"flex", flex:1, justifyContent:"center"}}>
            <TextField fullWidth id="filled-basic2" label="Student Number" variant="filled" />
        </Box>

    </Box>








  )
}

export default Borrow_Page