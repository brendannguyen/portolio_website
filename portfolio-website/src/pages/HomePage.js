import { motion } from 'framer-motion';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button, Card, CardActions, CardMedia, Skeleton, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { useIsOverflow } from '../hooks/UseIsOverflow';
import { useRef } from 'react';


// TO DO: MAP CARDS
const HomePage = () => {
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
            transition={{ease: "linear", duration: 2}}
        >
            <Box display='flex' justifyContent='center' alignItems='center' zIndex={1} sx={{ flexGrow: 1 }} height={isTabletOrMobile ? '': '100vh'} marginTop={isTabletOrMobile ? (isPortrait ? '15vh' : '15vw'): (isOverflow ? '5em' : '')}>
                <Grid ref={gridRef} container spacing={2} maxWidth="80vw" maxHeight='100vh'>
                    <Grid xs={isTabletOrMobile ? 12 : 6 } mdOffset={isTabletOrMobile ? 0 : 3} sx={{textAlign: 'center'}}>
                        <Link to="/about" className="name-title"><h1 className='name-title'>Hey, I'm Brendan.</h1></Link>
                    </Grid>
                    <Grid xs={isTabletOrMobile ? 12 : 4 }>
                        <Card raised sx={{bgcolor: '#481E14', padding: '1em', '&:hover': {bgcolor: '#00224D'}, transition: 'background-color 1s'}}>
                            <CardMedia sx={{height: '25em', maxHeight: '25em', width: '100%', borderRadius: 1}} image="/promotion_imgs/spotify_showdown.webp" title="Spotify Showdown"/>
                            <Typography variant="h5" gutterBottom color="#F2613F"  textAlign="center" marginTop='0.5em'>Spotify Showdown</Typography>
                            <Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center">
                                Play shared or your own Spotify playlists in a knockout style tournament.
                                Connect your Spotify account to play tournaments with Spotify playlists where you can listen to and like all songs within your tournament.
                            </Typography>
                            <CardActions sx={{justifyContent: 'center', marginTop: '0.5em'}}>
                                <Button target="_blank" href='https://play.google.com/store/apps/details?id=com.bn.songvsong&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' size='small' variant="outlined" sx={{color: 'white', borderColor: 'white', ":hover": {color: '#F2613F', borderColor: '#F2613F'}}}>GET ON GOOGLE PLAY</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid xs={isTabletOrMobile ? 12 : 4 }>
                        <Card raised sx={{bgcolor: '#481E14', padding: '1em', '&:hover': {bgcolor: '#00224D'}, transition: 'background-color 1s'}}>
                            <CardMedia sx={{height: '25em', borderRadius: 1}} image="/promotion_imgs/justchillax.png" title="Just Chillax"/>
                            <Typography variant="h5" gutterBottom color="#F2613F"  textAlign="center" marginTop='0.5em'>Just Chillax</Typography>
                            <Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center">
                                An interactive recreation of a 2000s bedroom, providing you with a nostalgia trip to a time where you could waste it.
                                Explore the room, delve into and watch 2000's TV and have a go on a Windows XP computer to relive your childhood memories.
                            </Typography>
                            <CardActions sx={{justifyContent: 'center', marginTop: '0.5em'}}>
                                <Button target="_blank" href='https://justchillax.vercel.app/' size='small' variant="outlined" sx={{color: 'white', borderColor: 'white', ":hover": {color: '#F2613F', borderColor: '#F2613F'}}}>EXPLORE NOW</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid xs={isTabletOrMobile ? 12 : 4 }>
                        <Card raised sx={{bgcolor: '#481E14', padding: '1em', '&:hover': {bgcolor: '#00224D'}, transition: 'background-color 1s'}}>
                            <Skeleton animation="wave" variant="rounded" height='25em' />
                            <Typography variant="h5" gutterBottom color="#F2613F"  textAlign="center" marginTop='0.5em'>In Progress...</Typography>
                            <Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center">
                                <Skeleton animation="wave" variant="text"/>
                            </Typography>
                            <CardActions sx={{justifyContent: 'center', marginTop: '0.5em'}}>
                                <Skeleton animation="wave" sx={{textAlign: 'center'}} variant="rounded" height="2em" width="8em"/>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid> 
            </Box>
        </motion.div>
    )
}

export default HomePage;