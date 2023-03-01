import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Cruz = () => {
  return (
    <Box sx={{display:'flex', gap: 2, flexDirection:'column', width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
      <Box sx={{height: '20%', boxShadow: '3',width:'100%', display:'flex',justifyContent: 'flex-start', alignItems:'center', pt:1, flexDirection: "column"}}>
          <Typography variant='h2'>Hello</Typography>
          <Button variant="outlined">Outlined</Button>
      </Box>
      <Box sx={{height: '80%', gap:2, p:4, boxShadow: '3', width: '100%',justifyContent: 'center', alignItems:'center', display: 'flex', flexDirection:'row'}}>
        
        {/* LEFT BOX */}
        <Box sx={{ display:'flex', flexWrap: 'wrap', gap: 2, justifyContent:'center', alignItems:'center',height: '100%', width: '100%', boxShadow:'3'}}>
          <TextField id="outlined-basic" label="First Name" variant="outlined" />
          <TextField id="outlined-basic" label="Second Name" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>

          {/* RIGHT BOX */}
        <Box sx={{ display:'flex', flexDirection: 'column', gap:2, justifyContent:'center', alignItems:'center',height: '100%', width: '100%', boxShadow:'3'}}>
            <Box sx={{height:"100%", width:"100%"}} component="img" src="https://images.unsplash.com/photo-1676474048621-631d8bb3ff3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1511&q=80"  />
        </Box>

      </Box>
    </Box>
  )
}

export default Cruz