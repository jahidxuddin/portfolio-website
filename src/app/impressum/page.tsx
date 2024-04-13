import Link from "next/link";

export default function Impressum() {
  return (
    <main className="h-screen w-full py-24 px-10 sm:px-32 lg:px-60">
      <div className="prose">
        <h1>Impressum</h1>

        <p>Jahid Uddin<br/>Walramstraße 21<br/>65183 Wiesbaden</p>

        <h2>Kontakt</h2>
        <p>Telefon: +49 176 48099838<br/>E-Mail: jahid.uddin@outlook.de</p>

        <h2>Redaktionell verantwortlich</h2>
        <p>Jahid Uddin</p>

        <p>Quelle: <Link target="_blank" href="https://www.e-recht24.de">e-recht24.de</Link></p>
      </div>
    </main>
  );
}