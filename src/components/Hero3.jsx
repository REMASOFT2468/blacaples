import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img16 from "../assets/image/img16.png";
import img13 from "../assets/image/img13.png";
import img14 from "../assets/image/img14.png";
import img15 from "../assets/image/img15.png";

const Hero3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const stories = [
    { img: img14, date: "September, 2025", title: "Viral Content" },
    { img: img15, date: "September, 2025", title: "Viral Content" },
    { img: img16, date: "September, 2025", title: "Viral Content" },
    { img: img13, date: "September, 2025", title: "Viral Content" },
  ];

  return (
    <div className="px-6 md:px-16 mt-16 pb-12">
      <div className="max-w-4xl mx-auto mb-12 text-center" data-aos="fade-up">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Featured Stories
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Our team focuses on crafting and engineering emotion-catching stories
          and content that stays in the mind of your customers even if they
          close eyes to sleep. We have done it for this brand.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stories.map((story, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="flex flex-col"
          >
            <img
              src={story.img}
              alt={story.title}
              className="w-full h-60 md:h-72 object-cover rounded-lg shadow-lg"
            />
            <p className="text-gray-400 mt-3 text-sm">{story.date}</p>
            <h3 className="text-xl font-semibold">{story.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero3;
