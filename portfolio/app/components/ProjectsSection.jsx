"use client";
import React , {useState, useRef} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {motion, useInView} from "framer-motion";
import { useTranslations } from "next-intl";
import ProjectModal from "./ProjectModal";



const ProjectsSection = () => {
    const t =useTranslations();

    const projectTagsData = [
        {
            tag_name:t("all"),
            name:t("all")},
        {
            tag_name:t("bozyu"),
            name:"Bozyu"},
        {
            tag_name:t("border"),
            name:"Border Collie"},
        {
            tag_name:"Loki",
            name:"Loki"},
        {
            tag_name:"Luna",
            name:"Luna"},
        {
            tag_name:"Lulu",
            name:"Lulu"},
        {
            tag_name:"Fifi",
            name:"Fifi"},
        {
            tag_name:"Happy",
            name:"Happy"},
        {
            tag_name:t("golden"),
            name:"Golden Retriever"},
        {
            tag_name:"Pipi",
            name:"Pipi"}
    ];


    const projectData = [
        {
        id: 1,
        title:t("t1"),
        description: t("d1"),
        image: "./images/projects/1.jpg",
        tag: [t("all"), "Lulu","Loki"],
        gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
        previewUrl:"https://loki-pup.github.io/",
    },
    {
        id: 2,
        title:t("t2"),
        description: t("d2"),
        image: "./images/projects/2.jpg",
        tag: [t("all"), "Happy", t("golden")],
        gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
        previewUrl:"https://loki-pup.github.io/",
    },
    {
        id: 3,
        title:t("t3"),
        description: t("d3"),
        image: "./images/projects/3.jpg",
        tag: [t("all"), "Lulu", "Loki"],
        gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
        previewUrl:"https://loki-pup.github.io/",
    },
    {
        
            id: 4,
            title:t("t4"),
        description: t("d4"),
            image: "./images/projects/4.jpg",
            tag: [t("all"), "Lulu", t("bozyu"), t("border")],
            gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
        previewUrl:"https://loki-pup.github.io/",
    },
    {
        
        id: 5,
        title:t("t5"),
        description: t("d5"),
        image: "./images/projects/5.jpg",
        tag: [t("all"), "Fifi"],
        gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
        previewUrl:"https://loki-pup.github.io/",
    },{
        
        id: 6,
        title:t("t6"),
        description: t("d6"),
        image: "./images/projects/6.jpg",
        tag: [t("all"), "Lulu", t("bozyu"), t("border")],
        gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
        previewUrl:"https://loki-pup.github.io/",
    },{
        
        id: 7,
        title:t("t7"),
        description: t("d7"),
        image: "./images/projects/7.jpg",
        tag: [t("all"), "Lulu", t("bozyu"), t("border")],
        gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
        previewUrl:"https://loki-pup.github.io/",
    },{
        
        id: 8,
        title:t("t8"),
        description: t("d8"),
        image: "./images/projects/8.jpg",
        tag: [t("all"), "Lulu", t("bozyu"), t("border")],
        gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
        previewUrl:"https://loki-pup.github.io/",
    }, {
        
        id: 9,
        title:t("t9"),
        description: t("d9"),
        image: "./images/projects/9.jpg",
        tag: [t("all"), "Lulu", "Luna", t("border")],
        gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
        previewUrl:"https://loki-pup.github.io/",
    },
    {
        
        id: 10,
        title:t("t10"),
        description: t("d10"),
        image: "./images/projects/10.jpg",
        tag: [t("all"), "Fifi"],
        gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
        previewUrl:"https://loki-pup.github.io/",
    },
    {
        
        id: 11,
        title:t("t11"),
        description: t("d11"),
        image: "./images/projects/11.jpg",
        tag: [t("all"), "Lulu","Loki"],
        gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
        previewUrl:"https://loki-pup.github.io/",
    },
    {
        
        id: 12,
        title:t("t12"),
        description: t("d12"),
        image: "./images/projects/12.jpg",
        tag: [t("all"), "Lulu", "Luna", t("border")],
        gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
        previewUrl:"https://loki-pup.github.io/",
    },
    {
        
        id: 13,
        title:t("t13"),
        description: t("d13"),
        image: "./images/projects/13.jpg",
        tag: [t("all"), t("bozyu"),"Lulu", "Luna", t("border")],
        gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
        previewUrl:"https://loki-pup.github.io/",
    },
    {
        
        id: 14,
        title:t("t14"),
        description: t("d14"),
        image: "./images/projects/14.JPG",
        tag: [t("all"), "Pipi"],
        gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
        previewUrl:"https://loki-pup.github.io/",
    },
    {
        
        id: 15,
        title:t("t15"),
        description: t("d15"),
        image: "./images/projects/15.JPG",
        tag: [t("all"), "Happy", t("golden")],
        gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
        previewUrl:"https://loki-pup.github.io/",
    },
    {
        
        id: 16,
        title:t("t16"),
        description: t("d16"),
        image: "./images/projects/16.JPG",
        tag: [t("all"), "Pipi"],
        gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
        previewUrl:"https://loki-pup.github.io/",
    },
    {
        id: 17,
        title:t("t17"),
        description: t("d17"),
        image: "./images/projects/17.JPG",
        tag: [t("all"), "Loki","Lulu"],
        gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
        previewUrl:"https://loki-pup.github.io/",
    },
    ];


    const [tag, SetTag] = useState(t("all"));
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const cardVariants ={
        initial:{y:50, opacity:0},
        animate:{y:0, opacity:1},
    };

    const handleTagChange = (newTag) =>{
        SetTag(newTag);
    };

    const filteredProjects = projectData.filter((project) => 
        project.tag.includes(tag)
     );



     const [selectedProjectImg, setSelectedProjectImg] = useState(null);

     const handleProjectClick=(id) => {
         setSelectedProjectImg(id);
     };
 
     const handleCloseModal =() =>{
         setSelectedProjectImg(null);
     };
 
     const handleNextProject = () =>{
        //findIndex always starts at index 0
         const currentIndex = projectData.findIndex((project) =>project.id === selectedProjectImg);
 
         if (currentIndex === -1){
             return null;
         }
 
         const nextIndex = (currentIndex+1) % projectData.length;
 
         setSelectedProjectImg(projectData[nextIndex].id)
     };
 
     const handlePrevProject = () =>{
         const currentIndex = projectData.findIndex((project) =>project.id === selectedProjectImg);
 
         if (currentIndex === -1){
             return null;
         }
 
         const prevIndex = (currentIndex - 1 + projectData.length) % projectData.length;
 
         setSelectedProjectImg(projectData[prevIndex].id)
     };



    return(
        <section className="pt-16"  id="projects">
        <h2 className="text-center text-4xl font-bold text-white pt-6 mb-8 md:mb-10">
            {t("dog")}</h2>
        <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
            {projectTagsData.map((tags) => (
            <ProjectTag 
            key={tags.name}
            onClick={handleTagChange} 
            tag_name ={tags.tag_name}
            name={tags.tag_name} 
            isSelected ={tag === tags.tag_name} 
            //name={tags.name} 
            //isSelected ={tag === tags.name} 
            />
            ))}
        </div>
        <ul  ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) =>  (
        <motion.li 
        key={index}
        variants={cardVariants} 
        initial="initial" 
        animate={isInView ? "animate" : "initial"}
        transition={{duration:0.25, delay: index*0.4}}>
        <ProjectCard 
        id={project.id}
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image}
        tag ={project.tag}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        handleImg={handleProjectClick}
        />
        </motion.li>
    ))}</ul>
    {selectedProjectImg && (
        <ProjectModal
        project = {projectData.find((project) => project.id === selectedProjectImg)}
        onClose ={handleCloseModal}
        onNext = {handleNextProject}
        onPrev={handlePrevProject}
        />
    )}
        </section>
    )
};

export default ProjectsSection;
