"use client";
import Image from "next/image";
import { calculateCarRent } from "@/utils";
import { CustomButton } from ".";
import { useState } from "react";
import { CarDetails } from ".";
import { generateCarImage } from "@/utils";

const CarCard = ({ car }) => {
    const { city_mpg, year, make, model, transmission, drive } = car;

    const carRent = calculateCarRent(city_mpg, year);

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className="group bg-slate-200
            hover:bg-slate-100
        text-black rounded-xl px-4 py-3 sm:w-[300px] w-full
        
        "
        >
            <div className="font-medium text-xl capitalize">
                <h2>
                    {make} {model}
                </h2>
            </div>
            <p className="mt-6 text-[32px] font-extrabold flex">
                <span className="font-bold self-start text-[14px]">$</span>
                {carRent}
                <span className="self-end text-[14px] font-bold ">/day</span>
            </p>
            <div className="w-full h-40 my-2 relative">
                <Image
                    src={generateCarImage(car)}
                    fill
                    alt="this is car model"
                    className="object-contain"
                />
            </div>
            <div className=" w-full mt-2">
                <div
                    className="flex group-hover:hidden
                justify-between w-full relative "
                >
                    <div className="flex flex-col gap-2 items-center">
                        <Image
                            src="/steering-wheel.svg"
                            width={20}
                            height={20}
                            alt="steering"
                        />
                        <p className="text-[14px]">
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <Image
                            src="/tire.svg"
                            width={20}
                            height={20}
                            alt="tire"
                        />
                        <p className="text-[14px]">{drive.toUpperCase()}</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <Image
                            src="/steering-wheel.svg"
                            width={20}
                            height={20}
                            alt="steering"
                        />
                        <p className="text-[14px]">{city_mpg} MPG</p>
                    </div>
                </div>
                <div className="group-hover:block hidden">
                    <CustomButton
                        title="View more"
                        styles="bg-blue-500 w-full text-center rounded-full
                        text-white"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <CarDetails
                isOpen={isOpen}
                closeModel={() => setIsOpen(false)}
                car={car}
            />
        </div>
    );
};

export default CarCard;
