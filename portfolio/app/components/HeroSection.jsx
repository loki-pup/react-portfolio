"use client";
import  React from "react";
import Image  from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";


const HeroSection =() =>{
    return(
        <section className="lg:mb-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div 
            initial={{opacity:0.3, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}
            className="col-span-7 place-self-center text-center sm:text-left sm:justify-self-start md:pl-8"
            >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold ">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-600">
                            Hello, I&#39;m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Bozyu',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Border Collie',
        1000,
        'Happy Dog',
        1000,
        'Hungry Venom Dog',
        1000
      ]}
      wrapper="span"
      speed={40}
    repeat={Infinity}
    />
                    </h1>
                        <p className="text-[#FBEBD9] text-base sm:text-lg mb-6 lg:text-xl">
                                  I love food
                        </p>
                        <div>
                            <button
                            onClick={() => window.open("https://www.paypal.com/paypalme/bobozyu?locale.x=en_AU", "_blank")} 
                            className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-amber-500 via-red-500 to-purple-500  hover:bg-slate-200 text-white">
                                Feed Me</button>
                            <button 
                                onClick={() => {
                                const link = document.createElement("a");
                                link.href = "./images/projects/8.jpg"; // Make sure it's in /public
                                link.download = "bozyu.jpg";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                              }}
                            className="px-1 py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br from-amber-500 via-red-500 to-purple-500 hover:bg-slate-800 text-white mt-3 mb-6 sm:my-0">
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                    Download Bozyu</span>
                                </button>
                        </div>
            </motion.div>
            <motion.div 
            initial={{opacity:0.3, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}
             className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <img
                    src = "./images/bozyu.jpg"
                    alt = "bozyu"
                    className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={280}
                    height={280}
                    />
                </div>
            </motion.div>
        </div>
        </section>
    );
};

export default HeroSection;  