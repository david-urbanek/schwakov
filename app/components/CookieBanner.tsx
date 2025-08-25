"use client";
import { useState, useEffect } from "react";
import {CookieIcon} from "lucide-react";
import Link from "next/link";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "true");
        setVisible(false);
        // sem můžeš vložit inicializaci Google Analytics
    };

    const declineCookies = () => {
        localStorage.setItem("cookie-consent", "false");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:right-auto md:w-96 p-4 bg-white shadow-lg rounded-lg text-sm flex flex-col gap-3 z-50">
            <div className="flex flex-col justify-center items-center gap-4">

                <div className="flex gap-4">
                    <CookieIcon className="min-h-8 min-w-8 text-blue-500"></CookieIcon>
                    <p className="font-bold">
                    Tento web používá soubory cookies k analýze návštěvnosti prostřednictvím
                    služby Google Analytics. Kliknutím na{" "}
                    <span className="font-semibold">Souhlasím</span> nám pomůžete
                    zlepšovat obsah. Více informací najdete v {""}
                    <Link href="/ochrana-osobnich-udaju" className="underline font-medium">
                        Zásadách ochrany osobních údajů
                    </Link>
                </p></div>

            </div>
            <div className="flex justify-end gap-2">
                <button
                    onClick={declineCookies}
                    className="px-4 py-1 border rounded-lg hover:bg-gray-100"
                >
                    Nesouhlasím
                </button>
                <button
                    onClick={acceptCookies}
                    className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Souhlasím
                </button>
            </div>
        </div>
    );
}
