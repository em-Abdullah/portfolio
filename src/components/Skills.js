// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// // import skillImg from 'D:/portfolio-website/src/assets/js.png';
// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: 'html',
//     img: '/js.png',
//   },
//   {
//     label: 'Bird',
//     img:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bali, Indonesia',
//     img:
//       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
//   },
//   {
//     label: 'Goč, Serbia',
//     img:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
// ];

// function Skills() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

// return (

// <Box sx={{ maxWidth: 400, flexGrow: 1, justifyContent:"center", paddingLeft:'500px' }}>
//   <Paper
//     square
//     elevation={0}
//     sx={{
//       display: 'flex',
//       alignItems: 'center',
//       height: 50,
//       pl: 2,
//       bgcolor: 'background.default',
//     }}
//   >
//   </Paper>
//   <AutoPlaySwipeableViews
//     axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//     index={activeStep}
//     onChangeIndex={handleStepChange}
//     enableMouseEvents
//   >
//     {images.map((step, index) => (
//       <div key={step.label}>
//         {Math.abs(activeStep - index) <= 2 ? (
//           <Box
//             component="img"
//             sx={{
//               height: 255,
//               display: 'block',
//               maxWidth: 400,
//               overflow: 'hidden',
//               width: '100%',
//             }}
//             src={step.img}
//             alt={step.label}
//           />
//         ) : null}
//       </div>
//     ))}
//   </AutoPlaySwipeableViews>
//   <MobileStepper
//     steps={maxSteps}
//     position="static"
//     activeStep={activeStep}
//     nextButton={
//       <Button
//         size="small"
//         onClick={handleNext}
//         disabled={activeStep === maxSteps - 1}
//       >
//         Next
//         {theme.direction === 'rtl' ? (
//           <KeyboardArrowLeft />
//         ) : (
//           <KeyboardArrowRight />
//         )}
//       </Button>
//     }
//     backButton={
//       <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//         {theme.direction === 'rtl' ? (
//           <KeyboardArrowRight />
//         ) : (
//           <KeyboardArrowLeft />
//         )}
//         Back
//       </Button>
//     }
//   />
// </Box>
//   );
// }

// export default Skills;
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { Typography } from "@mui/material"
// import "./Carousel";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        //slidesToSlide: 2// optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
}

const Skills = () => {
    return (
        <Container>
            <Box
                sx={{
                    flexGrow: 1,
                    paddingTop: "100px",
                    paddingLeft: "50px",
                    paddingBottom: "50px",
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{ textAlign: "center", marginBottom: "0.7em" }}
                >
                    MY Skills
                </Typography>
            </Box>

            <div
                style={{
                    marginLeft: "80px",
                    marginRight: "80px",
                    textAlign: "center",
                    paddingTop: "100px",
                }}
            >
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass="carousel-item-padding-200-px"
                    rtl={true}
                >
                    <div>
                        <img
                            src="/html.png"
                            width="250"
                            height="200"
                            alt="html"
                        />
                    </div>
                    <div>
                        <img
                            src="/css.png"
                            width="250"
                            height="200"
                            alt="css"
                        />
                    </div>
                    <div>
                        <img
                            src="/react.png"
                            width="250"
                            height="200"
                            alt="react"
                        />
                    </div>
                    <div>
                        <img
                            src="/js.png"
                            width="250"
                            height="200"
                            alt="JavaScript"
                        />
                    </div>

                    <div>
                        <img
                            src="/node1.png"
                            width="250"
                            height="200"
                            alt="node"
                        />
                    </div>
                    <div>
                        <img
                            src="/python.png"
                            width="250"
                            height="200"
                            alt="python"
                        />
                    </div>
                    <div>
                        <img
                            src="/figma.png"
                            width="200"
                            height="200"
                            alt="figma"
                        />
                    </div>
                    <div>
                        <img
                            src="/apollo.png"
                            width="200"
                            height="200"
                            alt="apollo"
                        />
                    </div>
                </Carousel>
            </div>
        </Container>
    )
}

export default Skills
