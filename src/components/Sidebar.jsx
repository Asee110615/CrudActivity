import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <Box sx={{width: 300, minHeight: '100%', boxShadow:3}}>
        <Box sx={{display:'flex', flexDirection: 'column', justifyContent:"center", alignItems: 'center', py: 4}}>

            <Box sx={{display:'flex', justifyContent:"center", alignItems: 'center', p: 4, border: 1}}>
                <Typography>CRUD PRACTICE</Typography>
            </Box>
            
            <Box sx={{pt:5, width: '100%', }}>
                <List>
                    <Link to="user/ace">
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Ace" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    
                    <Link to="user/cruz">
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Cruz" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    

                    <Link to="user/russel">
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Russel" />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to="user/rensteve">
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Rensteve" />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to="user/zoren">
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Zoren" />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                </List>
            </Box>
        </Box>
    </Box>
  )
}

export default Sidebar