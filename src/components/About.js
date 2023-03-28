import { Grid, Typography,Container, Box, Link} from '@mui/material';
import myImage from 'D:/portfolio-website/src/assets/profile.jpeg';

const About = () => {
  return (
    <container>
    <Grid className='about' container spacing={2} sx ={{paddingTop: '100px',paddingLeft: '200px',gap: '50px'}}>
    <Grid item xs={12} sm={2}>
      <Box display="flex" alignItems="center">
        <img src={myImage} alt="" style={{ width: '120%', maxWidth: 500 }} />
      </Box>
    </Grid>
    <Grid item xs={12} sm={8}>
      <Box sx={{justifyContent:'center'}}>
        <Typography variant="h4" gutterBottom>About Me</Typography>
        <Typography variant="body1" sx={{lineHeight: 1.8, paddingBottom:'10px'}}>
          - Did my Graduation from <Link href="https://www.numl.edu.pk/" underline="none">
  NUML Islamabad
 </Link> in BSCS(Bechalors of Computer Science) in 2022
        </Typography>
        <Typography variant="body1" sx={{lineHeight: 1.8, paddingBottom:'10px'}}>
          - During my computer sciences degree, I have acquired key skills
including front end development, UI/UX   design and also acquired some
Python Rest api with flask and Data Sciences
        </Typography>
        <Typography variant="body1" sx={{lineHeight: 1.8, paddingBottom:'10px'}}>
          - Worked individually and as part of a team working in various projects
        </Typography>
        <Typography variant="body1" sx={{lineHeight: 1.8, paddingBottom:'10px'}}>
          - Doing freelancing for 2+ years in   UI/UX design (Fiverr)
        </Typography>
        <Typography variant="body1" sx={{lineHeight: 1.8, paddingBottom:'10px'}}>
          - Acquired leadership skills during my time as ambassador of  <Link href='https://www.techjuice.pk/get-trained-now-and-pay-later-jadu-wants-to-train-you-to-become-a-full-stack-developer-with-zero-upfront-cost/' underline='none'>JADU
Fellowship and mentorship program</Link>
        </Typography>
        <Typography variant="body1" sx={{lineHeight: 1.8}}>
          - Was a Creative Team member of <Link href="https://gdsc.community.dev/" underline='none'>
            GDSC NUML
            </Link>
        </Typography>


      </Box>
    </Grid>
  </Grid>
  </container>
  )
}

export default About
