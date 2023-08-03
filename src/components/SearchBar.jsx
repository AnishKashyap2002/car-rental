"use client";
import { useEffect, useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ styles }) => {
    return (
        <button
            type="submit"
            className={`-ml-3 z-10 ${styles}`}
        >
            <Image
                src="/magnifying-glass.svg"
                alt="search"
                width={40}
                height={40}
                className="object-contain"
            />
        </button>
    );
};

const SearchBar = ({ setModel, setManufacturer }) => {
    const router = useRouter();

    const [searchManufacturer, setSearchManufacturer] = useState("");

    const [searchModel, setSearchModel] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        if (!searchManufacturer) {
            return alert("Fill the form...");
        }
        setModel(searchModel);
        setManufacturer(searchManufacturer);
    };

    const unpdateSearchParams = (model, manufacturer) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (model) {
            searchParams.set("model", model);
        } else {
            searchParams.delete("model");
        }
        if (manufacturer) {
            searchParams.set("manufacturer", manufacturer);
        } else {
            searchParams.delete("manufacturer");
        }
        const newPathName = `?${searchParams.toString()}`;

        router.push(newPathName);
    };

    useEffect(() => {
        console.log(searchManufacturer);
    }, [searchManufacturer]);

    return (
        <form
            onSubmit={handleSearch}
            className="w-full"
        >
            <div className=" flex gap-2 h-fit flex-col sm:flex-row w-full max-w-[1000px]  ">
                <div className="flex-1 flex  ">
                    <SearchManufacturer
                        selected={searchManufacturer}
                        setSelected={setSearchManufacturer}
                    />
                </div>

                {/* here i did h-fit */}
                <div className="flex flex-1 justify-between bg-slate-200 px-4 py-2 rounded-xl h-fit ">
                    <div className="flex ">
                        <Image
                            src="/model-icon.png"
                            width={24}
                            height={24}
                            className="object-contain"
                            alt="carmodel"
                        />
                        <input
                            type="text"
                            name="model"
                            value={searchModel}
                            onChange={(e) => setSearchModel(e.target.value)}
                            className="bg-transparent ml-4 outline-none"
                            placeholder="Tiguan"
                        />
                    </div>
                    <SearchButton />
                </div>
            </div>
        </form>
    );
};

export default SearchBar;
