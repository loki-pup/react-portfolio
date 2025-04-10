import React from "react";

const TabButton= ({active, selectTab, children}) => {
const buttonClasses = active ? 'text-[#8bdff7] px-1 py-1 bg-[#483C32]/30 border-b border-purple-500' : 'px-1 py-1 text-[#FBEBD9] '

    return(
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold ${buttonClasses}`}>
                {children}
                </p>
                </button>
    )
};

export default TabButton;
//t