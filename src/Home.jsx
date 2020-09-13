import React,{useEffect} from 'react';
import Info from './Info';
import bgimage from './images/bgimage.jpg';
import Footer from './Footer';

const Home = () =>{
  useEffect(() =>{
    const video = document.querySelector('video');
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-250px"
    };

    const observer = new IntersectionObserver((entries, observer) =>{
      entries.map(entry =>{
        if(entry.isIntersecting){
          video.play();
        }
        else{
          video.pause();
        }
      })
    }, options)

    observer.observe(video);
  }, [])
  return(
    <>
      <main>
        <video poster = {bgimage} autoPlay muted loop>
          <source src = "https://res.cloudinary.com/jatinchutani/video/upload/v1599575430/bgvideo.mp4" type="video/mp4"/>
        </video>
        <div className = "back"></div>
        <h1>IPL 2020 − 19 September 2020 <a href = "https://www.iplt20.com/schedule" target = "_blank">[Schedule]</a></h1>
        {/*Scroll Down animation*/}
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </main>
      <Info/>
      <Footer/>
    </>
  )
}

export default Home;
