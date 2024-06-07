import { AppBar, Box, Drawer, IconButton, List, ListItem, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const MobileNavBar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    return (
        <div>
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <Box display="flex" alignItems="center" justifyContent="center" width="100%" padding="1vh">
                    <IconButton className="page-link-mobile" onClick={toggleDrawer(true)} aria-label="menu"><MenuIcon fontSize="large" style={{color: 'white'}}/></IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        <Drawer open={open} onClose={toggleDrawer(false)} PaperProps={{style: {backgroundColor: 'transparent', boxShadow: 'none',}}}>
            <Box role="presentation" sx={{backgroundColor: 'transparent'}} onClick={toggleDrawer(false)}>
                <List>
                    <ListItem><Link to="/" className="page-link-mobile" act >Home</Link></ListItem>
                    <ListItem><Link to="/about" className="page-link-mobile">About</Link></ListItem>
                    <ListItem><Link to="/contact" className="page-link-mobile">Contact</Link></ListItem>
                    <ListItem><Link to="/software" className="page-link-mobile">Software</Link></ListItem>
                    <ListItem><Link to="/filmmaking" className="page-link-mobile">Filmmaking</Link></ListItem>
                    <ListItem><Link to="/blog" className="page-link-mobile">Blog</Link></ListItem>
                </List>
                

            </Box>
        </Drawer>
        </div>
    )
}

export default MobileNavBar;