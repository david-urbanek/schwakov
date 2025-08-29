import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Technologie | Schwakov",
    description: "Moderní technologie společnosti Schwakov pro úpravu vody. Inovativní a spolehlivá řešení navržená pro náročné podmínky v terénu.",
};

export default function TechLayout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}