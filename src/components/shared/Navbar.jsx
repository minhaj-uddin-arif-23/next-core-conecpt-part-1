import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="px-10 bg-sky-50">
      <div className="navbar  ">
        <div className="flex-1">
          <Link  href={'/'} className=" text-4xl text-black">SimpleProject</Link>
        </div>
        <div className="flex">
          <ul className="menu menu-horizontal px-1">
            <li className="flex flex-row font-medium text-lg text-gray-700">
              <Link  href={'/home'}>Home</Link>
              <Link  href={'/about'}>About</Link>
              <Link  href={'/product'}>Product</Link>
              <Link href={'/blog'}>Blog</Link>
              <Link href={'/contact'}>work with us</Link>
              <Link href={'/counter'}>Counter</Link>
              <Link href={'/dashboard'}>Dashboard</Link>
              <Link href={'/login'}>Login</Link>
              <Link href={'/register'}>Register</Link>
            </li>
         
          </ul>
        </div>
      </div>
    </div>
  );
}
