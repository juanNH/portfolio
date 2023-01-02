import Link from 'next/link';
import { useState } from 'react';
import NavLinks from './navLinks/NavLinks';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="bg-white">
            <div className="flex items-center font-medium justify-around">
                <div className="z-50 p-5 md:w-auto w-full flex justify-between">
                    {/*  <img src={Logo} alt="logo" className="md:cursor-pointer h-9" /> */}
                    <h1 className="text-black">asdas</h1>
                    <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                        {/* <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon> */}
                        {open
                            ? <AiOutlineClose className="text-black" />
                            : <AiOutlineMenu className="text-black" />
                        }

                    </div>
                </div>
                <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
                    <li>
                        <Link href="/" className="py-7 px-3 inline-block text-black">
                            Home
                        </Link>
                    </li>
                    <NavLinks />
                </ul>

                {/* Mobile nav */}
                <ul
                    className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
                >
                    <li>
                        <Link href="/" className="py-7 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                    <NavLinks />
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;