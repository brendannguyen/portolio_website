import { AppBar, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <AppBar position="static" >
            <Toolbar disableGutters>
            <ul>
                <NavLink to="/"><Typography color={"white"}>Home</Typography></NavLink>
                <NavLink to="/about">About</NavLink>
            </ul>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;