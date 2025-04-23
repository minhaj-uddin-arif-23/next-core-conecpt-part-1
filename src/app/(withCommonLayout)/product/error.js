"use client";
import React from "react";

export default function Error({ error, reset }) {
  console.log(error);
  return (
    <div>
      <h1 className="text-red-600 text-center font-semibold mt-2">
        Something error in product data fetch check again
      </h1>
      <p className="text-red-600 text-center font-semibold mt-2">
        {error.message}
      </p>
      <button
        onClick={() => reset()}
        className="btn btn-sm my-5 flex bg-blue-200 text-center mx-auto "
      >
        Reload Page
      </button>
    </div>
  );
}
