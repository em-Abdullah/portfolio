
import { Button, Typography,Container, Box} from '@mui/material';
import background from 'D:/portfolio-website/src/assets/background.svg';
import CV from 'D:/portfolio-website/src/assets/CV.pdf'


const Main = () => {
  return (
   
<Box sx = {{p:16, backgroundImage: `url(${background})`,justifyContent:"center"}}>
    <Typography variant="h2" component="h1" sx={{textAlign: 'center',color: 'white'}}>Hi! I'm Muhammad Abdullah </Typography>
    <Typography variant="h5" component="h2" sx={{textAlign: 'center',color: 'white'}}>React Developer and UI/UX designer </Typography>
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
      <Button href={CV} target="_blank" rel="noreferrer" variant="contained" color="info">
        Download CV
      </Button>
    </div>


    
</Box>

  )
}

export default Main
