"use client";
import React, {useState} from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import  {Bars3Icon, XMarkIcon}  from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import LanguageButton from "./LanguageButton";
import { useTranslations } from "next-intl";



const Navbar =() => {
    const t =useTranslations();

    const navLinks = [
        {
            title: t("about"),
            path:"#about",
        },
        {
            title: t("dog"),
            path:"#projects",
        },
        {
            title: t("contact"),
            path:"#contact",
        }
    ];

const [navbarOpen, setnavbarOpen] = useState(false);

    return(
        <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-slate-600   bg-opacity-20">
        <div className="flex  flex-wrap lg:py-4 items-center justify-between mx-auto px-4 py-2">
            <Link href={"/"} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md: pl-5 text-white font-semibold">
                {t("title")}
                </Link>
                <div className="flex flex-row">
                    <div className=" flex mr-5 items-center lg:mr-14 mt-0 sm:mr-4 md:mr-8">
                        <LanguageButton />
                    </div>
                <div className="mobile-menu block sm:hidden">
                    {
                       !navbarOpen ?  
                       (<button 
                        onClick={() => setnavbarOpen(true)}
                       className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                        <Bars3Icon className="h-5 w-5" />
                       </button>)
                        :
                        (<button 
                        onClick={() => setnavbarOpen(false)}
                        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                        <XMarkIcon className="h-5 w-5" />
                       </button>)
                    }
                </div>
            <div className="menu hidden sm:block sm:w-auto " id="navbar">
                <ul className="flex md:py-4 sm:mr-1 md:mr-4 lg:mr-6 sm:flex-row lg:space-x-8 mt-0 sm:space-x-1 md:space-x-4 ">
                    {navLinks.map((link, index) =>(
                        <li key={index}>
                            <NavLink href = {link.path} title={link.title} />
                        </li>
                    ))    
                    }
                </ul>
            </div>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>

    )
}

export default Navbar; 