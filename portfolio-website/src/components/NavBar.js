import { AppBar, Box, Toolbar } from "@mui/material"
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <Box display="flex" alignItems="center" justifyContent="center" width="100%" padding="1vh">
                    <Link to="/" className="page-link" act >Home</Link>
                    <Link to="/about" className="page-link">About</Link>
                    <Link to="/contact" className="page-link">Contact</Link>
                    <Link to="/software" className="page-link">Software</Link>
                    <Link to="/filmmaking" className="page-link">Filmmaking</Link>
                    <Link to="/blog" className="page-link">Blog</Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;