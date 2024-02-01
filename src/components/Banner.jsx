import React, { Component } from 'react';

import bannerImage from '../assets/prateekpic.jpg';
import bannerBackground from '../assets/img2.jpg';
import Typed from "typed.js";
import { useEffect, useRef } from 'react';

const Banner = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Web Developer", "Backend Developer", "Java Developer", "React JS Developer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            loop: true,
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 100,

        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div style={{
            //backgroundImage: `url(${bannerBackground})`,
            //backgroundSize: "cover",
        }} className="grid md:grid-cols-2 items-center py-2 bg-gradient-to-b from-violet-500 from-40% to-violet-200 to-70%">
            <div className="w-full flex items-center justify-center text-white">{/* text */}
                <div className="w-3/4 space-y-2 ms-10">
                    <h3 className='text-3xl font-semibold'>Hi, I am</h3>
                    <h1 className='text-5xl font-semibold'>Prateek Gupta</h1>
                    <h2 className='text-3xl'>And I am a <span className="font-bold underline" ref={el}></span></h2>
                    <p className='text-1xl'>
                        Ability to create innovative, creative, & interactive web designs to boost customer engagement.
                        Sound knowledge in HTML5, JQuery, React.js, & other UI frameworks. Build reusable code for
                        future use while optimising web performance.
                    </p>
                    <div className='icons-container flex space-x-5'>
                        <a href="https://mail.google.com/mail/" className='hover:bg-orange-500 border cursor-pointer px-2 py-2 w-14 h-14 bg-gray-800 rounded-full flex justify-center items-center'>
                            <i class="fa-solid text-4xl fa-envelope"></i>
                        </a>
                        <a href="https://www.instagram.com/_prateek28_/" className='hover:bg-orange-500 border cursor-pointer px-2 py-2 w-14 h-14 bg-gray-800 rounded-full flex justify-center items-center'>
                            <i class="fa-brands text-4xl fa-instagram"></i>
                        </a>
                        {/* <a href="" className='hover:bg-orange-500 border cursor-pointer px-2 py-2 w-14 h-14 bg-gray-800 rounded-full flex justify-center items-center'>
                            <i class="fa-brands text-4xl fa-youtube"></i>
                        </a> */}
                        <a href="https://www.linkedin.com/in/prateek-gupta-3b4031211/" className='hover:bg-orange-500 border cursor-pointer px-2 py-2 w-14 h-14 bg-gray-800 rounded-full flex justify-center items-center'>
                            <i class="fa-brands text-4xl fa-linkedin"></i>
                        </a>
                    </div>
                    <br />
                    <a className='text-2xl px-3 py-2 bg-orange-500 rounded-full' href="/Contact">Contact Me</a>
                </div>
            </div>
            <div className='w-full flex justify-center mt-5 pr-10'>{/* image */}
                <img className='rounded-full shadow-lg w-1/2 my-2' src={bannerImage} alt="" />
            </div>
        </div>
    );
};
export default Banner;