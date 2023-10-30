"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useState } from "react";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setOpen(!open);
    console.log("yesssss here");
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      {open ? (
        <div className="w-full  relative lg:hidden">
          <ul className="absolute right-14 top-10  p-2   z-20  w-[200px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 text-teal-50">
            {NAV_LINKS.map((link) => (
              <div>
                <li className="p-2 cursor-pointer hover:text-gray-20">
                  {link.label}
                </li>
                <hr />
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      )}

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={handleChange}
      />
    </nav>
  );
};

export default Navbar;
