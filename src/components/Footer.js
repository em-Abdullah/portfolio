import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { color } from '@mui/system';

const Footer = () => {
  return (
    <Paper sx={{marginTop: 'calc(10% + 60px)',
    width: '100%',
    backgroundColor: 'lightblue',
    bottom: 0,
    width: '100%',
 
    }} component="footer" square variant="outlined">
      <Container maxWidth="lg" bg = 'primary-light'>
       
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          
          }}
        >
          <Typography variant="caption" color="initial">
            Made by Muhammad Abdullah
          </Typography>
        </Box>
      </Container>
    </Paper>

  )
}

export default Footer
