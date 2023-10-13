"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  // use the usePathname hook to get the current pathname so that an active class can be applied
  // https://www.slingacademy.com/article/how-to-highlight-currently-active-link-in-next-js/
  const pathname = usePathname();

  // state for navigation menu
  const [isOpen, setIsOpen] = useState(false);

  // effect for when the breakpoint is reached, update navigation menu state
  // https://stackoverflow.com/a/66590903/22647886
  useEffect(() => {
    const mediaQuery = "(min-width: 768px)";
    const mediaQueryList = window.matchMedia(mediaQuery);
    const handleChange = (e) => {
      setIsOpen(e.matches);
    };
    mediaQueryList.addEventListener("change", handleChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [isOpen]);

  // effect for showing navigation menu on desktop load
  useEffect(() => {
    const width = window.innerWidth;
    if (width >= 768) {
      setIsOpen(true);
    }
  }, []);

  // function for toggling navigation menu state
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navstick">
      <nav className="navbar">
        <div className="navsection">
          <h1>
            <Link href={"/"}>Fundamentals of Computing</Link>
          </h1>
        </div>
        <div className="navsection">
          <button
            className="navmenu"
            type="button"
            onClick={() => {
              handleClick();
            }}
          >
            <Image src="/hamburger.svg" width={25} height={25} alt="menu" />
          </button>
          {isOpen && (
            <div className="linksection">
              <Link href={"/"} className={pathname == "/" && "active"}>
                Course
              </Link>
              {/* use startsWith method to ensure subroutes are also active
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith */}
              <Link
                href={"/project"}
                className={pathname.startsWith("/project") && "active"}
              >
                Project
              </Link>
              <Link
                href={"/concept"}
                className={pathname == "/concept" && "active"}
              >
                Concept
              </Link>
              <Link
                href={"/database"}
                className={pathname == "/database" && "active"}
              >
                Database
              </Link>
              <Link
                href={"/documentation"}
                className={pathname == "/documentation" && "active"}
              >
                Documentation
              </Link>
              <Link href={"/team"} className={pathname == "/team" && "active"}>
                Team
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
