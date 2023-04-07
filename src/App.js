import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./components/Navbar"
import NavbarLogout from "./components/NavbarLogout"
import CommentForm from "./pages/CommentForm"

import "./App.css"

function App() {
    return (
        <div>
            <Routes>
                <Route element={<Navbar />}>
                    <Route path="" element={<Homepage />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route element={<NavbarLogout />}>
                    <Route path="/commentsform" element={<CommentForm />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
