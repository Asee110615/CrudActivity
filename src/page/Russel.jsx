import { Box, Typography, Button, TextField, CardContent, CardActions, Card, CardMedia } from '@mui/material'
import React from 'react'

const Russel = () => {
  return (
    // TOP
    <Box sx={{ backgroundColor: '#bbdefb', height:'100%', width:'100%' }}>
      <Box sx={{p:4, display:'flex', flexDirection:'column', gap:2}} >
        <Typography variant='h3'>Hello Guys</Typography>
        <Typography variant='h6'>Click the button bellow to join</Typography>
        <Button variant="contained" sx={{width:'240px'}}>Click me</Button>
        </Box>

        {/* Signup button */}
          <Box sx={{display:'flex', flexDirection:'row', width:'100%',backgroundColor:'#c5cae9',height:'150px', justifyContent:'space-between', alignItems:'center'}}>
          <Box sx={{display:'flex', flex:1, width: '100%', pl:4}}>
            <Typography variant='h5'>Sign up for anything you want</Typography>
          </Box>
          <Box sx={{display:'flex', flex:3, width: '100%'}}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth  />
            <Box>
            <Button variant="contained" sx={{width:'240px',p:2}}>Click me</Button>
            </Box>
          </Box>
        </Box>

        {/* Cards */}
        <Box sx={{display:'flex', p:4, gap:4, justifyContent:'center', flexWrap: 'wrap'}}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://images.unsplash.com/photo-1677599177535-237307c83dbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Desert
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet unde nemo quasi, laudantium illum blanditiis ab doloremque rem incidunt in.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://images.unsplash.com/photo-1677599177535-237307c83dbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Desert
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet unde nemo quasi, laudantium illum blanditiis ab doloremque rem incidunt in.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://images.unsplash.com/photo-1677599177535-237307c83dbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Desert
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet unde nemo quasi, laudantium illum blanditiis ab doloremque rem incidunt in.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://images.unsplash.com/photo-1677599177535-237307c83dbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Desert
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet unde nemo quasi, laudantium illum blanditiis ab doloremque rem incidunt in.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://images.unsplash.com/photo-1677599177535-237307c83dbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Desert
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet unde nemo quasi, laudantium illum blanditiis ab doloremque rem incidunt in.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://images.unsplash.com/photo-1677599177535-237307c83dbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Desert
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet unde nemo quasi, laudantium illum blanditiis ab doloremque rem incidunt in.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

        </Box>
        
        {/*  */}
        

     
    </Box>


  )
}



export default Russel