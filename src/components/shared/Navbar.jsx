"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const activeLink = usePathname();
  console.log(activeLink);
  return (
    <div className="bg-sky-50 w-full mx-auto">
      <div className="px-10 ">
        <div className="navbar  ">
          <div className="flex-1">
            <Link href={"/"} className=" text-4xl text-black">
              SimpleProject
            </Link>
          </div>
          <div className="flex">
            <ul className="menu menu-horizontal px-1">
              <li className="flex flex-row font-medium text-lg text-gray-700">
                <Link
                  href={"/home"}
                  className={
                    activeLink === "/home"
                      ? "text-red-600 font-semibold"
                      : "text-gray-800"
                  }
                >
                  Home
                </Link>
                <Link
                  href={"/about"}
                  className={
                    activeLink === "/about"
                      ? "text-red-600 font-semibold"
                      : "text-gray-800"
                  }
                >
                  About
                </Link>
                <Link
                  href={"/product"}
                  className={
                    activeLink === "/product"
                      ? "text-red-600 font-semibold"
                      : "text-gray-800"
                  }
                >
                  Product
                </Link>
                <Link
                  href={"/blog"}
                  className={
                    activeLink === "/blog"
                      ? "text-red-600 font-semibold"
                      : "text-gray-800"
                  }
                >
                  Blog
                </Link>
                <Link
                  href={"/contact"}
                  className={
                    activeLink === "/contact"
                      ? "text-red-600 font-semibold"
                      : "text-gray-800"
                  }
                >
                  work with us
                </Link>
                <Link
                  href={"/counter"}
                  className={
                    activeLink === "/counter"
                      ? "text-red-600 font-semibold"
                      : "text-gray-800"
                  }
                >
                  Counter
                </Link>
                <Link
                  href={"/dashboard"}
                  className={
                    activeLink === "/dashboard"
                      ? "text-red-600 font-semibold"
                      : "text-gray-800"
                  }
                >
                  Dashboard
                </Link>
                <Link
                  href={"/login"}
                  className={
                    activeLink === "/login"
                      ? "text-red-600 font-semibold"
                      : "text-gray-800"
                  }
                >
                  Login
                </Link>
                <Link
                  href={"/register"}
                  className={
                    activeLink === "/register"
                      ? "text-red-600 font-semibold"
                      : "text-gray-800"
                  }
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
