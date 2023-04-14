import { Grid, Typography, Box, Stack, Button } from "@mui/material"
import Divider from "@mui/material/Divider"

const styles = {
    textStroke: {
        webkitTextFillColor: "transparent",
        WebkitTextStroke: "2px white", // Apply -webkit-text-stroke property
        marginRight: "11px",
        fontSize: "5.5rem",
        zIndex: 9,
        position: "relative",
    },
    quoteContainer: {
        textAlign: "center",
    },
    quote: {
        fontFamily: "Rokkitt, serif",

        fontSize: "16px",
        lineHeight: 1.5,
        marginBottom: "1rem",
        textAlign: "left",
        color: "#E5E5E5",
        letterSpacing: "2%",

        marginLeft: "122px",
        marginRight: "98px",
        marginTop: "26px",
    },
    author: {
        fontFamily: "Rokkitt, serif",
        fontSize: "13px",
        color: "#E5E5E5",
        textAlign: "left",
        marginLeft: "122px",
        letterSpacing: "2%",
    },

    motivation: {
        fontFamily: "Rokkitt, serif",

        fontSize: "18px",
        lineHeight: 1.5,
        marginBottom: "1rem",
        textAlign: "center",
        color: "#E5E5E5",
        letterSpacing: "2%",

        marginLeft: "110px",
        marginRight: "98px",
        marginTop: "40px",
        fontWeight: "medium",
    },
    email: {
        fontFamily: "Roboto",

        fontSize: "18px",
        lineHeight: 1.8,

        textAlign: "center",
        color: "#BCB0B0",
        letterSpacing: "2%",
        align: "center",

        // position: "absolute",
        marginTop: "100px",
        // display: "flex",
        // alignitems: "flex-end",

        // aligntext: "center",

        // marginLeft: "110px",
        // marginRight: "98px",

        fontWeight: "medium",
    },

    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: 'url("/Design.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        marginLeft: "0px",
        marginTop: "0px",
    },
    grid: {
        margin: "auto",
        padding: 20,
        paddingLeft: 50,
        paddingRight: 60,
        marginTop: "70px",
    },
    grid2: {
        padding: 20,
        paddingTop: 1,
        paddingLeft: 50,
        paddingRight: 60,
        marginTop: "-50px",
    },
    box: {
        boxSizing: "border-box",

        position: "absolute",
        bottom: "130px",
        right: "0px",
        width: 600,
        height: 400,
        borderWidth: "120px 60px 120px 120px",

        borderStyle: "solid",
        borderColor: "#102D0F",
        border: "120px 60px 120px 120px solid transparent",
        borderImage:
            //
            "linear-gradient(63deg, rgba(18,111,18,1) 0%, rgba(16,45,15,1) 22%)",
        borderImageSlice: "1",
        transform: "rotate(-0.03deg)",
        opacity: 0.7,
        zIndex: 1,
    },
}

function Design() {
    return (
        <>
            <Grid
                container
                spacing={2}
                sx={{ width: "100%" }}
                style={styles.container}
            >
                <Grid item xs={12} md={6} sx={{ position: "relative" }}>
                    <div style={styles.grid}>
                        <Typography
                            variant="h5"
                            align="center"
                            style={{ color: "green" }}
                            sx={{ fontWeight: "bold" }}
                        >
                            HANDOUT
                        </Typography>
                        <Divider
                            sx={{
                                marginLeft: "25%",
                                marginRight: "25%",
                                marginTop: "10px",
                                marginBottom: "10px",
                            }}
                            style={{
                                background: "#7D7E6F",
                            }}
                            variant="middle"
                        />

                        <Box style={styles.quoteContainer}>
                            <Typography variant="body1" style={styles.quote}>
                                "For in the true nature of things, if we rightly
                                consider, every green tree is far more glorious
                                than if it were made of gold and silver."
                            </Typography>
                            <Typography variant="body1" style={styles.author}>
                                — Martin Luther
                            </Typography>
                            <Typography
                                variant="body1"
                                style={styles.motivation}
                            >
                                Your little efforts can give you a better
                                ecosystem.
                            </Typography>
                            <Stack
                                spacing={18}
                                direction="row"
                                sx={{
                                    marginLeft: "110px",
                                    marginTop: "40px",
                                    marginRight: "98px",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    style={{
                                        backgroundColor: "#E5E5E5",
                                        color: "#0E2E0B",
                                    }}
                                >
                                    Donate
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: "white",
                                        borderColor: "white",

                                        "&:hover": {
                                            borderColor: "white", // Update hover border color to white
                                        },
                                    }}
                                    // style={{
                                    //     color: "#E5E5E5",
                                    // }}
                                >
                                    Share
                                </Button>
                            </Stack>
                            <Typography style={styles.email}>
                                Email us on <br /> plantlife@gmail.com
                            </Typography>
                        </Box>
                    </div>
                    {/* <Typography style={styles.email}>
                    Email us on <br /> plantlife@gmail.com
                </Typography> */}
                </Grid>
                <Grid item xs={12} md={6} paddingLeft="0px">
                    <div style={styles.grid2}>
                        <Typography
                            variant="h1"
                            align="right"
                            style={styles.textStroke}
                            sx={{ fontWeight: "bold" }}
                        >
                            <span
                                style={{
                                    color: "white",

                                    fontSize: "5.5rem",
                                    textStroke: "none",
                                    fontWeight: "bold",
                                    fontFamily: "Roboto",
                                    webkitTextFillColor: "white",
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    component="span"
                                    sx={{ fontSize: "5.5rem" }}
                                >
                                    HELP{" "}
                                </Typography>
                            </span>
                            US <br />
                            TO
                            <br /> HELP{" "}
                            <span
                                style={{
                                    color: "white",
                                    fontFamily: "Roboto",
                                    fontSize: "5.5rem",
                                    textStroke: "none",
                                    webkitTextFillColor: "white",
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    component="span"
                                    sx={{ fontSize: "5.5rem" }}
                                >
                                    THEM
                                </Typography>
                            </span>
                        </Typography>
                    </div>
                    <box style={styles.box}></box>
                </Grid>
            </Grid>
        </>
    )
}

export default Design
