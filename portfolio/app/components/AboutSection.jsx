"use client";
import React from "react";
import Image from "next/image";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { useTranslations } from "next-intl";



const AboutSection = () =>{
    const t =useTranslations();


    const TAB_DATA =[
        {
        title:"Skills",
        id:"skills",
        content:(
            <ul className="list-disc pl-2">
                <li>{t("eat")}</li>
                <li>{t("sleep")}</li>
                <li>{t("play")}</li>
                <li>{t("love")}</li>
                <li>{t("herd")}</li>
            </ul>
        ),
        },    
        {
            title:"Education",
            id:"education",
            content:(
                <ul className="list-disc pl-2">
                    <li>{t("uni")}</li>
                    <li>{t("cnt")}</li>
                </ul>
            ),
            },     
            {
                title:"Certification",
                id:"certification",
                content:(
                    <ul className="list-disc pl-2">
                        <li>{t("birth")}</li>
                        <li>{t("va")}</li>
                    </ul>
                ),
                },
    ];


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
                <img src="./images/aboutBozyu.jpg" alt="bozyu venom" width={500} height={500} />
                <p className="text-[#FBEBD9] self-center text-center">
                    {t("venom")}</p>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
                    <h2 className="text-4xl font-bold text-white mb-4">{t("aboutme")}</h2>
                    <p className="text-base lg:text-lg font-semibold text-[#FBEBD9]">
                    {t("des")}
                        </p>
                     <div className="flex flex-row mt-8 ">
                        <TabButton 
                        selectTab={() => handleTabChange("skills")} active={tab ==="skills"} > 
                        {" "}
                        {t("skill")}{" "} 
                        </TabButton>
                        <TabButton 
                        selectTab={() => handleTabChange("education")} active={tab ==="education"} > 
                        {" "}
                        {t("edu")}{" "} 
                        </TabButton>
                        <TabButton 
                        selectTab={() => handleTabChange("certification")} active={tab ==="certification"} > 
                        {" "}
                        {t("cert")}{" "} 
                        </TabButton>
                        </div>
                        <div>
                            <div className="mt-8 px-1 py-1 ">
                                {TAB_DATA.find((t) => t.id ===tab).content}
                            </div>
                        
                        </div>   
                </div>
            </div>
        </section>
    )
};

export default AboutSection;
//bg-[#483C32]/30
