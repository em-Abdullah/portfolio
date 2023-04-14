import { TextField, Button, Container, Stack, Alert } from "@mui/material"
import { useMutation } from "@apollo/client"
import { gql } from "@apollo/client"
import { useNavigate } from "react-router-dom"
import { useForm } from "../utility/hooks"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setUser } from "../redux/slices/userSlice"

const LOGIN_USER = gql`
    mutation login($loginInput: LoginInput) {
        loginUser(loginInput: $loginInput) {
            email
            password
        }
    }
`

const Login = (props) => {
    let navigate = useNavigate()
    const [errors, setErrors] = useState([])
    function loginUserCallback() {
        const { email, password } = values

        // Check if email and password are not empty
        if (email.trim() === "" || password.trim() === "") {
            return setErrors([{ message: "Please fill in all fields" }])
        }

        // Call the loginUser mutation if there are no errors
        loginUser()
    }

    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        email: "",
        password: "",
    })
    const dispatch = useDispatch()
    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(proxy, { data: { loginUser: userData } }) {
            // localStorage.setItem('isLoggedIn', true);
            dispatch(
                setUser({
                    email: userData.email,
                })
            )
            navigate("/commentsform")
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors)
        },
        variables: { loginInput: values },
    })

    // useDistptch--> save, useSelect--> getter
    return (
        <Container spacing={2} maxWidth="sm">
            <h3>Admin Login</h3>
            <Stack spacing={2} paddingBottom={2} paddingTop={10}>
                <TextField label="Email" name="email" onChange={onChange} />
                <TextField
                    type="password"
                    label="Password"
                    name="password"
                    onChange={onChange}
                />
            </Stack>
            {errors.map(function (error) {
                return <Alert severity="error">{error.message}</Alert>
            })}
            <Button variant="contained" onClick={onSubmit}>
                Login{" "}
            </Button>
        </Container>
    )
}

export default Login
