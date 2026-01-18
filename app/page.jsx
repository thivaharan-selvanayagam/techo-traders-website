"use client";
import { translations } from "./translations";
import { useState, useEffect } from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "0706656007";

function whatsappLink(message) {
  return `https://wa.me/94${WHATSAPP_NUMBER.replace(/^0/, "")}?text=${encodeURIComponent(message)}`;
}

function Slideshow({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full h-72 md:h-[420px] relative overflow-hidden rounded-2xl shadow">
      <Image src={images[index]} alt="Antenna image" fill className="object-cover" />
    </div>
  );
}

export default function Home() {
  const yagiImages = [
    "/images/yagi1.jpg",
    "/images/yagi2.jpg",
    "/images/yagi3.jpg",
    "/images/yagi4.jpg",
  ];

  const diskYagiImages = [
    "/images/diskyagi1.jpg",
    "/images/diskyagi2.jpg",
    "/images/diskyagi3.jpg",
    "/images/diskyagi4.jpg",
  ];

  const components = [
    { name: "Aluminium Boom Pipe", image: "/images/components/boom.jpg" },
    { name: "Director Elements", image: "/images/components/director.jpg" },
    { name: "Reflector Elements", image: "/images/components/reflector.jpg" },
    { name: "Driven Element Kit", image: "/images/components/driven.jpg" },
    { name: "U-Bolt for disk yagi", image: "/images/components/ubolt_disk_yagi.jpg" },
    { name: "U-Bolt Clamp", image: "/images/components/ubolt.jpg" },
    { name: "Round End Caps", image: "/images/components/Round-End-Caps.jpg" },
    { name: "F Male Connector", image: "/images/components/F-male.jpg" },
    { name: "F Female Connector", image: "/images/components/F-female.jpg" },
    { name: "Reverts", image: "/images/components/reverts.jpg" },
    { name: "Square Top Round End Caps", image: "/images/components/Square-End-Caps.jpg" },
    { name: "Cable Tie 8 inches", image: "/images/components/cable-tie.jpg" },
  ];

  const [lang, setLang] = useState("en");
  const t = translations[lang];


  return (
    <main className="font-sans text-gray-800 bg-white [color-scheme:light]">
      {/* Section 1: Introduction with Logo centered */}
      <section className="relative min-h-screen px-6 bg-gradient-to-r from-slate-900 to-slate-700 text-white flex flex-col items-center justify-center">
        <div className="absolute top-6 right-6 flex gap-3 text-sm">
          <button onClick={() => setLang("en")}>English</button>
          <button onClick={() => setLang("ta")}>தமிழ்</button>
          <button onClick={() => setLang("si")}>සිංහල</button>
        </div>

        <div className="mb-6">
          <Image src="/images/logo.png" alt="Techo Traders Logo" width={150} height={75} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.brand}</h1>
        <p className="text-lg md:text-xl max-w-3xl text-center">
          {t.heroText}
        </p>
      </section>

      {/* Section 2: Yagi Antenna (Full Screen) */}
      <section className="min-h-screen px-6 flex items-center bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Slideshow images={yagiImages} />

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              {t.yagiTitle}
            </h2>

            <p className="mb-4">
              {t.yagiDesc1}
            </p>

            <p className="mb-6">
              {t.yagiDesc2}
            </p>

            <p className="mb-6 font-medium">
              {t.yagiDesc3}
            </p>

            <a
              href={whatsappLink("I want to buy a Regular Yagi Antenna")}
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow"
            >
              {t.orderNow}
            </a>
          </div>
        </div>
      </section>


      {/* Section 3: Disk Yagi Antenna (Full Screen, mobile fix) */}
      <section className="min-h-screen px-6 bg-gray-50 flex items-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center md:flex-row flex-col-reverse md:flex-col">
          <div className="md:order-2">
            <Slideshow images={diskYagiImages} />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-semibold mb-4">{t.diskYagiTitle}</h2>
            <p className="mb-6">
              {t.diskYagiDesc1}
            </p>
            <p className="mb-6">
              {t.diskYagiDesc2}
            </p>
            <p className="mb-6 font-medium">
              {t.diskYagiDesc3}
            </p>
            <a href={whatsappLink("I want to buy a Disk Yagi Antenna")} className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow">
              {t.orderNow}
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: YouTube Videos */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <iframe className="w-full h-64 md:h-80 rounded-2xl shadow" src="https://www.youtube.com/embed/XSnRSF59CA8?si=TiorAuOuouAplbwb" allowFullScreen></iframe>
          <iframe className="w-full h-64 md:h-80 rounded-2xl shadow" src="https://www.youtube.com/embed/5-TLEw9rHVU?si=F3tT3ouGErJvR6aG" allowFullScreen></iframe>
        </div>
      </section>

      {/* Section 5: Components with Images */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">{t.componentsTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {components.map((item) => (
              <a key={item.name} href={whatsappLink(`I want to buy the component: ${item.name}`)} className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 text-center">
                <div className="relative w-full h-32 mb-3">
                  <Image src={item.image} alt={item.name} fill className="object-contain" />
                </div>
                <p className="font-medium text-sm">{item.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="py-16 px-6 bg-slate-800 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">{t.ctaTitle}</h2>
        <p className="mb-6">{t.ctaDesc}</p>
        <a href={whatsappLink("Hello Techo Traders, I need more information")} className="inline-block bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl shadow">
          Contact Us on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-gray-900 text-gray-300 text-center">
        <p className="mb-4">© {new Date().getFullYear()} Techo Traders. {t.footer}</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="https://www.facebook.com/share/17v3yMGC8U/?mibextid=wwXIfr" target="_blank">Facebook</a>
          <a href="https://chat.whatsapp.com/IMybu7FGZ9s428LfnPQ7lK" target="_blank">WhatsApp Community</a>
          <a href="https://wa.me/c/94706656007" target="_blank">WhatsApp Catalog</a>
          <a href="/refund-return-policy" target="_blank">Return & Refund Policy</a>
        </div>
      </footer>
    </main>
  );
}