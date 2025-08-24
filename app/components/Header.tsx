"use client"
import { useEffect, useState } from "react";
import {Navbar1} from "@/app/components/Navigation";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className="max-w-7xl mx-auto w-full sticky top-0 z-50 bg-background"
        >
            <Navbar1 />
            <div className={`h-1 transition-shadow duration-300 ${
                scrolled ? "shadow-md" : "shadow-none"
            }`}></div>
        </header>
    );
}
