import React from 'react';
import HeaderMenu from '../Components/Menucomponents/headerMenu';
import SectionValeuMenu from '../Components/Menucomponents/sectionValeuMenu';
import SectionLunch from '../Components/Menucomponents/sectionLunch';
import SectionDinner from '../Components/Menucomponents/sectionDinner';
import "../css/Menu.css";
const Menu = () => {
  return (
   <div className='Menupage'>
    <HeaderMenu/>
    <SectionValeuMenu/>
    <SectionLunch/>
    <SectionDinner/>
   </div>
   
  );
}

export default Menu;
