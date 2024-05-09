"use client";
import React from "react";
import { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
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
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  const [activePage, setActivePage] = useState<string>("/");

  useEffect(() => {
    if (pathname !== null) {
      setActivePage(pathname);
    }
  }, [pathname]);

  return (
    <header className="w-full mx-auto bg-[--oldlace] shadow z-50 sm:px-20 sm:py-2 ">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between ">
            <Link href="/">
              <div className="md:py-1 md:block">
                <h2 className="text-lg font-bold">Jazmine Althea</h2>
              </div>
            </Link>
            <div className="md:hidden" onClick={() => setNavbar(!navbar)}>
              <button>
                {navbar ? (
                  <MdClose size={30} className="text-gray-800" />
                ) : (
                  <MdMenu size={30} className="text-gray-800" />
                )}
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
                    className={`block lg:inline-block text-gray-800 hover:text-[--khaki] dark:text-gray-100 dark:hover:text-blue-300 cursor-pointer ${
                      activePage === item.page ? "active" : ""
                    }`}
                    onClick={() => {
                      setNavbar(!navbar);
                      setActivePage(item.page);
                      console.log("Active Page:", item.page);
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
