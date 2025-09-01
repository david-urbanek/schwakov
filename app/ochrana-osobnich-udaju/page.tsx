import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Ochrana osobních údajů | Schwakov",
    description: "Seznamte se s tím, jak společnost Schwakov nakládá s osobními údaji v souladu s GDPR. Transparentně popisujeme, jaké údaje shromažďujeme, jak je chráníme a jaká máte práva.",
};

export default function privacyPolicy(){
    return(
        <>
            <div>
                <h1 className="text-3xl font-bold mb-8">
                Zásady ochrany osobních údajů
            </h1>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">SCHWÄKOV s. r. o.</h2>
                    <p>
                        Správcem osobních údajů je společnost{" "}
                        <strong>SCHWÄKOV s. r. o.</strong>, Průmyslová 2291/9a, 568 02
                        Svitavy, Česká republika. <br/>
                        IČ: 28770552, DIČ: CZ28770552 <br/>
                        Kontaktní email:{" "}
                        <a
                            href="mailto:schwakov@seznam.cz"
                            className="text-blue-600 underline"
                        >
                            schwakov@seznam.cz
                        </a>
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">2. Jaké údaje zpracováváme</h2>
                    <p>
                        Na tomto webu používáme službu Google Analytics, která prostřednictvím
                        souborů cookies shromažďuje informace o návštěvě webových stránek,
                        například:
                    </p>
                    <ul className="list-disc list-inside mt-2 ml-2">
                        <li>anonymizovanou IP adresu</li>
                        <li>typ zařízení a prohlížeče</li>
                        <li>navštívené stránky, čas strávený na webu a zdroj návštěvy</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">3. Účel zpracování</h2>
                    <p>
                        Účelem je analýza návštěvnosti a chování uživatelů za účelem
                        zlepšování obsahu a funkčnosti webu.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">4. Právní základ</h2>
                    <p>
                        Právním základem zpracování je{" "}
                        <strong>souhlas uživatele se zpracováním cookies</strong>, který lze
                        kdykoliv odvolat.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">5. Doba uchování údajů</h2>
                    <p>
                        Údaje jsou uchovávány po dobu maximálně{" "}
                        <strong>14 měsíců</strong>, v souladu s nastavením služby Google
                        Analytics.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">6. Předávání údajů</h2>
                    <p>
                        Zpracovatelem je společnost{" "}
                        <strong>
                            Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
                        </strong>
                        . Údaje mohou být předávány do USA v rámci mechanismu{" "}
                        <strong>EU-US Data Privacy Framework</strong>.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">7. Práva subjektů údajů</h2>
                    <p>
                        Uživatelé mají právo na přístup ke svým údajům, jejich opravu nebo
                        výmaz, omezení zpracování, námitku proti zpracování a právo odvolat
                        svůj souhlas.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">8. Cookies</h2>
                    <p>
                        Google Analytics používá soubory cookies. Nastavení cookies lze změnit
                        nebo souhlas kdykoliv odvolat.
                    </p>
                </section>
            </div>
        </>
    )
}