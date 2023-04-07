import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material"
import { Link, Outlet } from "react-router-dom"

const NavbarLogout = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                    sx={{ bgcolor: "#00012a", height: "55px" }}
                >
                    <Toolbar>
                        <Typography variant="h5" component="div">
                            <Link to="/" target="_blank" rel="noreferrer">
                                <img
                                    src="/react.png"
                                    alt="Homepage"
                                    width="50"
                                    height="50"
                                ></img>
                            </Link>
                        </Typography>
                        <Box
                            alignItems="right"
                            sx={{ flexGrow: 1, textAlign: "right" }}
                        >
                            <Link
                                to="/login"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                    marginRight: "10px",
                                }}
                            >
                                Log Out{" "}
                            </Link>
                            
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Outlet />
        </>
    )
}

export default NavbarLogout