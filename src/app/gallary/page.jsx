import React from "react";
import img1 from "@/app/assets/api.jpg";
import Image from "next/image";
export default function Gallary() {
  return (
    <div className="text-center ">
      {/* <Image width={500} height={300} className='mx-auto mt-10 rounded-4xl' src={img1} alt="" /> */}
      <div>
        <h1>Regular Image</h1>
        {/* <img
          src="https://www.bing.com/th/id/OIP.U_VJuupQohwnzXcKMztqWgHaEo?w=145&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          alt="imgae"
          width={400}
        /> */}
      </div>
      <div>
        <h1>Next js image components</h1>
        {/* <Image
          src={
            "https://www.bing.com/th/id/OIP.U_VJuupQohwnzXcKMztqWgHaEo?w=145&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          }
          alt="image"
          // fill={true}
          width={500}
          height={700}
        /> */}
      </div>
    </div>
  );
}
