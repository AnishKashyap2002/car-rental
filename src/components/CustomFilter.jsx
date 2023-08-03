"use client";

import React, { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { updatedSearchParams } from "@/utils";

const CustomFilter = ({ title, options, setFilter }) => {
    const [selected, setSelected] = useState(options[0]);
    const router = useRouter();

    const handleUpdateParams = (title, e) => {
        const newPathName = updatedSearchParams(
            title.toLowerCase(),
            e.value.toLowerCase()
        );

        router.push(newPathName);
    };
    return (
        <div className="w-fit h-fit">
            <Listbox
                value={selected}
                onChange={(e) => (setSelected(e), setFilter(e.value))}
            >
                <div className="z-10 relative">
                    <Listbox.Button
                        className="flex shadow-md
                    px-4 py-2 "
                    >
                        <span>{selected.title}</span>
                        <Image
                            src="/chevron-up-down.svg"
                            width={20}
                            height={20}
                            alt="up down"
                            className="object-contain ml-4"
                        />
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opaciity-0"
                    >
                        <Listbox.Options className="bg-white shadow-md mt-2 absolute ">
                            {options.map((option, index) => (
                                <Listbox.Option
                                    value={option}
                                    key={index}
                                    className={({ active }) => `cursor-pointer 
                                 py-1 text-center px-4
                                ${
                                    active
                                        ? "bg-blue-600 text-white"
                                        : "bg-white"
                                }`}
                                >
                                    {({ selected }) => (
                                        <span
                                            className={`${
                                                selected &&
                                                "text-slate-600 font-bold"
                                            }`}
                                        >
                                            {option.title}
                                        </span>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};

export default CustomFilter;
