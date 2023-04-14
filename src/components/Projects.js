
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { CardActionArea } from "@mui/material"
import "../App.css"
import projectImage1 from "D:/portfolio-website/src/assets/project1.png"
import projectImage2 from "D:/portfolio-website/src/assets/project2.png"
import projectImage3 from "D:/portfolio-website/src/assets/project3.png"
import Design1 from "D:/portfolio-website/src/assets/Design1.png"
import Design2 from "D:/portfolio-website/src/assets/Design2.png"
import Design4 from "D:/portfolio-website/src/assets/Design4.png"

const Projects = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, paddingTop: "150px", paddingLeft: "50px" }}>
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{ textAlign: "left", marginBottom: "0.7em" }}
                >
                    MY PROJECTS{" "}
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    <Grid item xs={12} sm={12} md={4}>
                        <Card
                            className="project-card"
                            sx={{ maxWidth: 345, height: 450 }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: 220 }}
                                    component="img"
                                    image={projectImage1}
                                    alt="project1"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        SEEK SEO (FYP)
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Built with React and SCSS on front end
                                        and on back end Python is being used to
                                        scrape the website and utilized via Rest
                                        api. Website is built as a single page
                                        application (SPA) with sections for
                                        displaying SEO information warnings
                                        suggestion
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Card
                            className="project-card"
                            sx={{ maxWidth: 345, height: 450 }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: 220 }}
                                    component="img"
                                    image={projectImage2}
                                    alt="project 2"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Movies Database
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Built with react as front end and TMDB
                                        (the movies database) api as backend.
                                        Homepage shows popular movies, their
                                        ratings and description. User can also
                                        search any movie through the search bar
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Card
                            className="project-card"
                            sx={{ maxWidth: 345, height: 450 }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: 220 }}
                                    component="img"
                                    image={projectImage3}
                                    alt="Project 3 "
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Chat App
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Built with react on front end and
                                        firebase is used for back end. User can
                                        login using google account and can chat
                                        in a group.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ flexGrow: 1, paddingTop: "80px", paddingLeft: "50px" }}>
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{ textAlign: "left", marginBottom: "0.7em" }}
                >
                    MY UIUX DESIGNS{" "}
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    <Grid item xs={12} sm={12} md={4}>
                        <Card
                            className="project-card"
                            sx={{ maxWidth: 345, height: 400 }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: 220 }}
                                    component="img"
                                    image={Design1}
                                    alt="Design 1"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Clothing Brand Website
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Card
                            className="project-card"
                            sx={{ maxWidth: 345, height: 400 }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: 220 }}
                                    component="img"
                                    image={Design2}
                                    alt="Design 2"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Book App Design
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Card
                            className="project-card"
                            sx={{ maxWidth: 345, height: 400 }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: 220 }}
                                    component="img"
                                    image={Design4}
                                    alt="Design 3 "
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Movies App Design
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Projects
