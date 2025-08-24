import {Button} from "@/components/ui/button";
import { TextAnimate } from "@/components/magicui/text-animate";
import {
    Card,
    CardContent,

} from "@/components/ui/card"
import {
    ArrowDownToLine,
    BrushCleaning,
    Bubbles,
    Car, CarIcon,
    Droplets,
    RefreshCcw,
    ShieldAlert
} from "lucide-react";
import type {LucideIcon} from "lucide-react"
import {MarqueeDemo} from "@/app/components/Marquee";
import Image from "next/image";
import CarouselAutoPlay from "@/app/components/Carousel";
import React, {JSX} from "react";
import Link from "next/link";
import HeroVideo from "@/app/components/HeroVideo";

type HeroItem = { heading: string; text: string; icon: LucideIcon };
type ServiceItem = {
    heading: string;
    text: string;
    src: string,
    alt: string,
    width: number,
    height: number,
    icon: LucideIcon
};
type TechItem = { text: string; icon: LucideIcon };

export default function Home() {
    const hero: HeroItem[] = [
        {
            heading: "Mobilní nasazení",
            text: "Jsme u vás do 24 hodin kdekoli v ČR",
            icon: Car
        },
        {
            heading: "Bezpečnost a certifikace",
            text: "Pracujeme dle platné legislativy a norem – dokumentaci dodáváme standardně",
            icon: ShieldAlert
        },
        {
            heading: "Udržitelnost",
            text: "Minimalizujeme vývoz odpadů a snižujeme uhlíkovou stopu",
            icon: RefreshCcw
        },
    ]

    const services: ServiceItem[] = [
        {
            heading: "Úprava skládkových vod",
            text: "Rychlé a bezpečné odčerpání a úprava kontaminovaných vod přímo v terénu – bez nutnosti složité logistiky",
            src: "/images/services/skladkove-vody.jpg",
            width: 640,
            height: 427,
            alt: "Znečištěný vodní tok plný odpadků",
            icon: BrushCleaning
        },
        {
            heading: "Úprava a odstranění kapalných odpadů",
            text: "Mobilní technologie pro průmyslové provozy – od olejů po směsi chemických látek, včetně laboratorních analýz",
            src: "/images/services/kapalne-odpady.jpg",
            width: 800,
            height: 533,
            alt: "Znečištěný vodní tok plný odpadků uprostřed industrialní zóny",
            icon: CarIcon
        },
        {
            heading: "Úprava rybníků a vodních nádrží",
            text: "Citlivé sanační zásahy ve vodním prostředí s důrazem na biodiverzitu a lokální ekosystém",
            src: "/images/services/rybniky-nadrze.jpg",
            width: 800,
            height: 530,
            alt: "Znečištěný rybník plny odpadků v pozadí rafinerie",
            icon: Droplets
        },
    ]

    const tech: TechItem[] = [
        {
            text: "On-site testy kvality vody a laboratorní analýzy",
            icon: ArrowDownToLine
        },
        {
            text: "Vakuové čističny, mobilní filtrace a dočištění",
            icon: Bubbles
        },
        {
            text: "Evidence a předávací protokoly v digitální podobě",
            icon: CarIcon
        }

    ]


    const heroEl: JSX.Element[] = hero.map((item: HeroItem, index: number) => (
        <Card key={`${index}`}
              className=" max-w-[160px] flex flex-col justify-between items-center p-2  gap-2 md:p-4 md:max-w-[220px] transform transition duration-300
                hover:scale-105 hover:shadow-lg">
            <div className="rounded-full h-12 w-12 bg-blue-100 flex justify-center items-center">
                <item.icon className="h-8 w-8"/>
            </div>
            <CardContent className="text-center p-0 flex flex-col gap-2">
                <h3 className="font-semibold text-black">
                    {item.heading}
                </h3>
                <p>{item.text}</p>
            </CardContent>
        </Card>
    ))

    const servicesEl: JSX.Element[] = services.map((item: ServiceItem, index: number) => (
        <Card key={index}
              className="group flex flex-col justify-center items-center max-w-100 p-0 pb-4 gap-2 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">

            <div className="px-0 overflow-hidden">
                <Image src={item.src} alt={item.alt}
                       width={item.width} height={item.height}
                       className="object-cover rounded-t-xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
            </div>
            <CardContent className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <item.icon className="min-h-8 min-w-8 text-blue-500"/>
                    <h3 className="font-semibold text-lg text-gray-900">{item.heading}</h3>
                </div>
                <p className="font-normal text-gray-600">{item.text}</p>
            </CardContent>
        </Card>
    ))

    const techEl = tech.map((item: TechItem, index: number) => (
        <div key={index} className={`flex items-center gap-2 md:gap-4 p-2 ${index === tech.length - 1 ? null : "md:border-r-2 border-gray-200"}`}>
            <item.icon className="min-h-6 min-w-6 md:min-h-8 md:min-w-8 text-blue-500"/>
            <p className="text-black font-medium md:text-lg">{item.text}</p>
        </div>
    ));

    return (
        <>
            {/* Hero section */}
                <section className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-center">
                    {/* Hero section content*/}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6">

                            <div
                                className="bg-gray-100 rounded-2xl py-2 px-4 text-center font-medium max-w-3/4 mx-auto">
                                <p>Mobilní řešení pro úpravu průmyslových vod</p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <TextAnimate animation="blurInUp" by="word" once as="h1" startOnView={true}>Bezpečná úprava vody v terénu</TextAnimate>

                                <h3 className="font-medium text-gray-500">Odstraňujeme nebezpečné látky
                                    a chráníme životní prostředí. Přijedeme, vyřešíme, odjedeme</h3>


                                <Button className="self-start">
                                    <Link href="#contact">
                                    Kontaktujte nás
                                    </Link>
                                </Button>


                            </div>

                        </div>
                        {/* Hero section cards*/}
                        <div className="flex items-center justify-center gap-2 md:gap-4">
                            {heroEl}
                        </div>
                    </div>
                    {/* Hero section video*/}
                    <div className="hidden md:flex lg:min-w-100">
                        <HeroVideo></HeroVideo>
                    </div>
                </section>
            {/* Partner section*/}
                <section className="flex flex-col gap-16">
                    <div className="flex flex-col gap-1">
                        <h3>Důvěřují nám</h3>
                        <TextAnimate animation="blurInUp" by="word" once as="h2" startOnView={true} delay={0.3}>Naši obchodní partneři</TextAnimate>
                    </div>
                    <MarqueeDemo></MarqueeDemo>
                </section>
                {/* Services section*/}
                <section className="flex flex-col gap-16" id="services">
                    <div>
                        <div className="flex flex-col gap-1">
                            <h3>Jaké služby poskytujeme?</h3>
                            <TextAnimate animation="blurInUp" by="word" once as="h2" startOnView={true} delay={0.3}>Komplexní úprava vod a kapalných odpadů</TextAnimate>

                        </div>
                        <p className="font-medium text-gray-600">Nasazujeme mobilní řešení pro průmysl stavebnictví i
                            veřejný sektor</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        {servicesEl}
                    </div>
                </section>
                {/* Technology section*/}
                <section className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <h3>Technologie</h3>
                        <TextAnimate animation="blurInUp" by="word" once as="h2" startOnView={true} delay={0.3}>Bezpečná a rychlá realizace v terénu</TextAnimate>

                        <p className="font-medium text-gray-600">Kombinujeme čerpací a filtrační jednotky, sorpční
                            materiály
                            a chemickou úpravu podle povahy
                            znečištění</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col w-full gap-2 md:grid md:grid-cols-3 md:gap-x-4">
                            {techEl}
                        </div>
                        <div className="max-w-full px-12">
                            <CarouselAutoPlay></CarouselAutoPlay>
                        </div>
                    </div>
                </section>
        </>
    );
}
