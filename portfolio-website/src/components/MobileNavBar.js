import { AppBar, Box, Drawer, IconButton, List, ListItem, Toolbar, useScrollTrigger } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './NavBar.css'

const MobileNavBar = () => {
    const [open, setOpen] = useState(false);

    let menuTitle = useLocation().pathname;
    if (menuTitle === '/') menuTitle = 'Home';
    else {
        menuTitle = menuTitle.split('/')[1];
        menuTitle = menuTitle[0].toUpperCase() + menuTitle.slice(1);
    }

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const isScroll = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return (
        <div>
        <AppBar position="fixed" style={{backgroundColor: isScroll ? '#0C0C0C' : 'transparent', transition: '0.2s'}} elevation={isScroll ? 5: 0}>
            <Toolbar>
                <Box display="flex" alignItems="center" justifyContent="center" width="100%" padding="1vh" className="page-link-mobile">
                    <IconButton className="page-link-mobile" onClick={toggleDrawer(true)} aria-label="menu"><MenuIcon fontSize="large" style={{color: 'white'}}/></IconButton>
                    {menuTitle}
                </Box>
            </Toolbar>
        </AppBar>
        <Drawer open={open} onClose={toggleDrawer(false)} PaperProps={{style: {backgroundColor: 'transparent', boxShadow: 'none',}}}>
            <Box role="presentation" sx={{backgroundColor: 'transparent'}} onClick={toggleDrawer(false)}>
                <List>
                    <ListItem><Link to="/" className="page-link-mobile">Home</Link></ListItem>
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