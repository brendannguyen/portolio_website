import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import FilmmakingPage from '../pages/FilmmakingPage';
import SoftwarePage from '../pages/SoftwarePage';
import ContactPage from '../pages/ContactPage';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/software" element={<SoftwarePage/>} />
                <Route path="/filmmaking" element={<FilmmakingPage/>} />
                <Route path="/blog" element={<BlogPage/>} />
            </Routes>
      </AnimatePresence>
    )
}

export default AnimatedRoutes;