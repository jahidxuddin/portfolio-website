"use client";

import {GithubIcon, InstagramIcon, MenuIcon, TwitterIcon, XIcon} from "lucide-react";
import Link from "next/link";
import {MouseEvent, useState} from "react";
import {Button} from "@/components/ui/button";
import {usePathname, useRouter} from "next/navigation";

export default function Navbar() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: MouseEvent, elementToScrollId: string) => {
    e.preventDefault();

    if (pathname !== "/") {
      router.push("/");
      return;
    }

    const elementToScroll = document.getElementById(elementToScrollId);
    if (elementToScroll) {
      elementToScroll.scrollIntoView({behavior: "smooth"});
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
          onClick={(e) => {
            setMenuVisibility(false);
            handleClick(e, "start");
          }}
        >
          Jahid Uddin
        </Link>
        <Button onClick={() => setMenuVisibility(!menuVisibility)} variant="ghost" className="flex lg:hidden">
          {menuVisibility ? <XIcon/> : <MenuIcon/>}
        </Button>
        {menuVisibility ? (
          <div className="absolute h-screen w-full z-50 bg-background top-16 px-0 py-48 flex flex-col justify-between">
            <div className="flex flex-col items-center gap-6 text-2xl">
              <Link
                href="#about-me"
                className="text-muted-foreground transition hover:text-foreground hover:opacity-75"
                onClick={(e) => {
                  setMenuVisibility(false);
                  handleClick(e, "about-me");
                }}
              >
                Über mich
              </Link>
              <Link
                href="#projects"
                className="text-muted-foreground transition hover:text-foreground hover:opacity-75"
                onClick={(e) => {
                  setMenuVisibility(false);
                  handleClick(e, "projects");
                }}
              >
                Projekte
              </Link>
              <Link
                href="#contact"
                className="text-muted-foreground transition hover:text-foreground hover:opacity-75"
                onClick={(e) => {
                  setMenuVisibility(false);
                  handleClick(e, "contact");
                }}
              >
                Kontakt
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <ul className="flex justify-start gap-6">
                <li>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/jxhid_uddin"
                    passHref
                  >
                    <span className="text-gray-700 transition hover:opacity-75">
                      <span className="sr-only">Instagram</span>
                      <InstagramIcon className="h-10 w-10"/>
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
                      <TwitterIcon className="h-10 w-10"/>
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
                      <GithubIcon className="h-10 w-10"/>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <>
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
                  <InstagramIcon className="h-6 w-6"/>
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
                  <TwitterIcon className="h-6 w-6"/>
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
                  <GithubIcon className="h-6 w-6"/>
                </span>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
