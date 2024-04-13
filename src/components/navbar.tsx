"use client";

import {GithubIcon, InstagramIcon, MenuIcon, TwitterIcon} from "lucide-react";
import Link from "next/link";
import { MouseEvent } from "react";
import {Button} from "@/components/ui/button";

export default function Navbar() {
  const handleClick = (e: MouseEvent, elementToScrollId: string) => {
    e.preventDefault();

    const elementToScroll = document.getElementById(elementToScrollId);
    if (elementToScroll) {
      elementToScroll.scrollIntoView({ behavior: "smooth" });
    }

    if (window.history && window.history.replaceState) {
      window.history.replaceState({}, document.title, "/");
    }
  };

  return (
    <header className="w-full fixed top-0 flex h-16 items-center gap-4 border-b-2 bg-background px-4 lg:px-60 z-50">
      <nav className="flex-row w-full justify-between font-medium flex items-center gap-6 text-sm">
        <Link
          href="#start"
          className="flex items-center gap-2 text-lg font-semibold"
          onClick={(e) => handleClick(e, "start")}
        >
          Jahid Uddin
        </Link>
        <Button variant="ghost" className="flex lg:hidden">
          <MenuIcon />
        </Button>
        <div className="hidden lg:flex items-center gap-6 scroll-smooth">
          <Link
            href="#about-me"
            className="text-muted-foreground transition hover:text-foreground hover:opacity-75"
            onClick={(e) => handleClick(e, "about-me")}
          >
            Über mich
          </Link>
          <Link
            href="#projects"
            className="text-muted-foreground transition hover:text-foreground hover:opacity-75"
            onClick={(e) => handleClick(e, "projects")}
          >
            Projekte
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground transition hover:text-foreground hover:opacity-75"
            onClick={(e) => handleClick(e, "contact")}
          >
            Kontakt
          </Link>
        </div>

        <div className="hidden lg:flex sm:items-center sm:justify-between">
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
