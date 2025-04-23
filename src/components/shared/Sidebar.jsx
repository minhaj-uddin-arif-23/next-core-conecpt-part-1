"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Sidebar() {
  const router = useRouter();

  const links = [
    { name: "dashboard", href: "/dashboard" },
    { name: "userprofile", href: "/userprofile" },
    { name: "Settings", href: "/settings" },
    { name: "activity", href: "/activity" },
    { name: "Home", href: "/" },
  ];

  return (
    <div className="min-h-[98vh] w-64 bg-gray-800 text-white p-5">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span
                  className={`block py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ${
    router.pathname === link.href ? "bg-blue-500" : "hover:bg-gray-700"
  }`}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
