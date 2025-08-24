import {TextAnimate} from "@/components/magicui/text-animate";
import React from "react";

export default function certificationPage() {
  return <section className="flex flex-col gap-8">
    <TextAnimate animation="blurInUp" by="word" once as="h1" startOnView={true}>Certifikace</TextAnimate>

    <div>
      <object
          data="/pdfs/certification.pdf"
          type="application/pdf"
          className="w-full h-[90vh] rounded-lg border"
      >
        <p>Váš prohlížeč neumí zobrazit PDF.
          <a href="/pdfs/certification.pdf" download>Stáhnout PDF</a>.
        </p>
      </object>
    </div>
  </section>;
}