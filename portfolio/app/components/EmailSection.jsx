'use client';
import emailjs from '@emailjs/browser';
import React, { useRef } from "react";
//import TelegramIcon from "../../../public/images/Telegram_logo.svg";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslations } from 'next-intl';


const EmailSection = () =>{
    const form =useRef();
    const t = useTranslations();

    const sendEmail =(e) =>{
        e.preventDefault();

        emailjs
        .sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "bozyu",
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "bozyu_template",
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "ZMXwpTocLixGX4cGs"
        )
        .then(
            () =>{
                toast.success('Message sent successfully');
                e.target.reset();
            },
            (error) =>{
                toast.error('Failed to send: ' + error.text);
            }
        );
    };

    return <section className="grid md:grid-cols-2 my-10 md:my-12 py-24 gap-4" id="contact">
        <div>
            <h5 className="text-2xl md:text-3xl font-bold text-white my-2">
                {t("lplay")}
            </h5>
            <p className="text-[#FBEBD9] mb-4 max-w-md md:text-lg">
            {t("playy")}
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://t.me/okkillbozyu">
                    <Image src="./images/Telegram_logo.svg" alt="find me at telegram" width={40} height={40} className="mr-3" />
                </Link>
                <Link href="/">
                    <Image src="./images/Instagram_logo_2016.svg" alt="find me at instagram" width={40} height={40} />
                </Link>
            </div>
            </div>    
            <div>
                <form ref={form}  onSubmit={sendEmail} className="flex flex-col ">
                    <div className="mb-6">
                    <label htmlFor="email" className="text-[#FBEBD9] block mb-2 text-sm md:text-base font-medium">
                    {t("email")}</label>
                    <input name="email" type="email" id="email" required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                    placeholder="bobozyuau@gmail.com"/>
                    </div>
                    <div className="mb-6">
                    <label htmlFor="subject" className="text-[#FBEBD9] block mb-2 text-sm md:text-base font-medium">
                    {t("sub")}</label>
                    <input type="text" name="subject" id="subject" required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                    placeholder="Just saying woof"/>
                    </div>
                    <div className="mb-6">
                    <label htmlFor="message" className="text-[#FBEBD9] block mb-2 text-sm md:text-base font-medium">
                    {t("msg")}</label>
                    <input type="textarea" name="message" id="message" required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                    placeholder="Let's go get food!!!"/>
                    </div>
                    <button type="submit"
                    className="bg-amber-700/95 hover:bg-amber-800/95 text-[#FBEBD9] font-medium py-2.5 px-5 rounded-lg w-full">
                        {t("send")}
                    </button>
                </form>
                <ToastContainer position="top-center" autoClose={3000} />
            </div>
        
    </section>;
};

export default EmailSection;

 //https://www.instagram.com/gwfcloki/?igsh=Z2ljaXRiOGM0bjZx&utm_source=qr
