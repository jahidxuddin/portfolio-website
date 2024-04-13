import "react-vertical-timeline-component/style.min.css"
import Timeline from "@/components/timeline";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import Image from "next/image";
import algorithmVisualisations from "@/../public/img/algorithm-visualisations.png";
import flsVplanApp from "@/../public/img/fls-vplan-app.png";
import ContactForm from "@/components/contact-form";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <section id="start" className="h-screen py-24 p-10 sm:p-32 lg:p-60 space-y-2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">Hallo Welt, ich bin Jahid.</h1>
        <p className="text-lg lg:text-xl">
          Zurzeit bin ich Abiturient und strebe ein Studium in der Informatik
          an.
        </p>
      </section>
      <section id="about-me" className="min-h-screen px-10 sm:px-32 xl:px-60 grid place-items-center">
        <Timeline/>
      </section>
      <section id="projects" className="min-h-screen px-10 sm:px-32 xl:px-60 py-24 flex flex-col gap-5">
        <span className="text-2xl font-semibold">Webseiten</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Link target="_blank" href="https://algorithm-visualisations.vercel.app/">
            <Card className="shadow-sm">
              <CardContent>
                <Image className="rounded-xl" src={algorithmVisualisations} alt="Algorithm Visualisations"/>
              </CardContent>
              <CardHeader className="text-2xl font-bold">
                Algorithm Visualisations
              </CardHeader>
              <CardFooter className="text-slate-500">
                A tool build with React and Tailwind CSS to visualize algorithms.
              </CardFooter>
            </Card>
          </Link>
        </div>
        <span className="text-2xl font-semibold">Apps</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Link target="_blank" href="https://github.com/jahidxuddin/fls-vplan-app">
            <Card className="shadow-sm">
              <CardContent>
                <Image className="rounded-xl" src={flsVplanApp} alt="Algorithm Visualisations"/>
              </CardContent>
              <CardHeader className="text-2xl font-bold">
                FLS-Vplan-App
              </CardHeader>
              <CardFooter className="text-slate-500">
                A clone of the offical FLS-Vetretungsplan app from Florian Schmidt.
              </CardFooter>
            </Card>
          </Link>
        </div>
      </section>
      <section id="contact" className="h-screen grid place-items-center px-10 sm:px-32 lg:px-0">
        <ContactForm />
      </section>
    </main>
  );
}
