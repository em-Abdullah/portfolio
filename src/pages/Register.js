import { TextField, Button, Container, Stack, Alert } from "@mui/material"
import { useMutation } from "@apollo/client"
import { gql } from "@apollo/client"
import { useNavigate } from "react-router-dom"
import { useForm } from "../utility/hooks"
import { useState } from "react"

const REGISTER_USER = gql`
    mutation Mutation($registerInput: RegisterInput) {
        registerUser(registerInput: $registerInput) {
            email
            username
        }
    }
`

const Register = (props) => {
    let navigate = useNavigate()
    const [errors, setErrors] = useState([])
    function registerUserCallback() {
        const { username, email, password } = values

        // Check if email and password are not empty
        if (
            username.trim() === "" ||
            email.trim() === "" ||
            password.trim() === ""
        ) {
            return setErrors([{ message: "Please fill in all fields" }])
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return setErrors([{ message: "Please enter a valid email" }])
        }
        console.log("registerUserCallback")
        registerUser()
    }
    const { onChange, onSubmit, values } = useForm(registerUserCallback, {
        username: "",
        email: "",
        password: "",
    })

    const [registerUser, { loading }] = useMutation(REGISTER_USER, {
        update(proxy, { data: { registerUser: userData } }) {
            navigate("/login")
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors)
        },
        variables: { registerInput: values },
    })
    return (
        <Container spacing={2} maxWidth="sm">
            <h3>Admin Register</h3>
            <Stack spacing={2} paddingBottom={2} paddingTop={10}>
                <TextField
                    label="AdminName"
                    name="username"
                    onChange={onChange}
                />
                <TextField label="Email" name="email" onChange={onChange} />
                <TextField
                    label="Password"
                    name="password"
                    onChange={onChange}
                />
            </Stack>
            {errors.map(function (error) {
                return <Alert severity="error">{error.message}</Alert>
            })}
            <Button variant="contained" onClick={onSubmit}>
                Register{" "}
            </Button>
        </Container>
    )
}

export default Register
