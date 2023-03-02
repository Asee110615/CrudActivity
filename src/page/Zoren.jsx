import { Typography, Box, TextField, Card  } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';
import React from 'react'


const Zoren = () => {
  return (
    <Box>

    <Box 
          sx={{
            bgcolor: '#bf8bff',
              color: 'secondary.contrastText',
               p: 3,
                length:'50%',
                   display: 'flex',
                     gap: 1
                       }}
            >
             <CallIcon/>09777045177 
             <EmailIcon/>zorenaguilar@gmail.com

          <Box sx={{
             display: 'flex',
              justifyContent: 'flex-end',
                flexWrap: 'wrap',
                  gap: 2,
                   }}>
                     <FacebookIcon/>
                      <TwitterIcon/>
                        <InstagramIcon/>   
            </Box>

   </Box>
   
 
   
   

   



   
</Box>

    )
  }  
    
    
    
    
  
    








    
  


export default Zoren