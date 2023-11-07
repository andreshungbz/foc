"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  // use the usePathname hook to get the current pathname so that an active class can be applied
  // https://www.slingacademy.com/article/how-to-highlight-currently-active-link-in-next-js/
  const pathname = usePathname();

  // state for dropdown menu on mobile
  const [dropdown, setDropdown] = useState(false);

  // effect for when the breakpoint is reached, hide dropdown menu if open
  // https://stackoverflow.com/a/66590903/22647886
  useEffect(() => {
    // tailwind css md breakpoint is 768px
    const mediaQuery = "(min-width: 768px)";
    const mediaQueryList = window.matchMedia(mediaQuery);
    const handleChange = (e) => {
      if (e.matches) {
        setDropdown(false);
      }
    };
    mediaQueryList.addEventListener("change", handleChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [dropdown]);

  // effect for hiding the dropdown when anywhere is clicked
  useEffect(() => {
    const hideDropdown = () => {
      if (dropdown) {
        setDropdown(false);
      }
    };
    window.addEventListener("click", hideDropdown);
    return () => window.removeEventListener("click", hideDropdown);
  }, [dropdown]);

  return (
    <header className="navstick">
      <nav className="navbar">
        <div className="navsection">
          <h1>
            <Link href={"/"}>Fundamentals of Computing</Link>
          </h1>
        </div>
        <div className="navsection">
          {/* mobile navigation */}
          {/* every button and link here stops event propagation to prevent trigger of window event listener for hiding dropdown */}
          <button
            className="navmenu"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setDropdown((prev) => !prev);
            }}
          >
            <Image src="/hamburger.svg" width={25} height={25} alt="menu" />
          </button>
          {/* dropdown menu */}
          {dropdown && (
            <div className="dropdown">
              <Link
                href={"/"}
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdown((prev) => !prev);
                }}
                className={
                  pathname == "/" ? "dropdown-link active" : "dropdown-link"
                }
              >
                Course
              </Link>
              <Link
                href={"/project"}
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdown((prev) => !prev);
                }}
                className={
                  pathname.startsWith("/project")
                    ? "dropdown-link active"
                    : "dropdown-link"
                }
              >
                Project
              </Link>
              <Link
                href={"/concept"}
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdown((prev) => !prev);
                }}
                className={
                  pathname == "/concept"
                    ? "dropdown-link active"
                    : "dropdown-link"
                }
              >
                Concept
              </Link>
              <Link
                href={"/database"}
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdown((prev) => !prev);
                }}
                className={
                  pathname == "/database"
                    ? "dropdown-link active"
                    : "dropdown-link"
                }
              >
                Database
              </Link>
              <Link
                href={"/documentation"}
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdown((prev) => !prev);
                }}
                className={
                  pathname == "/documentation"
                    ? "dropdown-link active"
                    : "dropdown-link"
                }
              >
                Documentation
              </Link>
              <Link
                href={"/team"}
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdown((prev) => !prev);
                }}
                className={
                  pathname == "/team" ? "dropdown-link active" : "dropdown-link"
                }
              >
                Team
              </Link>
            </div>
          )}
          {/* desktop navigation */}
          <div className="linksection">
            <Link href={"/"} className={pathname == "/" ? "active" : undefined}>
              Course
            </Link>
            {/* use startsWith method to ensure subroutes are also active
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith */}
            <Link
              href={"/project"}
              className={pathname.startsWith("/project") ? "active" : undefined}
            >
              Project
            </Link>
            <Link
              href={"/concept"}
              className={pathname == "/concept" ? "active" : undefined}
            >
              Concept
            </Link>
            <Link
              href={"/database"}
              className={pathname == "/database" ? "active" : undefined}
            >
              Database
            </Link>
            <Link
              href={"/documentation"}
              className={pathname == "/documentation" ? "active" : undefined}
            >
              Documentation
            </Link>
            <Link
              href={"/team"}
              className={pathname == "/team" ? "active" : undefined}
            >
              Team
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
