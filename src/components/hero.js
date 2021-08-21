import React from 'react';
import '../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Hero(){
        return (
            <div id="home">
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}  showStatus={false}>
                <div>
                    <img className="hero-img" src="https://images.unsplash.com/flagged/photo-1569118311341-145748f3f338?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmdvfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" alt="img"/>
                </div>
                <div>
                    <img className="hero-img" src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5nb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img"/>
                </div>
                <div>
                    <img className="hero-img" src="https://images.unsplash.com/photo-1486280380840-0531135d75af?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMTE2NTM0fHxlbnwwfHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="img"/>
                </div>
            </Carousel>
            </div>
        );
    };
export default Hero;
