import { Grid, Typography, Container, Box, Link } from "@mui/material"
import myImage from "D:/portfolio-website/src/assets/profile.jpeg"

const About = () => {
    return (
        <container>
            <Grid
                className="about"
                container
                spacing={2}
                sx={{ paddingTop: "100px", paddingLeft: "200px", gap: "50px" }}
            >
                <Grid item xs={12} sm={2}>
                    <Box display="flex" alignItems="center">
                        <img
                            src={myImage}
                            alt=""
                            style={{ width: "120%", maxWidth: 500 }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Box sx={{ justifyContent: "center" }}>
                        <Typography variant="h4" gutterBottom>
                            About Me
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ lineHeight: 1.5, paddingBottom: "10px" }}
                        >
                            - Did my Graduation from{" "}
                            <Link
                                href="https://www.numl.edu.pk/"
                                underline="none"
                            >
                                NUML Islamabad
                            </Link>{" "}
                            in BSCS(Bechalors of Computer Science) in 2022
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ lineHeight: 1.5, paddingBottom: "10px" }}
                        >
                            - Skilled software developer with a passion for
                            front-end development and UI/UX designing
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ lineHeight: 1.5, paddingBottom: "10px" }}
                        >
                            - I have extensive experience in building web
                            applications using React, GraphQL, Node, Apollo, and
                            Express
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ lineHeight: 1.5, paddingBottom: "10px" }}
                        >
                            - My expertise also includes developing REST APIs
                            using Flask in Python and working with data science
                            concepts to analyze and visualize data
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ lineHeight: 1.5, paddingBottom: "10px" }}
                        >
                            - Acquired leadership skills during my time as
                            ambassador of{" "}
                            <Link
                                href="https://www.techjuice.pk/get-trained-now-and-pay-later-jadu-wants-to-train-you-to-become-a-full-stack-developer-with-zero-upfront-cost/"
                                underline="none"
                            >
                                JADU Fellowship and mentorship program
                            </Link>
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            - Was a Creative Team member of{" "}
                            <Link
                                href="https://gdsc.community.dev/"
                                underline="none"
                            >
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
