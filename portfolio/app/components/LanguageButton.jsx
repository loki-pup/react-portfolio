'use client';

import {useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

const LanguageButton = () =>{
    const router =useRouter();
    const locale = useLocale();

    //console.log(`Current router: ${router}`);

    const toggleLanguage = (currentLocale) =>{
        const newLocale = currentLocale === "en" ? "zh" : "en";

        //console.log(`Current Locale: ${currentLocale}, New Locale: ${newLocale}`);

        router.replace(`/${newLocale}`);
    };

    return <button
    onClick={() => toggleLanguage(locale)}
    className='text-lg md:text-2xl sm:text-xl sm:text-[#FBEBD9] text-center text-slate-200 hover:text-white font-medium'>
        粤/EN
    </button>

};

export default LanguageButton;