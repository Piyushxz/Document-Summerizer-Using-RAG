import React from 'react';
import logo2 from '../assets/icon-02.png';
import logo1 from '../assets/icon-01.png';
import logo3 from '../assets/icon-03.png';

const featuresData = [
  {
    icon: logo1,
    title: 'Intelligent Writing Assistance',
    description: 'Our AI writing tool analyzes your content, suggests improvements.',
  },
  {
    icon: logo2,
    title: 'Grammar and Spell Check',
    description: 'Say goodbye to embarrassing typos and grammar mistakes.',
  },
  {
    icon:logo3,
    title: 'Time-Efficient Summarization',
    description: 'Using our AI tool to summarize text, articles, documents or legal files greatly which will save your time.',
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
              className={`hover:bg-gray-800 opacity-75 hover:opacity-100 transition duration-300 p-8 text-center border-gray-800 ${
                (index + 1) % 3 !== 0 ? 'border-r' : '' 
              } ${
                index < featuresData.length - 3 ? 'border-b' : '' 
              }`}
            >
              <div className="group relative">
                {/* Icon */}
                <span className="inline-block mb-6 ">
                <img
      src={feature.icon}   // This will now point to the image from your `featuresData`
      alt={feature.title}   // For accessibility, it's a good idea to add an alt text
      className="mx-auto w-16 h-16"  // Adjust styling as per your needs
    />
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
