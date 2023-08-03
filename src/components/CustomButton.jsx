"use client";
import Image from "next/image";

const CustomButton = ({
    styles,
    handleClick,
    title,
    type,
    textStyles,
    rightIcon,
}) => {
    return (
        <button
            className={`
            flex justify-between px-4 py-2 font-bold font-serif ${styles}`}
            type={type}
            onClick={handleClick}
        >
            <span>{title}</span>
            {rightIcon && (
                <div className="w-6 h-6 relative ">
                    <Image
                        src={rightIcon}
                        fill
                        alt="this is button"
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    );
};

export default CustomButton;
