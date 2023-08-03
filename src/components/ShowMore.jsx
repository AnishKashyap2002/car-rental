"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { updatedSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext, setLimit }) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        setLimit(newLimit);
    };
    return (
        <div className="mt-5 flex items-center justify-center w-full">
            {!isNext && (
                <div
                    onClick={handleNavigation}
                    className="bg-blue-600 rounded-full
            text-white font-serif px-4 py-2 cursor-pointer"
                >
                    Show more
                </div>
            )}
        </div>
    );
};

export default ShowMore;
