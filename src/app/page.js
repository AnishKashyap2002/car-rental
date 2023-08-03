"use client";
import { useEffect, useState } from "react";
import { Hero } from "@/components";
import { SearchBar } from "@/components";
import { CustomFilter } from "@/components";
import fetchCars from "@/utils";
import CarCard from "@/components/CarCard";
import { fuels, yearsOfProduction as years } from "@/constants";
import { ShowMore } from "@/components";
import Image from "next/image";

export default function Home() {
    // const allCars = await fetchCars({
    //     manufacturer: searchParams?.manufacturer?.split(" ")?.join("+") || "",
    //     year: searchParams?.year || 2023,
    //     fuel: searchParams?.fuel || "",
    //     limit: searchParams?.limit || 10,
    //     model: searchParams?.model || "",
    // });

    const [allCars, setAllCars] = useState([]);
    const [loading, setLoading] = useState(false);

    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
    const [fuel, setFuel] = useState("");
    const [year, setYear] = useState(2023);

    const [limit, setLimit] = useState(10);

    const getCars = async () => {
        try {
            setLoading(true);
            const result = await fetchCars({
                manufacturer: manufacturer || "",
                year: year || 2023,
                fuel: fuel || "",
                limit: limit || 10,
                model: model || "",
            });
            console.log(result);
            setAllCars(result);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCars();
        console.log(manufacturer, "at this");
    }, [fuel, manufacturer, model, limit, year]);

    const isDataEmpty =
        !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <main className="">
            <Hero />
            <div className="flex flex-col mt-10">
                <div>
                    <h1
                        className="font-extrabold
                     text-4xl "
                    >
                        Car Catalouge
                    </h1>
                    <p className="mt-2">Expolore the cars you might like..</p>
                </div>
                <div
                    className=" justify-between items-center
                    sm:flex block mb-5
                mt-5"
                >
                    <SearchBar
                        setManufacturer={setManufacturer}
                        setModel={setModel}
                    />
                    <div className="flex items-center gap-5 sm:mt-0 mt-5">
                        <CustomFilter
                            setFilter={setFuel}
                            title="fuel"
                            options={fuels}
                        />
                        <CustomFilter
                            title="year"
                            setFilter={setYear}
                            options={years}
                        />
                    </div>
                </div>
                {allCars.length > 0 ? (
                    <div className="flex  flex-wrap w-full justify-center gap-10">
                        {allCars.map((car, index) => (
                            <CarCard
                                car={car}
                                key={index}
                            />
                        ))}
                        {loading && (
                            <div className="w-full flex justify-center">
                                <div>
                                    <Image
                                        src="/tire.svg"
                                        width={50}
                                        height={50}
                                        alt="loader"
                                        className="object-contain"
                                    />
                                    <p>Loding...</p>
                                </div>
                            </div>
                        )}
                        <ShowMore
                            pageNumber={(limit || 10) / 10}
                            isNext={(limit || 10) > allCars.length}
                            setLimit={setLimit}
                        />
                    </div>
                ) : (
                    <div>
                        <h1
                            className="font-bold
                        text-3xl text-black"
                        >
                            Oops.. No cars here :(
                        </h1>
                    </div>
                )}
            </div>
        </main>
    );
}
