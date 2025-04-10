import React from "react";

const ProjectTag = ({name, onClick, isSelected}) =>{
    const buttonStyles = isSelected
    ? "text-white border-purple-500"
    : "	text-[#ffbf00]  border-slate-600 bg-stone-500/45 hover:border-white hover:text-stone-800 hover:bg-[#ffbf00]/85"
    return(
<button 
className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
onClick={() => onClick(name)}>
    {name}
    </button>
    )
}

export default ProjectTag