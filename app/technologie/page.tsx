"use client"

import {techData} from "@/app/data/techData";
import Image from "next/image";
import {useViewport} from "@/app/hooks/useViewport";
import {TextAnimate} from "@/components/magicui/text-animate";
import React from "react";

export default function TechPage() {
    const {width} = useViewport();
    const techEl = techData.map((tech, index) => {
        if (width < 768) {
            return (
                <div key={tech.name} className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="flex flex-col gap-4">
                        <h2>{tech.name}</h2>
                        <p>{tech.text}</p>
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <Image src={tech.src}
                               alt={tech.alt}
                               width={tech.width}
                               height={tech.height}
                               fetchPriority="high"
                               sizes="(max-width: 640px) 100vw,
                                        (max-width: 1024px) 90vw,
                                        1200px"
                        />
                    </div>
                </div>
            );
        } else {
            return index % 2 === 0 ? (
                <div key={tech.name} className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="flex flex-col gap-4">
                        <h2>{tech.name}</h2>
                        <p>{tech.text}</p>
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <Image src={tech.src}
                               alt={tech.alt}
                               width={tech.width}
                               height={tech.height}
                               className="max-h-150"
                               fetchPriority="high"
                               sizes="(max-width: 640px) 100vw,
                                        (max-width: 1024px) 90vw,
                                        1200px"
                        />
                    </div>
                </div>
            ) : (
                <div key={tech.name} className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="rounded-2xl overflow-hidden">
                        <Image src={tech.src} alt={tech.alt} width={tech.width} height={tech.height}
                               className="max-h-150"
                               fetchPriority="high"
                               sizes="(max-width: 640px) 100vw,
                                        (max-width: 1024px) 90vw,
                                        1200px"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2>{tech.name}</h2>
                        <p>{tech.text}</p>
                    </div>
                </div>
            );
        }
    });
    return <section className="flex flex-col gap-8 max-w-7xl mx-auto w-full">
        <TextAnimate animation="blurInUp" by="character" once as="h1" startOnView={true}>Naše Technologie</TextAnimate>
        <div className="flex flex-col w-full gap-16">
            {techEl}
        </div>
    </section>;
}