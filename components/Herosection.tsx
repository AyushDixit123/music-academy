import React from "react";
import { cn } from "@/utils/cn";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";

export function Hero() {
    const words = 'Explore the world of music';
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className="p-4 relative z-10 w-full text-center">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    <TextGenerateEffect words={words} />
                </h1>
                <p className="mt-4 font-normal text-base">
                    Dive into our comprehensive music course to introduce yourself to the art of music. <br />
                    Unlock your true potential and refine your skills.
                </p>
                <div className="mt-4">
                    <Link href='/courses'>
                        <Button className="dark:bg-black">Explore courses</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
