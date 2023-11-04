import React from 'react'
import Hero from '../../components/UI/Hero'
import Counter from '../../components/UI/Counter'
import About from '../../components/UI/About'
import Services from '../../components/UI/Services'
import Team from '../../components/UI/Team'
import Blog from '../../components/UI/Blog'
import Feedback from '../../components/UI/Feedback'
import Newsletter from '../../components/UI/Newsletter'
import Contact from '../../components/UI/Contact'

export const Home = () => {
        return (
            <>
                <Hero />
                <Counter />
                <About/>
                <Services/>
                <Team/>
                <Blog/>
                <Newsletter/>
                <Feedback/>
                <Contact/>
            </>
        )
}