import React, {useEffect} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {NavLink, useNavigate} from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import {useCookies} from "react-cookie"; // Import the CSS file for styles

export default function Navbar()  {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const navigate = useNavigate();

    const logout = () =>{
        removeCookie("token");
        removeCookie("category");
        navigate("/");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Mind Hack
                    </Typography>
                    <Button color="inherit"> <NavLink to={"/job"}>New job </NavLink></Button>
                    <Button color="inherit"> <NavLink to={"/"}>Home page </NavLink></Button>
                    <Button color="inherit"> <NavLink to={"/profile"}>Profile</NavLink></Button>
                    {cookies.category === "employer" || cookies.category === "admin" && <Button color="inherit"> <NavLink to={"/employer_post"}>Employee post</NavLink></Button>}
                    {/*<Button color="inherit"> <NavLink to={"/Appp"}>Appp</NavLink></Button>*/}
                    {cookies.category === "admin" && <Button color="inherit"> <NavLink to={"/admin_manage"}>AdManage</NavLink></Button>}
                    {cookies.token ? <Button color="inherit" onClick={logout}>Logout</Button> : <Button color="inherit"> <NavLink to={"/login"}>Login</NavLink></Button> }

                </Toolbar>
            </AppBar>
        </Box>
    )
}