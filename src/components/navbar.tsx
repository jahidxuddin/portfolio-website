import { GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 flex h-16 items-center gap-4 border-b-2 bg-background px-4 md:px-48">
      <nav className="hidden flex-col w-full justify-between text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          Jahid Uddin
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="text-muted-foreground transition hover:text-foreground hover:opacity-75"
          >
            Über mich
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition hover:text-foreground hover:opacity-75"
          >
            Projekte
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition hover:text-foreground hover:opacity-75"
          >
            Kontakt
          </Link>
        </div>
        
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
            <li>
              <Link
                target="_blank"
                href="https://www.instagram.com/jxhid_uddin"
                passHref
              >
                <span className="text-gray-700 transition hover:opacity-75">
                  <span className="sr-only">Instagram</span>
                  <InstagramIcon className="h-6 w-6" />
                </span>
              </Link>
            </li>

            <li>
              <Link
                target="_blank"
                href="https://twitter.com/ju_dev16"
                passHref
              >
                <span className="text-gray-700 transition hover:opacity-75">
                  <span className="sr-only">Twitter</span>
                  <TwitterIcon className="h-6 w-6" />
                </span>
              </Link>
            </li>

            <li>
              <Link
                target="_blank"
                href="https://github.com/jahidxuddin"
                passHref
              >
                <span className="text-gray-700 transition hover:opacity-75">
                  <span className="sr-only">GitHub</span>
                  <GithubIcon className="h-6 w-6" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
