import Link from 'next/link'
import React from "react";

export default function Logo({url, children}: {url: string, children: React.ReactNode}) {
    return (
        <Link href={url} passHref>
            {children}
        </Link>
    )
}