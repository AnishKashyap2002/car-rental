"use client";
import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
    const handleScroll = () => {
        console.log(working);
    };

    return (
        <div className="flex items-center min-h-[90vh]   flex-col ">
            <div
                className="flex justify-center
            flex-col "
            >
                <h1 className="text-[40px]">
                    Find the book, or rent a car - quickly and easily!
                </h1>
                <p className="text-[30px] font-sans font-light ">
                    Streamline your care rental experience with our effortless
                    care booking process..
                </p>
                <CustomButton
                    id="long-value-select"
                    instanceId="long-value-select"
                    title="Explore Cars"
                    handleClick={handleScroll}
                    styles="mt-10 rounded-2xl bg-blue-500 text-white width w-fit"
                />
            </div>
            {/* used the grow remember it man */}
            <div className="mt-5 object-contain overflow-hidden grow w-full relative z-20">
                <Image
                    src="/lamborgini.png"
                    fill
                    alt="hero-hai ye"
                    className="object-contain relative z-10"
                />
                <div className="w-fit">
                    <Image
                        src="/hero-bg.png"
                        fill
                        alt="bg"
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
