import React from 'react'
import Hero from '../Hero/Hero'
import GetStarted from '../GetStarted/GetStarted'
import Value from '../Value/Value'
import Faq from '../AccordionFaq/AccordinFaq'
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <Value/>
      <GetStarted/>
      <Faq/>
    </div>
  )
}

export default Home