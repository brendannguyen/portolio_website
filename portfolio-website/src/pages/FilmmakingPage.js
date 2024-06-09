import { Box, Card, CardActions, CardMedia, Divider, Grid, IconButton, List, ListItem, ListItemIcon, Stack, SvgIcon, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import FilmCard from '../components/FilmCard';
import { useMediaQuery } from 'react-responsive';
import { useRef } from 'react';
import { useIsOverflow } from '../hooks/UseIsOverflow';

import { ReactComponent as DailyMotionIcon } from '../svgs/social_imgs/dailymotion-svgrepo-com.svg';
import CategoryIcon from '@mui/icons-material/Category';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import TheatersIcon from '@mui/icons-material/Theaters';
import SchoolIcon from '@mui/icons-material/School';

const FilmmakingPage = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    // check for overflow, then set margin
    const gridRef = useRef();
    const isOverflow = useIsOverflow(gridRef);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ease: "linear", duration: 2,}}
        >
            <Box display='flex' justifyContent='center' alignItems='center' zIndex={1} sx={{ flexGrow: 1 }} height={isTabletOrMobile ? '': '100vh'} marginTop={isTabletOrMobile ? (isPortrait ? '15vh' : '15vw'): (isOverflow ? '5em' : '')}>
                <Grid ref={gridRef} container spacing={2} maxWidth="80vw" maxHeight='90vh'>
                    <Grid xs={isTabletOrMobile ? 12 : 6 } padding={2}>
                        <Card raised sx={{bgcolor: '#481E14', padding: '1em', '&:hover': {bgcolor: '#00224D'}, transition: 'background-color 1s', maxWidth: isTabletOrMobile ? 'none' : '100%', margin: isTabletOrMobile ? 'none' : 'auto'}}>
                            <Stack direction={isTabletOrMobile ? 'column': 'row'} spacing={2} justifyContent='space-evenly'>
                                <Box>
                                    <Typography variant="h5" gutterBottom color="#F2613F"  textAlign="center" marginTop='0.5em'>Experiences</Typography>
                                    <List sx={{textAlign: 'center'}}>
                                        <ListItem ><ListItemIcon sx={{color: "#F2613F"}}><CategoryIcon/></ListItemIcon><Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center" margin={0}>Production Assistant at Sydney United Cup 2023 and 2024 (for ATP Media)</Typography></ListItem>
                                        <ListItem ><ListItemIcon sx={{color: "#F2613F"}}><VideoCameraFrontIcon/></ListItemIcon><Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center" margin={0}>Camera Assistant at 2022 Australian Open (for ATP Media)</Typography></ListItem>
                                        <ListItem ><ListItemIcon sx={{color: "#F2613F"}}><CameraAltIcon/></ListItemIcon><Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center" margin={0}>Junior Camera Assistant & Runner at 2021 Australian Open/ATP Cup (for ATP Media)</Typography></ListItem>
                                        <ListItem ><ListItemIcon sx={{color: "#F2613F"}}><TheatersIcon/></ListItemIcon><Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center" margin={0}>2019 Under the Radar Film Selection Panellist</Typography></ListItem>
                                        <ListItem ><ListItemIcon sx={{color: "#F2613F"}}><SchoolIcon/></ListItemIcon><Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center" margin={0}>Producing student short films during university</Typography></ListItem>
                                    </List>
                                </Box>
                                
                                <CardActions sx={{ marginTop: '0.5em', justifyContent: 'center'}}>
                                    <IconButton target="_blank" href='https://www.dailymotion.com/BrendanNguyen' sx={{color: 'white', borderColor: 'white', ":hover": {color: '#F2613F', borderColor: '#F2613F'}}} ><SvgIcon title='DailyMotion' component={DailyMotionIcon} inheritViewBox fontSize='large' /></IconButton>
                                </CardActions>
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid xs={isTabletOrMobile ? 12 : 6 } padding={2} >
                        <Card raised sx={{bgcolor: '#481E14', padding: '1em', '&:hover': {bgcolor: '#00224D'}, transition: 'background-color 1s', maxWidth: isTabletOrMobile ? 'none' : '100%', margin: isTabletOrMobile ? 'none' : 'auto'}}>
                            <Stack direction='row' spacing={2} maxWidth='100vw' overflow='auto' alignItems='center'>
                                <CardMedia component='img' sx={{ width: isTabletOrMobile ? (isPortrait ? '6vh' : '6vw') : '6vw', borderRadius: 3, padding: '0.5em'}} src='/experience_gallery/20230102_202014.jpg'/>
                                <CardMedia component='img' sx={{ width: isTabletOrMobile ? (isPortrait ? '6vh' : '6vw') : '6vw', borderRadius: 3, padding: '0.5em'}} src='/experience_gallery/20210130_173441.jpg'/>
                                <CardMedia component='img' sx={{ width: isTabletOrMobile ? (isPortrait ? '6vh' : '6vw') : '6vw', borderRadius: 3, padding: '0.5em'}} src='/experience_gallery/20221226_184346.jpg'/>
                                <CardMedia component='img' sx={{ width: isTabletOrMobile ? (isPortrait ? '6vh' : '6vw') : '6vw', borderRadius: 3, padding: '0.5em'}} src='/experience_gallery/20230108_215251.jpg'/>
                                <CardMedia component='img' sx={{ width: isTabletOrMobile ? (isPortrait ? '6vh' : '6vw') : '6vw', borderRadius: 3, padding: '0.5em'}} src='/experience_gallery/IMG-20230108-WA0005.jpg'/>
                                <CardMedia component='img' sx={{ width: isTabletOrMobile ? (isPortrait ? '6vh' : '6vw') : '6vw', borderRadius: 3, padding: '0.5em'}} src='/experience_gallery/IMG-20230127-WA0000.jpg'/>
                                <CardMedia component='img' sx={{ width: isTabletOrMobile ? (isPortrait ? '6vh' : '6vw') : '6vw', borderRadius: 3, padding: '0.5em'}} src='/experience_gallery/20230101_143746.jpg'/>
                                <CardMedia component='img' sx={{ width: isTabletOrMobile ? (isPortrait ? '6vh' : '6vw') : '6vw', borderRadius: 3, padding: '0.5em'}} src='/experience_gallery/20221228_132622.jpg'/>
                            </Stack>
                        </Card>
                    </Grid>
                    {content.map((entry) => (
                        <Grid xs={isTabletOrMobile ? 12 : 4 } padding={2}>
                            <FilmCard heading={entry.heading} src={entry.src} skills={entry.skills}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </motion.div>
    )
}

const content = [
    {heading: 'Artificial Observation', src: 'https://www.dailymotion.com/embed/video/x813av5', skills: [{label: 'After Effects'}, {label: 'Editing'}, {label: 'Found Footage'}]},
    {heading: 'The House Always Wins.', src: 'https://www.dailymotion.com/embed/video/x8266rj', skills: [{label: 'After Effects'}, {label: 'Alternative Animation'}, {label: 'Stop Motion'}]},
    {heading: 'Hey Little Buddy.', src: 'https://www.dailymotion.com/embed/video/x8266qs', skills: [{label: 'After Effects'}, {label: 'Animation'}, {label: 'Comedy'}, {label: 'Future Machina'}]},
    {heading: 'The Brick', src: 'https://www.dailymotion.com/embed/video/x7wubcr', skills: [{label: 'Editing'}, {label: 'Satire'}, {label: 'Comedy'}]},
    {heading: 'How Do You Ask For A Date?', src: 'https://www.dailymotion.com/embed/video/x7uy6mz', skills: [ {label: 'Archived Footage'}, {label: 'Editing'}, {label: 'Experimental'}]},
    {heading: 'Insistent Anxiousness (Soundscape)', src: 'https://www.dailymotion.com/embed/video/x7scm2p', skills: [{label: 'Sound Editing'}, {label: 'Soundscape'}, {label: 'Circumplex Model'}]},
];

export default FilmmakingPage;