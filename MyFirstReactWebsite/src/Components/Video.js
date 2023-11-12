import React, { useState } from 'react';

const Video = () => {
        const [isModalOpen, setModalOpen] = useState(false);
      
        const openModal = () => {
          setModalOpen(true);
          console.log('bas');
        };
      
        const closeModal = () => {
          setModalOpen(false);
        }
    return (
        <section className='sectionVideo '>
            <div className='m-auto text-center'>
            {isModalOpen && (
        <div className="modal-made">
          <div className="modal-made-content">
          <iframe width="854" height="480" src="https://www.youtube.com/embed/5k1hSu2gdKE" title="The Top Five Secrets of a Successful Restaurant" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <button onClick={closeModal}><i className="fa-solid fa-xmark"></i></button>
          </div>
        </div>
      )}
      
                 <span className='title-span d-block' >
                Discover</span>
                <h3 className='title-h3'>OUR VIDEO</h3>
                <div className='circle '  onClick={openModal}> 
                <i className="fa-solid fa-play"></i>
                <audio src='https://youtu.be/IWpBzKPjtc0' autoPlay ></audio>
                    </div>
                </div>
               
            <div className='position-absolute-dark'></div>
        </section>
    );
}

export default Video;
