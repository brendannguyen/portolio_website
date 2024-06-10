import { Box, Card, CardActions, IconButton, SvgIcon, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useIsOverflow } from '../hooks/UseIsOverflow';
import { useMediaQuery } from 'react-responsive';
import SoftwareCard from '../components/SoftwareCard';

import GitHubIcon from '@mui/icons-material/GitHub';
import ShopIcon from '@mui/icons-material/Shop';
import { ReactComponent as HuggingFaceIcon } from '../svgs/social_imgs/hf-logo-pirate.svg';
import { ReactComponent as LeetCodeIcon } from '../svgs/social_imgs/leetcode-svgrepo-com.svg';

const SoftwarePage = () => {
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
                <Grid ref={gridRef} container spacing={2} maxWidth="80vw" maxHeight='90vh'>
                    <Grid xs={12} padding={2} >
                        <Card raised sx={{bgcolor: '#00224D', padding: '1em', '&:hover': {bgcolor: '#481E14'}, transition: 'background-color 1s', maxWidth: isTabletOrMobile ? 'none' : '40%', margin: isTabletOrMobile ? 'none' : 'auto'}}>
                            <Typography variant="h5" gutterBottom color="#F2613F"  textAlign="center" marginTop='0.5em'>Software Links</Typography>
                            <CardActions sx={{justifyContent: 'center', marginTop: '0.5em'}}>
                                <IconButton target="_blank" href='https://github.com/brendannguyen' sx={{color: 'white', borderColor: 'white', ":hover": {color: '#F2613F', borderColor: '#F2613F'}}} ><GitHubIcon fontSize='large'/></IconButton>
                                <IconButton target="_blank" href='https://play.google.com/store/apps/dev?id=4725217607813660973' sx={{color: 'white', borderColor: 'white', ":hover": {color: '#F2613F', borderColor: '#F2613F'}}} ><ShopIcon fontSize='large'/></IconButton>
                                <IconButton target="_blank" href='https://huggingface.co/bread03' sx={{color: 'white', borderColor: 'white', ":hover": {color: '#F2613F', borderColor: '#F2613F'}}} ><SvgIcon component={HuggingFaceIcon} inheritViewBox fontSize='large' /></IconButton>
                                <IconButton target="_blank" href='https://leetcode.com/akimbear/' sx={{color: 'white', borderColor: 'white', ":hover": {color: '#F2613F', borderColor: '#F2613F'}}} ><SvgIcon component={LeetCodeIcon} title='' inheritViewBox fontSize='large' /></IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                    {content.map((entry) => (
                        <Grid xs={isTabletOrMobile ? 12 : 4 } padding={2}>
                            <SoftwareCard heading={entry.heading} skills={entry.skills} body={entry.body} media={entry.media} actions={entry.actions} buttons={entry.buttons} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </motion.div>
    )
}

// software content (can convert to db when needed)
const content = [
    {heading: 'Song Showdown for Spotify', 
        body: "Using the Spotify API for web and android, I created an android app that allows a user to log in using their spotify account, search public playlists (including their own) and use those to play a knockout styled tournament between songs to find out which song is the best. It provides previews of songs to compare and full songs (when previews aren't available) if the user has Spotify Premium, it also allows users to like songs which will be added to their Spotify liked songs or access the song page on Spotify. This project came about when my friends and I would compare songs in a similar fashion using an outdated website and was built using Java and Android Studio.",
        skills: [
            {label: 'Spotify API'},
            {label: 'Java'},
            {label: 'Android Studio'},
        ], 
        media: [
            {src: '/software_media/app_walkthrough.mp4', type: 'video', title: 'App Walkthrough'},
            {src: '/software_media/svs.mp4', type: 'video', title: 'Code'},
        ],
        actions: true,
        buttons: [
            {href: 'https://play.google.com/store/apps/details?id=com.bn.songvsong', text: 'GET ON GOOGLE PLAY'}
        ]
    },
    {heading: 'Just Chillax (WIP)', 
        body: "I wanted to continue my learning and improvement in web development using React and Three.js, so I decided to start creating a web 2000s experience using 3D scenes. The idea of Just Chillax is to allow users to interact with a 2000s bedroom such as watching TV or using the computer in the scene, as well as interacting with other objects in the room. Giving a nostalgic experience for people using the web application. I hope to finish it and publish the website soon.",
        skills: [
            {label: 'React'},
            {label: 'JavaScript'},
            {label: 'Three.js'},
            {label: 'YouTube API'},
        ], 
        media: [
            {src: '/software_media/blender_model2.png', type: 'img', title: 'Room 3D Model'},
            {src: '/software_media/webapp.webm', type: 'video', title: 'Just Chillax'},
        ],
        actions: true,
        buttons: [
            {href: 'https://justchillax.vercel.app/', text: 'EXPLORE NOW'}
        ]
    },
    {heading: 'JRVS (University Project)', 
        body: "In a year long software practice unit (in progress), as a group of 15 people, using the SAFe agile framework, we were tasked with creating an e-learning web application for teenages to learn about A.I. Taking on the role of a system architect, the SA team were tasked with researching and choosing the appropriate tech stack and libraries, and supporting team members in spikes. My agile team is assigned to develop the lesson content and UI elements for the content which includes lessons, quizzes, videos, and other content types. This involved creating page components to display this content, and creating models for content to fectch from the MongoDB database. This includes using controllers and an provider to request lesson content in JSON format. BIG THANKS to our group presenters in the milestone presentation (9:32 for demo) video below!",
        skills: [
            {label: 'React'},
            {label: 'JavaScript'},
            {label: 'MongoDB'},
            {label: 'Express'},
            {label: 'Software Practice'},
        ], 
        media: [
            {src: '/software_media/jrvs1.png', type: 'img', title: 'Team 1 Deliverables'},
            {src: '/software_media/jrvs3.png', type: 'img', title: 'Team 2 Deliverables'},
            {src: '/software_media/jrvs2.png', type: 'img', title: 'Team 3 Deliverables'},
            {src: '/software_media/jrvs4.png', type: 'img', title: 'Customer Profile'},
            {src: '/software_media/jrvs_milestone_demo_pres.mp4', type: 'video', title: 'JRVS WIP Demo - Skip to 9:32 for demo'},
        ],
        actions: true,
        buttons: [
            {href: 'https://github.com/Monash-FIT3170/JRVS', text: 'SEE GITHUB REPO'}
        ]
    },
    {heading: 'Personal Portfolio Website (obviously..)', 
        body: "My portfolio website previously used HTML, JavaScript and CSS only using Github Pages which is static, so it needed an upgrade. I decided to use React as I have had previous experience using this for other projects. I strived for the website to be responsive especially for mobile as my old one was not so mobile friendly. I made use of the react-responsive to make the website adaptable to different screen sizes. I also wanted the website to be simple and with a slight bit of flair which is where tsparticles came into play for the background.",
        skills: [
            {label: 'React'},
            {label: 'JavaScript'},
            {label: 'React-Responsive'},
            {label: 'tsParticles'},
            {label: 'MUI Library'},
        ], 
        media: [
            {src: '/software_media/portfolio_responsive.png', type: 'img', title: 'Room 3D Model'},
        ],
        actions: false,
        buttons: false,
    },
    {heading: 'Fiery Dragons Game (University Project)', 
        body: "In an object-oriented design unit, as a group of four, we were tasked with replicating the Fiery Dragons board game into a software system that follows OOP principles and making use of common processes and techniques. We decided to use Java and the JavaSwing framework for the GUI of the game. The project involved four sprints comprised of planning, individual prototypes, prototype review and a final consolidated prototype, and the final sprint involved implementing extension features to the game.",
        skills: [
            {label: 'Java'},
            {label: 'JavaSwing'},
            {label: 'Object-Oriented Design'},
            {label: 'Design Patterns'},
        ], 
        media: [
            {src: '/software_media/fierydragonsmenu.png', type: 'img', title: 'Menu'},
            {src: '/software_media/fierydragonsgame.png', type: 'img', title: 'Game Board'},
        ],
        actions: true,
        buttons: [
            {href: 'https://www.dropbox.com/scl/fi/q0r4hpimr213k4y2jxzy9/FieryDragons.jar?rlkey=vbirsddsp7jh3o2blxrqsaps9&st=3hbyno6w&dl=0', text: 'DROPBOX'}
        ],
    },
    {heading: 'Beat Em Up Game Prototype (University Project)', 
        body: "During a games programming unit, I learnt C++ and programming using Unreal Engine 5. The project required me to create self defined core mechanics for the game in C++. These mechancis were force abilities and the buying and placing of traps for enemies. I improved my C++ programming skills as well as learning UE5 such as AI, UI, and using blueprints with C++ classes. I also learnt how to use particle systems (Niagara System) for particples within the game and how to implement C++ interactions with these effects. This was a new and amazing learning experience as I learnt new skills in C++ and Unreal Engine 5, providing me with the basic foundation to continuously develop on my own.",
        skills: [
            {label: 'C++'},
            {label: 'Unreal Engine 5'},
            {label: 'Games Programming'},
        ], 
        media: [
            {src: 'https://www.youtube.com/embed/AchB0tI2EpY?si=skBsK3spYePZUkXQ', type: 'iframe', title: 'Menu'},
        ],
        actions: true,
        buttons: [
            {href: 'https://www.dropbox.com/scl/fi/niowj4vv9e3l1pbl3yyer/Game-Prototype.zip?rlkey=hh6kqajs70ifzbwpcr00dya78&st=e2xqf51y&dl=0', text: 'DROPBOX'}
        ],
    },
    {heading: 'Old Portfolio Website...yikes...', 
        body: "I wanted to continue my learning and improvement in web development using HTML, JavaScript and CSS, so I decided to create my own personal portfolio website using GitHub Pages. This also allowed me to strengthen my knowledge and skills using GitHub as well. This became a very fun project and hope to continously add and improve the website.",
        skills: [
            {label: 'CSS'},
            {label: 'JavaScript'},
            {label: 'HTML'},
            {label: 'GitHub Pages'},
        ], 
        media: [
            {src: '/software_media/website.png', type: 'img', title: 'Old Website'},
        ],
        actions: true,
        buttons: [
            {href: 'https://brendannguyen.github.io/', text: 'SEE OLD WEBSITE'}
        ],
    },
    {heading: 'Agile Project Tool Web Application', 
        body: "During a software engineering practice unit, in a group of six, we were assigned to implement a web application to be used an scrum agile tool to log sprints, product backlogs and see contribution times for developers and clients. We had to undertake this project while also using Scrum agile practices such as team stand up meetings, backlogs and numerous sprints. We implemented the web application using EJS, CSS, JavaScript and Node.js (which was new to me and the team).",
        skills: [
            {label: 'CSS'},
            {label: 'JavaScript'},
            {label: 'Node.js'},
            {label: 'EJS'},
            {label: 'Scrum Agile'},
        ], 
        media: [
            {src: '/software_media/webtool.png', type: 'img', title: 'Web Tool'},
            {src: '/software_media/product_backlog.png', type: 'img', title: 'Product Backlog for Project'},
            {src: '/software_media/burndownchart.png', type: 'img', title: 'Burndown Chart for Project'},
        ],
        actions: false,
        buttons: false,
    },
    {heading: 'Quality Testing & CI/CD', 
        body: "For a quality testing unit, I explored and set up a CI/CD pipeline on GitLab to run test files and static analysis tools such as flake8, mypy, pycodestyle, pydocstyle and pylint. Learning approaches taken to ensure high quality code that meets coding standards revealed the importance in implementing these approaches. The difference between the initial code and the cleaned up code after analysis and testing made the code cleaner, simplier and ensures as little coding bugs as possible. I also implemented test cases using python unittest.",
        skills: [
            {label: 'Python'},
            {label: 'GitLab'},
            {label: 'CI/CD Pipelines'},
            {label: 'pytest'},
        ], 
        media: [
            {src: '/software_media/unittesting.png', type: 'img', title: 'Unit Testing'},
            {src: '/software_media/pipeline.png', type: 'img', title: 'CI/CD Pipeline'},
            {src: '/software_media/pycodetesting.png', type: 'img', title: 'Pycode Testing'},
        ],
        actions: false,
        buttons: false,
    },
    {heading: 'Arduino Traffic System', 
        body: "In a team of four, we were tasked with creating a simplified version of a traffic system using LEDs, and appropriate sensors to detect pedestrians and cars, as well as implementing a day and night cyle for traffic lights. Security features such as a login system with lock-out were implemented with Python along with the traffic system integration with Arduino. A heartbeat signal was also implemented to make the system restart after 'power' is cut off for a specified amount of time. The implemented software can be interacted with to monitor the system and make changes to light timing as well.",
        skills: [
            {label: 'Python'},
            {label: 'Arduino'},
            {label: 'Electronics'},
        ], 
        media: [
            {src: '/software_media/arduinotraffic.jpg', type: 'img', title: 'Traffic System Breadboard'},
            {src: '/software_media/traffic_system_python_code.mp4', type: 'video', title: 'Traffic System Python Code'},
        ],
        actions: false,
        buttons: false,
    },
];

export default SoftwarePage;