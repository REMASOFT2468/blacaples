import React from "react";
import img9 from "../assets/image/img9.png";
import img8 from "../assets/image/img8.png";

const Hero1 = () => {
  return (
    <div>
      <section class="bg-black w-100 text-white px-6 md:px-16 md:w-250 py-20 md:ml-70">
        <p class="text-red-500 mb-6">// Who we are</p>

        <h1 class="text-4xl md:text-5xl font-light leading-tight max-w-3xl">
          Blacaple is a studio built on a simple belief.
          <span class="relative inline-block">
            People don't remember ads.
            <span class="absolute left-0 right-0 top-1/2 h-[5px] bg-red-600 -translate-y-1/2"></span>
          </span>
          <br />
          They remember how something made them feel.
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          <img src={img9} alt="" class="w-full h-full object-cover" />

          <img src={img8} alt="" class="w-full h-50 object-cover" />

          <div class="flex flex-col justify-center">
            <p class="text-lg leading-relaxed relative inline-block">
              <span class="relative inline-block md:-ml-80 md:mt-60">
                Our work is focused on that feeling.
                <span class="absolute left-0 right-0 top-1/2 h-[3px] bg-red-600 -translate-y-1/2"></span>
              </span>
            </p>

            <p class="mt-2  text-lg leading-relaxed md:-ml-80 md:w-80">
              We help brands speak clearly, look beautiful, and tell stories
              that stay in the mind long after the screen goes dark — with
              videos, campaigns, social media, and strategies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero1;
