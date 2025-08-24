import {Logo, LogoImage, LogoText} from "@/components/shadcnblocks";
import Image from "next/image";
import Link from "next/link";

interface MenuItem {
    title: string;
    links: {
        text: string;
        url: string;
    }[];
}

interface Footer2Props {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    tagline?: string;
    menuItems?: MenuItem[];
    copyright?: string;
    bottomLinks?: {
        text: string;
        url: string;
    }[];
}

const Footer2 = ({
                     logo = {
                         url: "/",
                         src: "/images/logos/logo.png",
                         alt: "Logo firmy Schwakov",
                         title: "schwakov.com",
                     },
                     tagline = "Components made easy.",
                     menuItems = [
                         {
                             title: "Odkazy:",
                             links: [
                                 {text: "Služby", url: "/certifikace"},
                                 {text: "Technologie", url: "/technologie"},
                                 {text: "Certifikace", url: "/certifikace"},
                             ],
                         },
                     ],
                     copyright = "© 2025 schwakov.com. All rights reserved.",
                     bottomLinks = [
                         {text: "Terms and Conditions", url: "#"},
                         {text: "Privacy Policy", url: "#"},
                     ],
                 }: Footer2Props) => {
    return (
        <section>
            <div className="container">
                <footer>
                    <div className="flex flex-col">
                        <div className="col-span-2 mb-8 lg:mb-0">
                            <div className="flex items-center gap-2 lg:justify-start">
                                <Link href={logo.url} className="flex items-center gap-2">
                                    <Image src={logo.src} alt={logo.alt} width={500} height={104} className="max-h-8 max-w-36"></Image>
                                </Link>
                            </div>
                            <p className="mt-4 font-bold">Bezpečná úprava vody v terénu</p>
                        </div>
                        {menuItems.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <ul className="text-muted-foreground flex items-center justify-center gap-8">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="hover:text-primary font-medium flex items-center justify-center"
                                        >
                                            <a href={link.url}>{link.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div
                        className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
                        <p>{copyright}</p>
                        <ul className="flex gap-4">
                            {bottomLinks.map((link, linkIdx) => (
                                <li key={linkIdx} className="hover:text-primary underline">
                                    <a href={link.url}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export {Footer2};

