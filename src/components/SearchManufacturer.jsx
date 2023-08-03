"use client";
import Image from "next/image";
import { useState, frangement } from "react";

import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({ selected, setSelected }) => {
    const [query, setQuery] = useState("");

    const filteredManufacturers =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) =>
                  item
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              );
    return (
        <div className="flex  w-full  flex-col relative  ">
            <Combobox
                value={selected}
                onChange={setSelected}
            >
                <div
                    className=" w-full flex items-center
                    bg-slate-200 px-6 py-4 rounded-xl
                "
                >
                    <Combobox.Button>
                        <Image
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            alt="fuck"
                            className="ml-4"
                        />
                    </Combobox.Button>
                    <Combobox.Input
                        className="ml-4 w-full h-full bg-transparent
                        outline-none"
                        placeholder="Seach manufacturer"
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}
                        displayValue={(selected) => selected}
                    />
                </div>
                <Transition
                    as={frangement}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                >
                    <Combobox.Options className="absolute bg-white z-20 w-full">
                        {!(filteredManufacturers.length === 0 && query != "") &&
                            filteredManufacturers.map((item) => (
                                <Combobox.Option
                                    key={item}
                                    value={item}
                                    className={({ active, selected }) =>
                                        ` w-full px-4 py-2
                                    ${
                                        active
                                            ? "bg-blue-500 text-white"
                                            : "text-black bg-green-200"
                                    }
                                     `
                                    }
                                >
                                    {item}
                                </Combobox.Option>
                            ))}
                    </Combobox.Options>
                </Transition>
            </Combobox>
        </div>
    );
};

export default SearchManufacturer;
