"use client"
import {useViewport} from "@/app/hooks/useViewport";

export default function HeroVideo(){
    const width = useViewport().width
    return (
        width > 768 && (
        <video
            src="/videos/hero-video.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            className="rounded-lg"
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                top: 0,
                left: 0,
            }}
        >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        )
    );
}