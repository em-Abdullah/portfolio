import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Send"
import FormControl from "@mui/material/FormControl"
import { Container } from "@mui/system"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import MailIcon from "@mui/icons-material/Mail"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import Link from "@mui/material/Link"
import { useState } from "react"
import validator from "validator"
import { useMutation } from "@apollo/client"
import { ADD_COMMENT } from "../mutations/commentMutations"
import Alert from "@mui/material/Alert"

// import Select from "react-select";

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState({})

    const [createContact, { loading, error }] = useMutation(ADD_COMMENT)

    // const Contact = ({onSave, user = {}}) => {
    //   const [userData,setUserData] = useState(user);
    //   const[errors, setErrors] = useState({});
    //   const {name, email, comment} = userData;

    // const validateData = () => {
    //   let errors = {};
    //   if (name.length === 0) {
    //     errors.name = 'Name is required';
    //   }
    //   if (!validator.isEmail(email)) {
    //     errors.email = 'Email is invalid';
    //   }
    //   if (comment.length === 0) {
    //     errors.comment = 'comment missing';
    //   }
    //   setErrors(errors);
    // };
    //   const handleChange = (event) => {
    //     const {name,value} = event.target;
    //     setUserData( (prevData) =>({...prevData, [name]: value}));

    //   };
    //   const handleSave = () => {
    //     validateData();
    //     if (Object.keys(errors).length === 0) {
    //        console.log(userData);
    //       onSave(userData);
    //     } else {
    //       console.log(errors);
    //     }

    //     setErrors(errors);
    //     console.log(errors);
    //     onSave(userData);
    //   };
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, comment)
        let errors = {}
        if (name.trim() === "") {
            errors.name = "Name is required"
        }

        if (email.trim() === "") {
            errors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Invalid email address"
        }

        if (comment.trim() === "") {
            errors.comment = "Comment is required"
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors)
            return
        }

        createContact({
            variables: {
                contactInput: {
                    name,
                    email,
                    comment,
                },
            },
        })
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box
                sx={{
                    flexGrow: 1,
                    paddingTop: "80px",
                    paddingLeft: "50px",
                    paddingBottom: "30px",
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{ textAlign: "center", marginBottom: "0.7em" }}
                >
                    Contact me{" "}
                </Typography>
            </Box>
            <form onSubmit={onSubmit}>
                <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                    <Grid
                        item
                        xs={8}
                        container
                        justify="flex-start"
                        justifyContent="center"
                        alignItems="center"
                        width={"100%"}
                        spacing={2}
                    >
                        <Container>
                            <Box sx={{ paddingLeft: "30px" }}>
                                {/* <FormControl fullWidth sx={{ m: 2 }}> */}

                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    label="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    variant="outlined"
                                    sx={{
                                        alignItems: "center",
                                        justifyContent: "center",
                                        display: "flex",
                                        width: "70%",
                                        marginBottom: "20px",
                                    }}
                                    error={errors.name ? true : false}
                                    helperText={errors.name}
                                />
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    label="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    variant="outlined"
                                    sx={{
                                        alignItems: "center",
                                        display: "flex",
                                        width: "70%",
                                        marginBottom: "20px",
                                    }}
                                    error={errors.email ? true : false}
                                    helperText={errors.email}
                                />
                                <TextField
                                    fullWidth
                                    name="message"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    sx={{
                                        alignItems: "center",
                                        display: "flex",
                                        width: "70%",
                                        marginBottom: "20px",
                                    }}
                                    id="outlined-multiline-static"
                                    label="Drop a Hi! "
                                    multiline
                                    rows={4}
                                    error={errors.comment ? true : false}
                                    helperText={errors.comment}
                                />
                            </Box>
                        </Container>
                        <Container>
                            <Box sx={{ paddingLeft: "30px" }}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    data-bs-dismiss="modal"
                                    endIcon={<SendIcon />}
                                    onClick={() => ({
                                        variables: {
                                            comment: comment,
                                            email: email,
                                            name: name,
                                        },
                                    })}
                                    sx={{ alignItems: "end", display: "flex" }}
                                >
                                    Send
                                </Button>
                                {/* </FormControl> */}
                            </Box>
                        </Container>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <LocalPhoneIcon />
                            <Typography variant="body1">
                                +92304-5408173
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            alignItems="center"
                            gap={1}
                            paddingTop="10px"
                        >
                            <MailIcon />
                            <Typography variant="body1">
                                abdullahhiteccs@gmail.com
                            </Typography>
                        </Stack>

                        <Stack
                            direction="row"
                            alignItems="center"
                            gap={1}
                            paddingTop="40px"
                        >
                            <GitHubIcon />
                            <Typography
                                variant="body1"
                                noWrap
                                component={Link}
                                to="/"
                                color="textPrimary"
                            >
                                <Link
                                    href="https://github.com/em-Abdullah"
                                    underline="none"
                                >
                                    Github
                                </Link>
                            </Typography>
                            {/* <Typography variant="body1">https://github.com/em-Abdullah</Typography> */}
                        </Stack>
                        <Stack
                            direction="row"
                            alignItems="center"
                            gap={1}
                            paddingTop="10px"
                        >
                            <LinkedInIcon />
                            <Typography
                                variant="body1"
                                noWrap
                                component={Link}
                                to="/"
                                color="textPrimary"
                            >
                                <Link
                                    href="https://linkedin.com/in/muhammad-abdullah-tenno"
                                    underline="none"
                                >
                                    LinkedIn
                                </Link>
                            </Typography>
                            {/* <Typography variant="body1">https://linkedin.com/in/muhammad-abdullah-tenno/</Typography> */}
                        </Stack>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

export default Contact
