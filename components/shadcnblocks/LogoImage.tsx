import Image from 'next/image'
import {JSX} from "react";

export default function LogoImage({ src, alt, title, className }: { src: string; alt: string, title?: string, className?: string }): JSX.Element {
    return (<Image src={src} alt={alt} title={title} width={40} height={40 } className={className} />)
}