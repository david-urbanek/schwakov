import {Mail, MapPin, Phone} from "lucide-react";
import {TextAnimate} from "@/components/magicui/text-animate";
import React from "react";

interface Contact7Props {
    title?: string;
    description?: string;
    emailLabel?: string;
    emailDescription?: string;
    email?: string;
    officeLabel?: string;
    officeDescription?: string;
    officeAddress?: string;
    phoneLabel?: string;
    phoneDescription?: string;
    phone?: string;
    chatLabel?: string;
    chatDescription?: string;
    chatLink?: string;
}

const Contact7 = ({

                      description = "Máte dotaz k našim technologiím nebo potřebujete rychlou konzultaci?",
                      emailLabel = "Email",
                      emailDescription = "Odpovíme do 24 hodin",
                      email = "schwakov@seznam.cz",
                      officeLabel = "Kancelář",
                      officeDescription = "Naše kancelář a technické zázemí najdete v průmyslové zóně ve Svitavách",
                      officeAddress = "Průmyslová 2066, 568 02 Svitavy 2",
                      phoneLabel = "Telefon",
                      phoneDescription = "Jsme k dispozici 24/7",
                      phone = "+420 606 727 585",
                  }: Contact7Props) => {
    return (
        <section className="bg-background" id="contact">
            <div className="container">
                <div className="mb-14">
                    <TextAnimate animation="blurInUp" by="word" once as="h2" startOnView={true} delay={0.3}>Kontaktuje nás</TextAnimate>

                    <p className="text-muted-foreground max-w-xl text-lg">
                        {description}
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <Mail className="h-6 w-auto"/>
            </span>
                        <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
                        <p className="text-muted-foreground mb-3">{emailDescription}</p>
                        <a
                            href={`mailto:${email}`}
                            className="font-semibold hover:underline"
                        >
                            {email}
                        </a>
                    </div>
                    <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <MapPin className="h-6 w-auto"/>
            </span>
                        <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
                        <p className="text-muted-foreground mb-3">{officeDescription}</p>
                        <a href="https://www.google.com/maps/place/Pr%C5%AFmyslov%C3%A1+2066%2F9,+568+02+Svitavy+2-P%C5%
                        99edm%C4%9Bst%C3%AD/@49.7645212,16.4817306,663m/data=!3m2!1e3!4b1!4m6!3m5!1s0x470d8a345e01a373:0
                        x202a13f7173a0c4e!8m2!3d49.7645178!4d16.4843055!16s%2Fg%2F11csn4y466?entry=ttu&g_ep=EgoyMDI1MDgx
                        OC4wIKXMDSoASAFQAw%3D%3D"
                           className="font-semibold hover:underline">
                            {officeAddress}
                        </a>
                    </div>
                    <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <Phone className="h-6 w-auto"/>
            </span>
                        <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
                        <p className="text-muted-foreground mb-3">{phoneDescription}</p>
                        <a href={`tel:${phone}`} className="font-semibold hover:underline">
                            {phone}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export {Contact7};