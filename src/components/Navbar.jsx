import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

const Navbar = () => {
    return (
        <header className="w-full mt-5">
            <nav
                className="w-full flex justify-between 
            items-center"
            >
                <Image
                    className="flex justify-center items-center"
                    src="/logo.svg"
                    alt="hero"
                    width={100}
                    height={100}
                />
                <CustomButton
                    title="Sign in"
                    styles="rounded-2xl bg-blue-500 text-white width w-fit "
                />
            </nav>
        </header>
    );
};

export default Navbar;
