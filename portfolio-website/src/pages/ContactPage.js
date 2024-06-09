import { Box, Card, CardActions, Collapse, IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { styled } from '@mui/material/styles';
import { useRef, useState } from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useIsOverflow } from '../hooks/UseIsOverflow';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
}));

const ContactPage = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    const [expanded, setExpanded] = useState(false);

    // check for overflow, then set margin
    const gridRef = useRef();
    const isOverflow = useIsOverflow(gridRef);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const user = 'brendan.nguyen04';
    const site = 'gmail.com';

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ease: "linear", duration: 2}}
        >
            <Box display='flex' justifyContent='center' alignItems='center' zIndex={1} sx={{ flexGrow: 1 }} height={isTabletOrMobile ? '': '100vh'} marginTop={isTabletOrMobile ? (isPortrait ? '15vh' : '15vw'): (isOverflow ? '5em' : '')}>
                <Grid ref={gridRef} container spacing={2} maxWidth="80vw" maxHeight='100vh'>
                    <Grid>
                        <Card raised sx={{bgcolor: '#481E14', padding: '1em', '&:hover': {bgcolor: '#00224D'}, transition: 'background-color 1s'}}>
                            <Typography variant="h5" gutterBottom color="#F2613F"  textAlign="center" marginTop='0.5em'>Contact Me</Typography>
                            <Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center">
                                Contact me on LinkedIn or the email below
                            </Typography>
                            <CardActions sx={{ marginTop: '0.5em'}} disableSpacing>
                                <IconButton target="_blank" href='https://www.linkedin.com/in/brendan-nguyen-8894b7220/' sx={{color: 'white', borderColor: 'white', ":hover": {color: '#F2613F', borderColor: '#F2613F'}}} ><LinkedInIcon fontSize='large'/></IconButton>
                                <IconButton target="_blank" href='https://github.com/brendannguyen' sx={{color: 'white', borderColor: 'white', ":hover": {color: '#F2613F', borderColor: '#F2613F'}}} ><GitHubIcon fontSize='large'/></IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show email"
                                    sx={{color: 'white', borderColor: 'white', ":hover": {color: '#F2613F', borderColor: '#00224D'}}}
                                    >
                                    <ExpandMoreIcon fontSize='large'/>
                                    </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <Typography variant="h6" gutterBottom color="#F2613F"  textAlign="center" marginTop='0.5em'>Email</Typography>
                                <a class="email" href={'mailto:' + user + '@' + site} style={{textDecoration: 'none'}}><Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center" sx={{color: 'white', borderColor: 'white', ":hover": {color: '#F2613F', borderColor: '#00224D'}}}>{user + '@' + site}</Typography></a>
                            </Collapse>
                        </Card>
                    </Grid>
                </Grid> 
            </Box>
        </motion.div>
    )
}

export default ContactPage;