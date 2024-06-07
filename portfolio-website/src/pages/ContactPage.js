import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ease: "linear", duration: 2,}}
        >
            
                <h1 style={{color: 'white', zIndex: 1}}>CONTACT</h1>
            
        </motion.div>
    )
}

export default ContactPage;