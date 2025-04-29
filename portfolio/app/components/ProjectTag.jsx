import React from "react";

const ProjectTag = ({tag_name,name, onClick, isSelected}) =>{
    const buttonStyles = isSelected
    ? "text-[#FBEBD9] border-amber-400"
    : "	text-[#ffbf00]  border-slate-600 bg-stone-500/45 hover:border-[#FBEBD9] hover:text-stone-800 hover:bg-[#ffbf00]/85"
    return(
<button 
className={`${buttonStyles} rounded-full border-2 px-3.5 py-1.5 text-lg sm:px-5 sm:py-3 sm:text-xl cursor-pointer`}
onClick={() => onClick(name)}>
    {tag_name}
    </button>
    )
}

export default ProjectTag