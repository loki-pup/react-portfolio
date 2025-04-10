"use client";
import React from "react";
import Image from "next/image";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA =[
    {
    title:"Skills",
    id:"skills",
    content:(
        <ul className="list-disc pl-2">
            <li>Eat</li>
            <li>Sleep</li>
            <li>Play</li>
            <li>Love</li>
            <li>Herd</li>
        </ul>
    ),
    },    {
        title:"Education",
        id:"education",
        content:(
            <ul className="list-disc pl-2">
                <li>Bozyu uni</li>
                <li>Bozyu country</li>
            </ul>
        ),
        },     {
            title:"Certification",
            id:"certification",
            content:(
                <ul className="list-disc pl-2">
                    <li>Bozyu birth certificate</li>
                    <li>Bozyu vaccination certificate</li>
                </ul>
            ),
            },
];

const AboutSection = () =>{
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) =>{
        startTransition(() => {
            setTab(id);
        }        
    );
    };

    return (
        <section className="text-[#8bdff7] pt-8" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 ">
            <div className="mt-4 md:mt-0 text-center flex flex-col h-full">
                <Image src="./images/aboutBozyu.jpg" alt="bozyu venom" width={500} height={500} />
                <p className="text-[#FBEBD9]">Bozyu looks like a Venom with her little tongue out</p>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg font-semibold text-[#FBEBD9]">
                        I am bozyu, a happy border collie.
                        </p>
                     <div className="flex flex-row mt-8 ">
                        <TabButton 
                        selectTab={() => handleTabChange("skills")} active={tab ==="skills"} > 
                        {" "}
                        Skills{" "} 
                        </TabButton>
                        <TabButton 
                        selectTab={() => handleTabChange("education")} active={tab ==="education"} > 
                        {" "}
                        Education{" "} 
                        </TabButton>
                        <TabButton 
                        selectTab={() => handleTabChange("certification")} active={tab ==="certification"} > 
                        {" "}
                        Certification{" "} 
                        </TabButton>
                        </div>
                        <div>
                            <div className="mt-8 px-1 py-1 bg-[#483C32]/30">
                                {TAB_DATA.find((t) => t.id ===tab).content}
                            </div>
                        
                        </div>   
                </div>
            </div>
        </section>
    )
};

export default AboutSection;