"use client"
// import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import i1 from '../../../public/hero-1.svg'
import i2 from '../../../public/hero-2.svg'
import i3 from '../../../public/hero-3.svg'
import i4 from '../../../public/hero-4.svg'
import i5 from '../../../public/hero-5.svg'
import watch from '../../../public/applewatch.png'
import headphone1 from '../../../public/headphone1.png'
import iphone from '../../../public/iphone.png'
import laptop from '../../../public/laptop.png'
import sonytv from '../../../public/sonytv.png'
// import watch from '../../../public/applewatch.png'
import './curosel.css'
const Curosel = () => {
    
    return (
        <div className="carousel-container"> {/* Added a container for styling */}
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={2000}
            showArrows={false}
            showStatus={false}
          >
            <div className="carousel-item"> {/* Corrected classname */}
              <Image
                src={i1}
                alt="Watch"
                height={350}
                width={360}
              />
            </div>
            <div className="carousel-item"> {/* Corrected classname */}
              <Image
                src={i2}
                alt="Headphone"
                height={350}
                width={360}
              />
            </div>
            <div className="carousel-item"> {/* Corrected classname */}
              <Image
                src={i3}
                alt="Laptop"
                height={210}
                width={360}
              />
            </div>
            <div className="carousel-item"> {/* Corrected classname */}
              <Image
                src={i4}
                alt="Sony TV"
                height={350}
                width={360}
              />
            </div>
            <div className="carousel-item"> {/* Corrected classname */}
              <Image
                src={i5}
                alt="Sony TV"
                height={350}
                width={360}
              />
            </div>
          </Carousel>
        </div>
      );
}

export default Curosel