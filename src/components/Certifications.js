
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import  Container  from '@mui/material/Container';
import Box from '@mui/material/Box';
const Certifications = () => {
  return (
    <Container>
         <Box sx={{ flexGrow: 1, paddingTop: '100px',paddingLeft: '50px',paddingBottom: '50px' }}>
        <Typography variant="h4" component="h1" sx={{textAlign: 'center', marginBottom: '0.7em'}}>MY certifications </Typography>
        </Box>
    <Timeline position="alternate">
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
       Oct 12, 2020
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary">
          <LaptopMacIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          Coursera (CalArts)
        </Typography>
        <Typography>Visual Elements of User Interface Design</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
      Oct 9, 2021
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary" variant="outlined">
          <LaptopMacIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          Coursera(Google Cloud)
        </Typography>
        <Typography>How Google does Machine Learning</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
       Jan 2022
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary">
          <LaptopMacIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          Jadu Fellowship Program (Microsoft)
        </Typography>
        <Typography>Front end Development</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
       April 17, 2022
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary" variant="outlined">
          <LaptopMacIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          Cognitive Class(IBM)
        </Typography>
        <Typography>Data Science 101</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
       JUL 30, 2022
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="success">
          <LaptopMacIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          DataCamp
        </Typography>
        <Typography>Introduction to Python</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
       AUG 04, 2022
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="success" variant="outlined">
          <LaptopMacIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          DataCamp
        </Typography>
        <Typography>Intermediate Python</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
       SEP 05, 2022
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="success">
          <LaptopMacIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          DataCamp
        </Typography>
        <Typography>Data Manipulation with pandas</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
       Dec 17, 2022
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="secondary">
          <LaptopMacIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          Coursera (Google)
        </Typography>
        <Typography>Foundations of User Experience (UX) Design</Typography>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
  </Container>
  )
}

export default Certifications
