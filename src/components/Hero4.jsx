import React from "react";
import img17 from "../assets/image/img17.png";
import img18 from "../assets/image/img18.png";
import img19 from "../assets/image/img19.png";
import img20 from "../assets/image/img20.png";
import img21 from "../assets/image/img21.png";

const Hero4 = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 md:p-40 ml-2 ">
      <div>
        <img
          src={img17}
          className="w-full h-10 hidden md:flex  md:h-50 object-cover rounded-sm"
          alt=""
        />
      </div>

      <div>
        <img
          src={img18}
          className="w-full h-70 hidden md:flex  -ml-20 -mt-15 object-cover rounded-sm"
          alt=""
        />
      </div>

      <div>
        <img
          src={img19}
          className="w-full h-70 hidden md:flex  -ml-25 -mt-20 object-cover rounded-sm"
          alt=""
        />
      </div>

      <div>
        <img
          src={img20}
          className="w-full h-70 hidden md:flex  -ml-30 -mt-15 object-cover rounded-sm"
          alt=""
        />
      </div>

      <div>
        <img
          src={img21}
          className="w-full h-50 hidden md:flex -ml-38 object-cover rounded-sm"
          alt=""
        />
      </div>
      <div className="px-4 md:px-10">
        <p className="font-bold w-90 -ml-50 text-1xl leading-relaxed md:ml-10 md:mt-10 md:w-210 md:text-4xl md:max-w-4xl">
          We help companies, start-ups, entrepreneurs and anyone who wants their
          brand to be remembered, not just seen on the internet.
        </p>
        <div className=" mt-20 md:mt-40 -ml-35 md:ml-90  text-red-800">
          <button className="h-8 w-60  bg-white">Whatsapp us now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
