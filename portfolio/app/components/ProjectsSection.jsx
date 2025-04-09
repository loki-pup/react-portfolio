import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
    {
    id: 1,
    title:"Loki shower",
    description: "Loki's first time shower",
    image: "/images/projects/1.jpg",
    tag: ["All", "Lulu","Loki"],
    gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
    previewUrl:"https://loki-pup.github.io/",
},
{
    id: 2,
    title:"Happy",
    description: "Happy the golden retriever",
    image: "/images/projects/2.jpg",
    tag: ["All", "Happy", "Golden Retriever"],
    gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
    previewUrl:"https://loki-pup.github.io/",
},
{
    id: 3,
    title:"Loki cool",
    description: "Young Loki",
    image: "/images/projects/3.jpg",
    tag: ["All", "Lulu", "Loki"],
    gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
    previewUrl:"https://loki-pup.github.io/",
},
{
    
        id: 4,
        title:"Bozyu Bone",
        description: "Bozyu and the bone",
        image: "/images/projects/4.jpg",
        tag: ["All", "Lulu", "Bozyu", "Border Collie"],
        gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
    previewUrl:"https://loki-pup.github.io/",
},
{
    
    id: 5,
    title:"Fifi",
    description: "Fifi is smelly",
    image: "/images/projects/5.jpg",
    tag: ["All", "Fifi"],
    gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
    previewUrl:"https://loki-pup.github.io/",
},{
    
    id: 6,
    title:"Bozyu Ice cream",
    description: "Bozyu and the ice cream",
    image: "/images/projects/6.jpg",
    tag: ["All", "Lulu", "Bozyu", "Border Collie"],
    gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
    previewUrl:"https://loki-pup.github.io/",
},{
    
    id: 7,
    title:"Bozyu frisbee",
    description: "Bozyu and the frisbee",
    image: "/images/projects/7.jpg",
    tag: ["All", "Lulu", "Bozyu", "Border Collie"],
    gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
    previewUrl:"https://loki-pup.github.io/",
},{
    
    id: 8,
    title:"Bozyu",
    description: "Bozyu thinks you're idiot",
    image: "/images/projects/8.jpg",
    tag: ["All", "Lulu", "Bozyu", "Border Collie"],
    gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
    previewUrl:"https://loki-pup.github.io/",
}, {
    
    id: 9,
    title:"Luna",
    description: "Cute Luna",
    image: "/images/projects/9.jpg",
    tag: ["All", "Lulu", "Luna", "Border Collie"],
    gitUrl:"https://loki-pup.github.io/htmltest/html/test.html",
    previewUrl:"https://loki-pup.github.io/",
},
]

const ProjectsSection = () => {
    return(
        <>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <button>All</button>
            <button>Bozyu</button>
            <button>Loki</button>
            <button>Luna</button>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">{projectData.map((project) =>  (
        <ProjectCard 
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image}
        //tags ={project.tag}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        />
    ))}</div>
        </>
    )
};

export default ProjectsSection;