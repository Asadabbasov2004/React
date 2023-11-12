import React from 'react';
import '../css/About.css';
import HeaderAbout from '../Components/About/headerAbout';
import OurStory from '../Components/About/OurStory';
import Video from '../Components/Video';
import ContainerAbout from '../Components/About/ContainerAbout';
const About = () => {
    return (
        <div className='Aboutpage'>
            <HeaderAbout/>
            <OurStory/>
            <Video/>
            <ContainerAbout/>
        </div>
    );
}

export default About;
