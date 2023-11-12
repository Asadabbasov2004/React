import React from 'react';
import '../css/Sidebar.css';
import '../css/Home.css';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import sidebarGallery1 from'../Assets/Image/Sidebar/photo-gallery-03.jpg';
import sidebarGallery2 from'../Assets/Image/Sidebar/photo-gallery-13.jpg';
import sidebarGallery3 from'../Assets/Image/Sidebar/photo-gallery-14.jpg';
import sidebarGallery4 from'../Assets/Image/Sidebar/photo-gallery-15.jpg';
import sidebarGallery5 from'../Assets/Image/Sidebar/photo-gallery-16.jpg';
import sidebarGallery6 from'../Assets/Image/Sidebar/photo-gallery-17.jpg';
import sidebarGallery7 from'../Assets/Image/Sidebar/photo-gallery-18.jpg';
import sidebarGallery8 from'../Assets/Image/Sidebar/photo-gallery-19.jpg';
import sidebarGallery9 from'../Assets/Image/Sidebar/photo-gallery-20.jpg';
class Example extends React.Component {
  showSettings(event) {
    event.preventDefault();

  }
  handleClick = () => {
    
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <>
      <Menu  >
        <Link id="Home" to="/Home">Home</Link>
        <Link id="Menu" to="/Menu">Menu</Link>
        <Link id="Gallery" to="/Gallery">Gallery</Link>
        <Link id="About" to="/About">About</Link>
        <Link id="Blog" to="/Blog">Blog</Link>
        <Link id="Contact" to="/Contact">Contact</Link>
        <Link id="Reservation" to="/Reservation">Reservation</Link>
        <div className='sidebarGallery'>
          <h4>gallery</h4>
          <div onClick={this.handleClick} className='sidebarGalleryItem'>
            <img src={sidebarGallery1} />
          </div><div className='sidebarGalleryItem'>
            <img src={sidebarGallery2} />
          </div><div className='sidebarGalleryItem'>
            <img src={sidebarGallery3} />
          </div><div className='sidebarGalleryItem'>
            <img src={sidebarGallery4} />
          </div><div className='sidebarGalleryItem'>
            <img src={sidebarGallery5} />
          </div><div className='sidebarGalleryItem'>
            <img src={sidebarGallery6}/>
          </div><div className='sidebarGalleryItem'>
            <img src={sidebarGallery7}/>
          </div><div className='sidebarGalleryItem'>
            <img src={sidebarGallery8} />
          </div><div className='sidebarGalleryItem'>
            <img src={sidebarGallery9} />
          </div>
          <div className='sidebarGalleryItem-slide'>

          </div>
        </div>

      </Menu>
     </>
    );
  }
}
export default Example

