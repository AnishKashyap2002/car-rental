import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <hr
                className="mt-10 bg-blue-500 h-[2px]
            opacity-[20%]"
            />
            <footer
                className="flex justify-between
             gap-10 items-center mt-5
    "
            >
                <div
                    className="flex flex-col 
            "
                >
                    <Image
                        src="/logo.svg"
                        alt="fuck"
                        height={50}
                        width={100}
                    />
                    <span>Made by Anish &copy;</span>
                </div>
                <div
                    className="flex justify-between
            items-center gap-2"
                >
                    <span>Privacy Policy |</span>
                    <span>Terms & Cond.</span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
