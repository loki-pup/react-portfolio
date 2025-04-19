import React from "react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ProjectModal({ project, onClose, onNext, onPrev }) {
    const t = useTranslations();

    const modalRef = useRef();

    const handleOutsideClick = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleOutsideClick}
            ref={modalRef}>
            <div
                ref={modalRef}
                className="relative bg-gray-900 rounded-lg max-w-4xl w-10/12 max-h-[90vh] overflow-y-auto p-12 h-10/12"
                onClick={(e) => e.stopPropagation()}>
                    <button
                            onClick={onPrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/50 rounded-full text-white hover:text-[#FBEBD9] p-2 hover:bg-gray-800/70 transition-colors translate-x-[30%]">
                            <ChevronLeft size={24} />
                        </button>
                <div className="relative md:pl-8 mb-6">
                    <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                    <button
                        onClick={onClose}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white translate-x-[90%]
                        hover:text-[#FBEBD9] rounded-full p-2 bg-gray-800 
                        hover:bg-gray-800/70 transition-colors">
                        <X size={24} />
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="space-y-4 md:w-1/3 md:pl-8">
                        <p className="text-gray-300 text-lg">
                            {project.description}
                        </p>
                        <div>
                            <h3 className="font-semibold mb-2 text-lg text-white">
                                {t("dogtag")}
                                </h3>
                            <ul className="list-disc list-inside">
                                {project.tag.map((eachTag, index) => (
                                    <li
                                        key={index}
                                        className="text-gray-300 text-lg">
                                        {eachTag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="relative h-full w-full md:w-2/3 md:pr-8">
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{
                                width: '95%',
                                height: '95%',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                    <button
                            onClick={onNext}
                            className="absolute  top-1/2 -translate-y-1/2 bg-gray-800/50 rounded-full text-white hover:text-[#FBEBD9] p-2 hover:bg-gray-800/70 transition-colors right-0 -translate-x-[30%]">
                            <ChevronRight size={24} />
                        </button>
                </div>
            </div>
        </div>
    );

}
