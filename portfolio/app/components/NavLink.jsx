import Link from "next/link";

const NavLink = ({ href, title}) => {
    return(
    <Link 
    href={href} 
    className="block py-2 pl-3 sm:px-2 text-[#FBEBD9] sm:text-xl md:text-2xl rounded md:p-0 md:pr-4 lg:pr-8 hover:text-white">
        {title}
        </Link>
    );
};

export default NavLink;