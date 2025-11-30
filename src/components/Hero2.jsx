import React from "react";
import img10 from "../assets/image/img10.png";
import img12 from "../assets/image/img12.png";
import img11 from "../assets/image/img11.png";

const Hero2 = () => {
  return (
    <section className="px-6 py-16">
      <p className="text-red-500 mb-6">// Our services</p>

      <h1 className="font-bold text-4xl md:text-6xl max-w-4xl mb-16">
        By harnessing both creativity and strategy, we create user-obsessive
        stories for your brand.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:flex">
        <div>
          <p className="text-red-400">/01</p>
          <h2 className="font-bold text-xl mb-4">Content Creation</h2>
          <p>
            We create simple, obsessive contents that people enjoy watching and
            sharing. Photos, short films, graphics and story-driven visuals.
          </p>
        </div>

        <div>
          <p className="text-red-400">/02</p>
          <h2 className="font-bold text-xl mb-4">Social Media Management</h2>
          <p>
            We manage your online presence with consistency, clarity, and care.
            Your brand will feel alive and human every day.
          </p>
        </div>

        <div>
          <p className="text-red-400">/03</p>
          <h2 className="font-bold text-xl mb-4 md:mb-15 ">
            Marketing Campaigns
          </h2>
          <p>
            We create stories and ideas that move people. Thoughtful concepts,
            clean visuals, and emotions that translate into action.
          </p>
        </div>

        <div>
          <p className="text-red-400">/04</p>
          <h2 className="font-bold text-xl mb-4">Branding</h2>
          <p>
            We help brands find their voice, look, and personality. Identities
            that feel true and easy to recognize.
          </p>
        </div>

        <div>
          <p className="text-red-400">/05</p>
          <h2 className="font-bold text-xl mb-4">Digital Strategy</h2>
          <p>
            We help you use the internet in a meaningful way. Not for noise. For
            connection, trust, and steady growth.
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto h-[420px] md:h-[520px] mt-8 ">
        <img
          src={img11}
          alt="left"
          className="absolute top-4 left-0 w-[220px] md:w-[450px] rounded-sm object-cover shadow-lg"
        />

        <img
          src={img10}
          alt="right"
          className="absolute right-0 left-1/2  bottom-8 w-[200px] md:w-[550px] md:mt-60 rounded-sm object-cover shadow-lg"
        />

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[520px]">
          <img
            src={img12}
            alt="center"
            className=" md:w-120 md:h-90 h-50  object-cover rounded-sm shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
