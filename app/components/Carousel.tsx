"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";
import {techData} from "@/app/data/techData";
import Link from "next/link";


export default function CarouselAutoPlay() {

    const carouselItems = techData.map((tech, index) => (
        <CarouselItem key={index} className="min-h-50 md:h-70 md:max-w-95 min-w-50 rounded-lg relative
        overflow-hidden hover:shadow-lg bg-blue-300 group">
            <Image src={tech.src} alt={tech.alt} fill={true} className="object-cover object-center">
            </Image>
            <div
                className="
            absolute inset-0
            bg-black/0 group-hover:bg-black/30
            transition-colors duration-300
          "
            >
                <div
                    className="
              opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-300 flex flex-col justify-end h-full p-8
            "
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="text-white text-shadow-lg">{tech.name}</h3>
                        <Button size="sm" className="self-start mt-2" variant="outline" >
                            <Link href="/technologie" className="font-medium">Zjistit více</Link> <ChevronRight className="ml-2 h-4 w-4"/>
                        </Button>
                    </div>
                </div>
            </div>
        </CarouselItem>
    ));
    return (
        <Carousel
            opts={{
                align: "end",
                loop: true,
            }}
            plugins={[
            Autoplay({
                delay: 3000,
            }),
        ]}>
            <CarouselContent className="p-12 gap-6 w-full">
                {carouselItems}
            </CarouselContent>
            <CarouselPrevious variant="ghost"/>
            <CarouselNext variant="ghost"/>
        </Carousel>
    )
}