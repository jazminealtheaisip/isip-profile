"use client";
import React from "react";
import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
/* import { Link } from "react-scroll/modules"; */
import { usePathname } from "next/navigation";
import Link from "next/link";
/* import HomePage from "./homepage"; */

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEM: Array<NavItem> = [
  {
    label: "Home",
    page: "/",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);
  const pathname = usePathname();
  const [activePage, setActivePage] = useState<string>("/");

  useEffect(() => {
    if (pathname !== null) {
      setActivePage(pathname);
    }
  }, [pathname]);

  return (
    <header className="w-full mx-auto bg-white shadow fixed top-0 z-50 sm:px-20 sm:py-2 ">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-1">
            <Link href="/">
              <div className="md:py-4 md:block">
                <h2 className="text-lg font-bold">Jazmine Althea T. Isip</h2>
              </div>
            </Link>
            <div className="md:hidden" onClick={() => setNavbar(!navbar)}>
              <button>
                {navbar ? <MdMenu size={30} /> : <MdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-3 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEM.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    href={`/${item.page}`}
                    className={`block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 cursor-pointer ${
                      activePage === item.page ? "active" : ""
                    }`}
                    /* activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500} */
                    onClick={() => {
                      setNavbar(!navbar);
                      setActivePage(item.page);
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
