import React from 'react';

const featuresData = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z"/></svg>',
    title: 'Intelligent Writing Assistance',
    description: 'Our AI writing tool analyzes your content, suggests improvements.',
  },
  {
    icon: 'images/icon-02.svg',
    title: 'Grammar and Spell Check',
    description: 'Say goodbye to embarrassing typos and grammar mistakes.',
  },
  {
    icon: 'images/icon-03.svg',
    title: 'Plagiarism Detection',
    description: 'Originality is key, and our AI writing tool helps you maintain it.',
  },
  {
    icon: 'images/icon-04.svg',
    title: 'Voice to Text Conversion',
    description: 'Transform your spoken words into written text easily & effortlessly.',
  },
  {
    icon: 'images/icon-05.svg',
    title: 'Style and Tone Adaptation',
    description: 'Whether you need a professional, or positive tone, it has everyone.',
  },
  {
    icon: 'images/icon-06.svg',
    title: 'Content Generation',
    description: 'Need inspiration or assistance with generating content?',
  },
];

const Features = () => {
  return (
    <div className="relative text-white py-12 ">
      
      <div className="container mx-auto max-w-5xl">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 ">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`hover:bg-gray-800 p-8 text-center border-gray-800 ${
                (index + 1) % 3 !== 0 ? 'border-r' : '' 
              } ${
                index < featuresData.length - 3 ? 'border-b' : '' 
              }`}
            >
              <div className="group relative">
                {/* Icon */}
                <span className="inline-block mb-6 ">
                  <svg
                    className="mx-auto w-16 h-16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z" />
                  </svg>
                </span>
                {/* Title */}
                <h4 className="font-semibold text-xl mb-4">{feature.title}</h4>
                {/* Description */}
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
