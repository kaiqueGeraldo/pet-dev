import Image from "next/image";
import about1Image from "../../../public/about-1.png";
import about2Image from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import {} from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="150"
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Image}
                alt="Fotos"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden border-white rounded-lg">
              <Image
                src={about2Image}
                alt="Fotos"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div
            className="space-y-6 mt-10"
            data-aos="fade-up-left"
            data-aos-delay="150"
          >
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Until one has loved an animal, a part of one's soul remains
              Unawakened. We believe in it and we believe in easy acess to
              things that are good for our mind, body and spirit. With a clever
              offering, superb support and a secure checkout you're in good
              hands.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinários
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                href={
                  "https://wa.me/5567999999999?text=Olá vim pelo site e gostaria de mais informações"
                }
                target="_blank"
                className="flex items-center gap-2 bg-[#E84C3D] text-white justify-center w-fit px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5" />
                Contato via Whatsapp
              </a>
              <a
                href={`https://maps.app.goo.gl/7SJxSNGSM1oeZfCr9`}
                target="_blank"
                className="flex items-center gap-2 justify-center w-fit px-4 py-2 rounded-md hover:text-white hover:bg-slate-400 duration-300"
              >
                Endereço da Loja
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
