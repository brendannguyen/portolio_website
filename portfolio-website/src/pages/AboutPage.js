import { Box, Button, Card, CardActions, CardMedia, List, ListItem, ListItemIcon, ListItemText, Skeleton, Stack, Typography, Divider, IconButton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import EngineeringIcon from '@mui/icons-material/Engineering';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const AboutPage = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ease: "linear", duration: 2}}
        >
            <Box display='flex' justifyContent='center' alignItems='center' zIndex={1} sx={{ flexGrow: 1 }} height={isTabletOrMobile ? '': '100vh'} marginTop={isTabletOrMobile ? (isPortrait ? '10vh' : '10vw'): ''}>
                <Grid container spacing={2} maxWidth="80vw">
                    <Grid xs={isTabletOrMobile ? 12 : 6 }>
                        <Card raised sx={{bgcolor: '#00224D', padding: '1em', '&:hover': {bgcolor: '#481E14' }, transition: 'background-color 1s'}}>
                            <Typography variant="h5" gutterBottom color="#F2613F"  textAlign="center" marginTop='0.5em'>About Me</Typography>
                            <Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center">
                                I am currently a third year software engineering student at Monash University with a passion for technology and programming, driven to continuously explore the tech space, and learn and develop as a person and as a software engineer.
                            </Typography>
                            <Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center">
                                I have experiences in the sports media industry and in the retail industry which has taught me valuable lessons and has helped me to develop my collaborating skills to output a product or service that is effective and of as high quality as possible. I am always eager to learn new skills and gain new experiences, so please feel free to contact me relating to potential opportunities in software and filmmaking.
                            </Typography>
                            <Typography variant="h6" color="#F2613F"  textAlign="center" marginTop='0.5em'>Qualifications</Typography>
                            <List sx={{textAlign: 'center'}}>
                                <ListItem sx={{justifyContent: 'center'}}>
                                    <ListItemIcon sx={{color: "#F2613F"}}><EngineeringIcon/></ListItemIcon>
                                    <Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center" margin={0}>[2022 - 2025] Bachelor of Software Engineering (Honours)</Typography>
                                </ListItem>
                                <ListItem sx={{justifyContent: 'center'}}>
                                    <ListItemIcon sx={{color: "#F2613F"}}><VideocamIcon/></ListItemIcon>
                                    <Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center" margin={0}>Bachelor of Communication (Media) specialising in Cinema Studies</Typography>
                                </ListItem>
                                <ListItem sx={{justifyContent: 'center'}}>
                                    <ListItemIcon sx={{color: "#F2613F"}}><ArchitectureIcon/></ListItemIcon>
                                    <Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center" margin={0}>CERT IV Subset - Building Design Drafting</Typography>
                                </ListItem>
                            </List>
                        </Card>
                    </Grid>
                    <Grid xs={isTabletOrMobile ? 12 : 6 }>
                        <Stack spacing={2}>
                        <Card raised sx={{bgcolor: '#00224D', padding: '1em', '&:hover': {bgcolor: '#481E14'}, transition: 'background-color 1s'}}>
                            <Typography variant="h5" gutterBottom color="#F2613F"  textAlign="center" marginTop='0.5em'>Skills & Proficiencies</Typography>
                            <Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center">
                                Java, JavaScript, React, CSS, HTML, C, C++, Python, Adobe Premiere Pro, Adobe Illustrator, Microsoft Office, Google SketchUp, Pro Tools, MATLAB, Android Studio, Git, GitHub, Unreal Engine 5, MIPS Assembly Code
                            </Typography>
                            <Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center">
                                Drafting, Production Assistance, Programming, Collaborating, Teamwork, Customer Service, Sales, Editing, Setting up camera equipment, analysing and discussing film, adequate writing and mathematic skills
                            </Typography>
                        </Card>
                        <Card raised sx={{bgcolor: '#00224D', padding: '1em', '&:hover': {bgcolor: '#481E14'}, transition: 'background-color 1s'}}>
                            <Typography variant="h5" gutterBottom color="#F2613F"  textAlign="center" marginTop='0.5em'>Interests</Typography>
                            <Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center">
                                Meeting people of similar interests, Films, Gaming, Sports, Football (soccer), Technology, Building computers, Hiking, Learning new skills, Improving existing skills, Android App Development, 3D Printing, Game Programming
                            </Typography>
                        </Card>
                        </Stack>
                    </Grid>
                    <Grid xs={isTabletOrMobile ? 12 : 4 } mdOffset={isTabletOrMobile ? 0 : 4}>
                        <Card raised sx={{bgcolor: '#00224D', padding: '1em', '&:hover': {bgcolor: '#481E14'}, transition: 'background-color 1s'}}>
                            <Typography variant="h5" gutterBottom color="#F2613F"  textAlign="center" marginTop='0.5em'>Socials</Typography>
                            <CardActions sx={{justifyContent: 'center', marginTop: '0.5em'}}>
                                <IconButton target="_blank" href='https://github.com/brendannguyen' sx={{color: 'white', borderColor: 'white', ":hover": {color: '#F2613F', borderColor: '#F2613F'}}} ><GitHubIcon fontSize='large'/></IconButton>
                                <IconButton target="_blank" href='https://www.linkedin.com/in/brendan-nguyen-8894b7220/' sx={{color: 'white', borderColor: 'white', ":hover": {color: '#F2613F', borderColor: '#F2613F'}}} ><LinkedInIcon fontSize='large'/></IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid> 
            </Box>
        </motion.div>
    )
}

export default AboutPage;