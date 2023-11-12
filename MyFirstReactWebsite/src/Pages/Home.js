import React from 'react';
import Header from '../Components/headerHome';
import SectionWelcome from '../Components/SectionWelcome';
import SectionIntro from '../Components/SectionIntro';
import HomeMenu from '../Components/HomeMenu';
import HomeReservation from '../Components/HomeReservation';
import Video from '../Components/Video';
import HomeBlog from '../Components/HomeBlog';
import '../css/Home.css'
const Home = () => {
    return (
        <div>
            <Header/>
            <SectionWelcome/>
            <HomeMenu/>
            <SectionIntro/>
            <HomeReservation/>
            <Video/>
            <HomeBlog/>
        </div>
    );
}

export default Home;
