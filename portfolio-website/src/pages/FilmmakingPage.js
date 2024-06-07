import { motion } from 'framer-motion';

const FilmmakingPage = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            
                <h1 style={{color: 'white', zIndex: 1}}>FILMMAKING</h1>
            
        </motion.div>
    )
}

export default FilmmakingPage;