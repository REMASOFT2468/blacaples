import React from "react";

export default function Hero6() {
  return (
    <section className="bg-black text-white min-h-screen px-6 py-16 flex justify-center">
      <div className="max-w-2xl text-left space-y-8">
        <p className="text-sm text-gray-300 tracking-wider text-center">
          About Us
        </p>

        <h1 className="text-5xl md:text-6xl font-light leading-tight">
          We engineer <br />
          <span className="font-bold text-red-500 ml-30">Stories</span> <br />
          <span className=" ml-50">that sell</span>
        </h1>

        <svg
          width="300"
          height="90"
          viewBox="0 0 300 40"
          fill="none"
          className="mt-2"
        >
          <path
            d="M2 20C30 5 60 35 90 20C120 5 150 35 180 20C200 10 215 25 215 25"
            stroke="#D72626"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <div className="space-y-10 text-[15px] md:text-[17px] leading-[1.7] font-light">
          <p>
            We are a creative studio built on a simple understanding: people
            remember how a brand made them feel, long after they forget the
            message itself.
          </p>

          <p>Most brands create content that gets views but no impact.</p>

          <p>
            The Nigerian digital audience (over{" "}
            <span className="line-through">100,000 million Nigerians</span>)
            spends over 50% of their day online, yet 90% of brand communication
            gets ignored because it is not engineered for emotional connection.
          </p>

          <p className="font-semibold">Blacaple exists to fix that.</p>

          <p>
            We help brands communicate with clarity, emotion, and intention, and
            we use real human stories, brand pains, and audience psychology to
            create viral content that actually sticks.
          </p>
        </div>
      </div>
    </section>
  );
}
