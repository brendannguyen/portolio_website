import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useMediaQuery } from 'react-responsive';
import { useRef } from 'react';
import { useIsOverflow } from '../hooks/UseIsOverflow';

const BlogPage = () => {
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
                    {content.map((entry) => (
                        <Grid xs={isTabletOrMobile ? 12 : 4 } padding={2}>
                            <BlogCard heading={entry.heading} skills={entry.skills} body={entry.body} media={entry.media} actions={entry.actions} buttons={entry.buttons} date={entry.date} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </motion.div>
    )
}

const content = [
    {heading: "More projects coming soon.",
        date: '21/06/2024', 
        body: "Another project is in the works...",
        skills: [
        ], 
        media: [
            {src: 'https://i.pinimg.com/originals/8f/d7/16/8fd716a4dd584edece28800a0d52eed1.jpg', type: 'img', title: "Binge Optimizer"},
        ],
        actions: true,
        buttons: [
    
        ],
    },
    {heading: "I'll never struggle to find a movie to watch again.",
        date: '20/06/2024', 
        body: "I pretty much have completed the binge optimizer app, and is currently deployed, there are some minor things that need adjusting but other than that, completely usable and useful. Similarly to my other projects, I have deployed it on Vercel for now, so give it a try and like me, you will never run out of movies and shows to watch. As previously mentioned, this app gives you recommendations of new content to watch based on a list of movies and shows chosen by you, so allways receive relevant recommodations based on your tastes. It uses TMDB API to fetch content data and also uses react-youtube to provide you with trailers and videos of all content shown on binge optimizer. This app was mainly for me, I constantly struggle to find new content to watch. Enjoy :)",
        skills: [
            {label: 'Vercel'},
            {label: 'React'},
            {label: 'TMDB API'},
        ], 
        media: [
            {src: '/software_media/bingeoptimizer.png', type: 'img', title: "Binge Optimizer"},
        ],
        actions: true,
        buttons: [
            {href: 'https://bingeoptimizer.vercel.app/', text: 'START OPTIMIZING NOW'},
        ],
    },
    {heading: "First time utilizing Figma before coding a single line",
        date: '15/06/2024', 
        body: "I have an idea for a new project that gives recommendations of new movies and tv shows based on your tastes. It also should give details about each content to the user. I started the project by first using Figma to design the app and its layout. This isis one of the first times I have decided to use Figma before coding, and it has helped a lot. I now have a clear foundation and reference when developing and also mentally encouraged and motivated me to put more effort into the project since I had fun and can see a design for the app.",
        skills: [
            {label: 'Figma'},
            {label: 'Design Process'},
            {label: 'React'},
        ], 
        media: [
            {src: '/blog_media/bingeoptimizerfigma.jpg', type: 'img', title: "Binge Optimizer"},
        ],
        actions: true,
        buttons: [
            {href: 'https://www.figma.com/design/nKI8g9aA2swEQTlB4iLYwx/Binge-Optimizer?node-id=12-2&t=BZIzfs7SeDA3KiAS-1', text: 'FIGMA PROJECT'},
        ],
    },
    {heading: 'GitHub LFS Usage Limits are gonna kill me...',
        date: '10/06/2024', 
        body: "So yep...I exceeded my LFS usage limits and couldn't deploy my projects anymore or clone my repositories RIP. So I decided to figure out how to avoid using LFS as much as possible. This meant going through all large files (mainly videos) and hosting them on YouTube and using iframes instead. This also meant that I had to somehow reduce the file size of my 3D model for my 'Just Chillax' web app. After trying to compress using gltfjsx and gltfpack, it combined meshes and caused material bugs. I thought I was done for the day until I came across GM Viewer which saved my life. I used this to optimise my texture resolution to a suitable size which reduced the model by more than half the size. This also increased performance of viewing the model as well, so in the end, the annoyance of GitHub LFS limits became a positive. Thankfully. :)",
        skills: [
            {label: 'GitHub'},
            {label: 'Git LFS'},
            {label: 'GLB Compression'},
        ], 
        media: [
            {src: '/blog_media/gmviewer.png', type: 'img', title: "GM Viewer"},
        ],
        actions: true,
        buttons: [
            {href: 'https://githubdragonfly.github.io/viewers/templates/GM%20Viewer.html', text: 'GM Viewer'},
        ],
    },
    {heading: 'Portfolio Website Upgrade!!!',
        date: '09/06/2024', 
        body: "My previous portfolio website needed an upgrade. To be honest, it looked old and like a dark web website using html and css. I decided to again use React and JavaScript to create a new website that was modern, responsive and fun to make. I made heavy use of the MUI libary, especially its Grid component for entries on each page which gave a more finished look that was adaptive to different screens. There were some challenges with the navigation bar on top but overall a fun experience again and it was great to create components that could be reused, unlike the previous website where I was repeating code again and again. Similarly to the Just Chillax app, I deployed my new website on Vercel. Enjoy the website!",
        skills: [
            {label: 'React'},
            {label: 'tsParticles'},
            {label: 'react-responsive'},
            {label: 'Vercel'},
        ], 
        media: [
            {src: '/software_media/portfolio_responsive.png', type: 'img', title: "Portfolio Website (you're on it obviously)"},
        ],
        actions: true,
        buttons: false,
    },
    {heading: 'Completion of Just Chillax',
        date: '07/06/2024', 
        body: "After a long semester, I finally had the time to finish the just chillax web app, I made adjustments to the TV component, fixing bugs when changing channels and displaying a media bar of the current video playing. I also took time to understand and implement a responsive application for desktop and mobile devices. I made use of react-responsive to query screen sizes and adjust the components accordingly. This was a huge learning experience and a fun challenge and I am more than happy with the results. The app is now deployed on Vercel which offers deployment for free which is great. Only thing left to do is add more videos to the data list for the TV to play. I have so far added movies, music and trailers and hope to finish the other channels soon as well.",
        skills: [
            {label: 'React'},
            {label: 'React Three Fiber'},
            {label: 'react-responsive'},
            {label: 'Vercel'},
        ], 
        media: [
            {src: '/promotion_imgs/justchillax.png', type: 'img', title: 'Just Chillax Desktop'},
            {src: '/blog_media/justchillaxmobile.jpg', type: 'img', title: 'Just Chillax Mobile'},
        ],
        actions: true,
        buttons: [
            {href: 'https://justchillax.vercel.app/', text: 'EXPLORE IT NOW'},
        ],
    },
    {heading: 'React Three Fiber and more additions (and bugs)...',
        date: '06/04/2024', 
        body: "I have continued with my web app and its come a long way since the last blog, there are way more interactive elements in the scene, with addition of sound and music corresponding to those interacting items, using a combination of use-sound and html Audio. The next thing I had to implement was the computer in the scene, which I did with the help of winXP, there are still some bugs in putting a html element in a r3f canvas but it does the job for now. Added a camera movement when interacting with the computer as well. Learning r3f is difficult especially with confusing documentation but I've enjoyed the challenge so far. The next step is to implement the TV similar to my00stv, which I am thinking of doing by using the Youtube API and iframe to put that into the canvas in a similar way to the computer. I've also enjoyed (learning as I go) figuring out react hooks and how to use them to interact with components. Reminder to fix winXP bugs with screen size as windows can juse be dragged off the screen :(",
        skills: [
            {label: 'React'},
            {label: 'React Three Fiber'},
            {label: 'winXP'},
        ], 
        media: [
            {src: '/blog_media/webapppcbug.png', type: 'img', title: 'winXP Bug'},
        ],
        actions: true,
        buttons: [
            {href: 'https://github.com/ShizukuIchi/winXP', text: 'winXP'},
        ],
    },
    {heading: 'Learning Three.JS and React',
        date: '04/04/2024', 
        body: "I have recently been delving into React and Three.js web application development and wanted to create a website using 3D elements that is inspired by my00stv.com. I wanted to create 3D bedroom set in the 2000s, where you can interact with objects in the room, and use the TV and Computer in the scene, similar to the TV in my00stv.com. What I realised really quickly was I had to create this bedroom in Blender first, so I did. Now that I made the bedroom in blender, I need to put that in my web application, so i used React Three Fiber to do this. I first used gltfjsx to convert my .glb model into a react component with some minor adjustments. I also added multiple functions for interaction with the window and lamp in the scene, and added this components to the canvas in my App.js. I hope to continue adding to the web app and hopefully publish the website to the public one day... This takes way more work than I realised, making me learn skills in 3D modelling using Blender which I have found fun to do. Next time, I add more interactivity with objects in the scene, and then get on with implementing the TV.",
        skills: [
            {label: 'Blender'},
            {label: 'Three.js'},
            {label: 'React'},
        ], 
        media: [
            {src: '/blog_media/blender_model.png', type: 'img', title: 'Blender Model'},
            {src: '/blog_media/blender_model2.png', type: 'img', title: 'Model with textures'},
            {src: '/blog_media/04042024code1.png', type: 'img', title: 'Code'},
            {src: '/blog_media/04042024code2.png', type: 'img', title: 'Code'},
        ],
        actions: true,
        buttons: [
            {href: 'https://www.my00stv.com/', text: 'my00stv.com'},
            {href: 'https://github.com/pmndrs/gltfjsx', text: 'gltfjsx'},
        ],
    },
    {heading: 'Training and deploying a DL model',
        date: '01/03/2024', 
        body: "This is my first attempt of creating and training a model on my own machine by using a linux environment on windows which was a task in itself. After managing to get all that up and running with the necessary dependencies, I made use of Jupyter and the notebook feature to test and train my model. The model uses a great dataset I found that represents categories of music into spectrograms. I fine tuned my model doing 80 epochs because I began to find diminishing returns and wanted to get my model on and running. The model has 80.5% accuracy rate and tends to get confused with hip-hip and rock based on the confusion matrix. I would have liked this to be better in terms of accuracy but decided that I don't wanna waste my time anymore on training. The next step was to implement the model onto Hugging Face to host. After some (many) google searches later, I finally got a working python code to deploy the model on Hugging Face using gradio. I tested the hugging space with a 30sec extract from Jay-Z's 'The Story of OJ' which is very much a hip-hop song.",
        skills: [
            {label: 'Deep Learning'},
            {label: 'Jupyter'},
            {label: 'Hugging Face'},
        ], 
        media: [
            {src: '/blog_media/training_music_model1.png', type: 'img', title: 'Confusion Matrix'},
            {src: '/blog_media/training_music_model2.png', type: 'img', title: 'Country Song Test'},
            {src: '/blog_media/training_music_gradio_code.png', type: 'img', title: 'Hugging Face Code'},
            {src: '/blog_media/jayzthestoryofoj.png', type: 'img', title: 'Final App on Hugging Face'},
        ],
        actions: true,
        buttons: [
            {href: 'https://huggingface.co/spaces/bread03/music_classifier', text: 'Hugging Face App'},
        ],
    },
    {heading: 'Diving into AI and Deep Learning',
        date: '28/02/2024', 
        body: "I have always wanted to delve into AI and machine learning but was always daunted by the task of it but luckily I came across a great learning resource by fast.ai. So far I am up to lesson 2 of the course, and hope to deploy a my own macine learning project. So far in following the course, I have experimented with fastai and Pytorch, creating and training a simple data classification model for cats and dogs. Although quite simple, this is my first dive into deep learning. So far I have learnt the basics of deep learning, how to set yp and train a simple model using fastai and how to fine tune the model. I hope to improve on error rate adn training a model for other types of media.",
        skills: [
            {label: 'fast.ai'},
            {label: 'Deep Learning'},
            {label: 'PyTorch'},
        ], 
        media: [
            {src: '/blog_media/cat_dog_model1.png', type: 'img', title: 'Cat/Dog Classification'},
            {src: '/blog_media/cat_dog_model2.png', type: 'img', title: 'Cat/Dog Classification'},
        ],
        actions: true,
        buttons: [
            {href: 'https://course.fast.ai/', text: 'fast.ai Course'},
        ],
    },
];

export default BlogPage;