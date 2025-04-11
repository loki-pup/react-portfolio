"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => {return import ("react-animated-numbers")}, {ssr: false});

const achievementList = [
    {
        metric:"Age",
        value:"7",
        postfix:"+"
    },
    {
        metric:"Weight",
        value:"20",
        postfix:"+" 
    },
    {
        metric:"Toys",
        value:"100",
        postfix:"+"
    },
    {
        prefix:"~",
        metric:"Beds",
        value:"4"
    }
];

//sm:bg-slate-500/30

const AchievementSection = () =>{
    return (
        <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-4 ">
            <div className=" sm:border-slate-500/40 sm:border rounded-md py-8 px-16 sm:px-10 flex flex-col gap-5 sm:flex-row items-center justify-between">
            {achievementList.map((achievement, index) => {
                return (
                    <div 
                    key={index}
                    className="flex flex-col items-center justify-center mx-4 ">
                        <h2 className="text-[#FBEBD9] text-3xl sm:text-4xl sm:text-amber-600/95 font-bold flex flex-row ">
                            {achievement.prefix}
                            <AnimatedNumbers
                            includeComma
                            animateToNumber={parseInt(achievement.value)}
                            locale="en-US"
                            className="text-[#FBEBD9]  text-3xl sm:text-4xl sm:text-amber-600/95 font-bold"
                            configs ={(_, index) =>{
                                return{
                                    mass:1,
                                    friction:100,
                                    tension: 140*(index+1),
                                };
                            }
                        }
                        />
                        {achievement.postfix}
                            </h2>
                        <p className="text-[#8e969c] sm:text-yellow-700/80 font-semibold text-base sm:text-lg">{achievement.metric}</p>
                    </div>
                );
        
            })}
            </div>
        </div>
    )
};

export default AchievementSection;