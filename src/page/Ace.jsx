import { Box, Typography } from '@mui/material'
import React from 'react'
import Borrow_Page from './Borrow_Page'


const Ace = () => {
  return (
    <Box sx={{gap:2, padding: 2, display: "flex", height: "100%", width:"100%", flexDirection:"column"}}>

      <Box sx={{gap:2, display:"flex", width:"100%", height:"20%"}}>

        <Box sx={{backgroundColor:"#80cbc4",boxShadow:"3", display:"flex",flex:"1", justifyContent:"center", height:"100%", alignItems:"center"}}>
          <Typography variant="h5">BORROW</Typography>
        </Box>

        <Box sx={{backgroundColor:"#80cbc4", boxShadow:"3", display:"flex",flex:"1", justifyContent:"center", height:"100%", alignItems:"center"}}>
          <Typography variant="h5">RETURN</Typography>
        </Box>

        <Box sx={{backgroundColor:"#80cbc4", boxShadow:"3", display:"flex",flex:"1", justifyContent:"center", height:"100%", alignItems:"center"}}>
          <Typography variant="h5">INVENTORY VIEW</Typography>
        </Box>

        <Box sx={{backgroundColor:"#80cbc4", boxShadow:"3", display:"flex",flex:"1", justifyContent:"center", height:"100%", alignItems:"center"}}>
          <Typography variant="h5">BORROWED ITEMS VIEW</Typography>
        </Box>
        
      </Box>


      <Box sx={{boxShadow:"3", display:"flex", width:"100%",height:"80%", pt: 4}}>
        <Borrow_Page/>
      </Box>

    </Box>
  )
}

export default Ace