import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FormControl from '@mui/material/FormControl';
import { Container } from '@mui/system';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';



const Contact = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
         <Box sx={{ flexGrow: 1, paddingTop: '80px',paddingLeft: '50px',paddingBottom: '30px' }}>
        <Typography variant="h4" component="h1" sx={{textAlign: 'center', marginBottom: '0.7em'}}>Contact me </Typography>
        </Box>
    <Grid container spacing={2}sx={{justifyContent:"center"}} >
      <Grid item xs={8}
      container
      justify="flex-start"
      justifyContent ="center"
      alignItems="center"
      width={'100%'}
      spacing={2}>
       <Container>
        <Box sx={{paddingLeft:'30px'}}>
         
        {/* <FormControl fullWidth sx={{ m: 2 }}> */}
        <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" sx ={{alignItems:'center',justifyContent:"center",display:'flex', width: '70%',marginBottom:'20px' }}/>
        <TextField fullWidth id="outlined-basic" label="Email" variant="outlined"sx ={{alignItems:'center',display:'flex',width: '70%', marginBottom:'20px'}} />
        <TextField fullWidth sx={{alignItems:'center',display:'flex',width: '70%', marginBottom:'20px'}}
          id="outlined-multiline-static"
          label="Drop a Hi! "
          multiline
          rows={4}
          
        />
        </Box>
        </Container>
        <Container>
        <Box sx={{paddingLeft:'30px'}}>
        <Button variant="contained" endIcon={<SendIcon />} sx ={{alignItems:'end',display:'flex'}}>
             Send
             </Button>
             {/* </FormControl> */}
             </Box>
             </Container>



        
      </Grid>
      <Grid item xs={4}>
      <Stack direction="row" alignItems="center" gap={1}>
  <LocalPhoneIcon />
  <Typography variant="body1">+92304-5408173</Typography>
</Stack>
<Stack direction="row" alignItems="center" gap={1} paddingTop = '10px'>
  <MailIcon />
  <Typography variant="body1">abdullahhiteccs@gmail.com</Typography>
</Stack>
       
<Stack direction="row" alignItems="center" gap={1} paddingTop = '40px'>
 <GitHubIcon/>
 <Typography
 
 variant="body1"
 noWrap
 component={Link}
 to="/"
 color="textPrimary"
>
 <Link href="https://github.com/em-Abdullah" underline="none">
  Github
 </Link>
</Typography>
  {/* <Typography variant="body1">https://github.com/em-Abdullah</Typography> */}
</Stack>
<Stack direction="row" alignItems="center" gap={1} paddingTop = '10px'>
 <LinkedInIcon/>
 <Typography
 
  variant="body1"
  noWrap
  component={Link}
  to="/"
  color="textPrimary"
>
  <Link href="https://linkedin.com/in/muhammad-abdullah-tenno" underline="none">
   LinkedIn
  </Link>
</Typography>
  {/* <Typography variant="body1">https://linkedin.com/in/muhammad-abdullah-tenno/</Typography> */}
</Stack>
      </Grid>
    </Grid>
  </Box>

  
  
  )
}

export default Contact