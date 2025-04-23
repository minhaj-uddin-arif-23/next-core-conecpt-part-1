import Link from "next/link";
import React from "react";

export default function NotFoundPage() {
  return <div>
    <h1> Error page </h1>
    <Link href={'/'} className="btn btn-secondary mt-10">Back to home</Link>
  </div>;
}
