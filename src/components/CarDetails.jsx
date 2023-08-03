"use client";

import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Head from "next/head";
import { generateCarImage } from "@/utils";

const CarDetails = ({ isOpen, car, closeModel }) => {
    return (
        <>
            <Transition
                appear
                as={Fragment}
                show={isOpen}
            >
                <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={closeModel}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacit-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"></div>
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto ">
                        <div
                            className="flex min-h-full items-center
                        justify-center p-4 text-center"
                        >
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-full max-w-lg rounded-2xl bg-white text-left max-h-[90vh]
                                transition-all flex flex-col gap-5 relative
                                 py-2 px-4 overflow-auto shadow-2xl"
                                >
                                    <button
                                        onClick={closeModel}
                                        className="absolute right-2 top-2 bg-white
                                    rounded-full  p-2 z-10"
                                    >
                                        <Image
                                            src="/close.svg"
                                            width={20}
                                            height={20}
                                            alt="close"
                                            className="object-contain"
                                        />
                                    </button>
                                    <div className="flex flex-col gap-3">
                                        <div
                                            className="w-full bg-blue-500
                                        h-40 rounded-lg relative "
                                        >
                                            <Image
                                                src={generateCarImage(car)}
                                                fill
                                                alt="this is car model"
                                                className="object-contain "
                                            />
                                        </div>
                                        <div className="flex gap-2 ">
                                            <div className="flex-1 relative w-full h-24">
                                                <Image
                                                    src={generateCarImage(
                                                        car,
                                                        "29"
                                                    )}
                                                    fill
                                                    alt="this is car model"
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div className="flex-1 self-end relative w-full h-24">
                                                <Image
                                                    src={generateCarImage(
                                                        car,
                                                        "33"
                                                    )}
                                                    fill
                                                    alt="this is car model"
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div className="flex-1 relative w-full h-24">
                                                <Image
                                                    src={generateCarImage(
                                                        car,
                                                        "13"
                                                    )}
                                                    fill
                                                    alt="this is car model"
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex-col gap-2">
                                        <h2 className="font-semibold text-lg capitalize">
                                            {car.make} {car.model}
                                        </h2>
                                        <div className="mt-2  gap-4">
                                            {/* iterating over an object */}
                                            {Object.entries(car).map(
                                                ([key, value]) => (
                                                    <div
                                                        className="flex justify-between gap-4
                                                w-full items-center "
                                                        key={key}
                                                    >
                                                        <h4 className="text-slate-700 capitalize">
                                                            {key
                                                                .split("_")
                                                                .join(" ")}
                                                        </h4>
                                                        <p className="capitalize font-semibold">
                                                            {value}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default CarDetails;
