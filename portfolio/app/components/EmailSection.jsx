import React from "react";
//import TelegramIcon from "../../../public/images/Telegram_logo.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () =>{
    return <section className="grid md:grid-cols-2 my-10 md:my-12 py-24 gap-4" id="contact">
        <div>
            <h5 className="text-2xl font-bold text-white my-2">
                Let&#39;s play!!!
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">I&#39;m currently looking for dogs / human to play with me, my inbox is always open. 
            Whether you have a question or just want to say woof, I&#39;ll try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://t.me/okkillbozyu">
                    <Image src="./images/Telegram_logo.svg" alt="find me at telegram" width={40} height={40} className="mr-3" />
                </Link>
                <Link href="/"> //https://www.instagram.com/gwfcloki/?igsh=Z2ljaXRiOGM0bjZx&utm_source=qr
                    <Image src="./images/Instagram_logo_2016.svg" alt="find me at instagram" width={40} height={40} />
                </Link>
            </div>
        </div>
    </section>;
};

export default EmailSection;
