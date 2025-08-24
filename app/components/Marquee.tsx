"use client"
import {cn} from "@/lib/utils";
import {Marquee} from "@/components/magicui/marquee";
import Image from "next/image";
import {useEffect, useState} from "react";

type PartnerLogo = {
    username?: string
    src: string
    width: number
    height: number
    alt: string
    href: string
}

const partnersLogos: PartnerLogo[] = [
    {
        username: "armadaCR",
        src: "/images/partners/armada-cr-logo.png",
        width: 500,
        height: 500,
        alt: "Logo armády České republiky",
        href: "https://acr.mo.gov.cz/"
    },
    {
        username: "ave",
        src: "/images/partners/ave-logo.png",
        width: 500,
        height: 262,
        alt: "Logo společnosti AVE",
        href: "https://praha.eu/magistrat"
    },
    {
        username: "cepro",
        src: "/images/partners/cepro-logo.png",
        width: 400,
        height: 300,
        alt: "Logo spolčnosti Čepro",
        href: "https://www.ceproas.cz/"
    },
    {
        username: "eurovia",
        src: "/images/partners/eurovia-logo.png",
        width: 500,
        height: 375,
        alt: "Logo společnosti EUROVIA CZ a.s.",
        href: "https://eurovia.vinci-construction.cz/en"
    },
    {
        username: "letisteVH",
        src: "/images/partners/letiste-vaclava-havla-logo.png",
        width: 500,
        height: 680,
        alt: "Logo pražského letiště Václava Havla",
        href: "https://www.prg.aero/#/"
    },
    {
        username: "praha",
        src: "/images/partners/praha-logo.svg",
        width: 652,
        height: 652,
        alt: "Logo magistrátu hlavního města Prahy",
        href: "https://praha.eu/magistrat"
    },
];

const firstRow = partnersLogos.slice(0, partnersLogos.length / 2);
const secondRow = partnersLogos.slice(partnersLogos.length / 2);

const ReviewCard = ({
                        src,
                        width,
                        height,
                        alt,
                        href,
                    }: PartnerLogo) => {
    return (
        <figure
            className={cn(
                "flex justify-center items-center w-16 h-16 md:w-24 md:h-24 cursor-pointer overflow-hidden mx-2",
            )}
        >
            <div className="flex flex-row items-center justify-center">
                <a href={href} target="_blank"><Image width={width} height={height} src={src} alt={alt}/></a>
            </div>
        </figure>
    );
}

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        setMatches(media.matches);

        const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
}


export function MarqueeDemo() {
    const isLarge = useMediaQuery("(min-width: 768px)")

    return (
        <div className="relative flex w-full flex-col overflow-hidden">
            {
                isLarge ? (
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {partnersLogos.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                ) : (
                    <>
                        <Marquee pauseOnHover className="[--duration:20s]">
                            {firstRow.map((review) => (
                                <ReviewCard key={review.username} {...review} />
                            ))}
                        </Marquee>
                        <Marquee reverse pauseOnHover className="[--duration:30s]">
                            {secondRow.map((review) => (
                                <ReviewCard key={review.username} {...review} />
                            ))}
                        </Marquee>
                    </>
                )
            }
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}
