import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {NavLink} from "react-router-dom";

export default function Navbar()  {
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
                    <Button color="inherit"> <NavLink to={"/"}>Homepage </NavLink></Button>
                    <Button color="inherit"> <NavLink to={"/jobbs"}>New job </NavLink></Button>
                    <Button color="inherit"> <NavLink to={"/login"}>Login</NavLink></Button>
                    <Button color="inherit"> <NavLink to={"/profile"}>Profile</NavLink></Button>


                </Toolbar>
            </AppBar>
        </Box>
    )
}