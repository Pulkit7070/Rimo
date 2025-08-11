import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "How do I get started?",
      answer: "Begin by creating an account and exploring our interactive tutorials."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards and UPI."
    },
    {
  question: "How does the AI damage detection work?",
  answer: "Our AI compares live photos taken at checkout and return to detect scratches, cracks, or other damages, ensuring fair and transparent rentals."
},
{
  question: "Do I need to upload photos from my gallery?",
  answer: "No, for security and authenticity, our system only accepts live photos taken through the app."
}

  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12px-4 sm:px-6 lg:px-8 relative'>
        {/* Floating Elements */}
        <div className='absolute inset-0 opacity-20'>
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className='absolute w-1 h-1 bg-white rounded-full animate-float'
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i*0.5}s`,
                  }}
                ></div>
              ))}
            </div>
            <div className='max-2-4xl mx-auto transform hover:scale-[1.005] transition-all duration-300 relative z-10'>
                <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 md:mb-12 lg:mb-16 font-montserrant tracking-tighter text-center'>
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500'>
                        Frequently 
                    </span>
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 md:ml-4 block md:inline mt-2 md:mt-0'>
                        Asked Questions
                    </span>
                </h2>
                <div className='space-y-4 md:space-y-6'>
                    {faqItems.map((item,index)=>(
                        <div key={index} className={`relative overflow-hidden rounded-xl md:rounded-2xl p-1 transition-all duration-300 ${activeIndex===index ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                            :'bg-gradient-to-r from-gray-800'
                        }`}>
                            <div className='bg-gray-900 rounded-lg md:rounded-xl p-4 md:p-6'>
                                <button
                                onClick={()=> setActiveIndex(activeIndex===index ? null :index)}
                                className='flex justify-between items-center w-full group'>
                                    <span className='text-base md:text-lg lg:text-xl font-medium text-left text-gray-100 group-hover:text-purple-400 transition-colors duration-300 pr-4'>
                                        {item.question}
                                    </span>
                                    <span className='flex-shrink-0 ml-4 text-xl md:text-2xl text-purple-400'>
                                        {activeIndex === index ?'-':'+'}
                                    </span>
                                </button>
                                <div className={`transition-all duration-300 ease-in-out overflow-hidden
                                ${activeIndex === index ? 'max-h-screen mt-2 md:mt-4':'max-h-0'}`}>
                                    <p className=' text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed border-l-4 border-purple-500 pl-3 md:pl-4'>
                                        {item.answer}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                {/* Decorative Elements */}
                <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
                    <div className='absolute -top-20 -right-20 w-64 h-64 md:w-96 md:h-96 bg-pink-500/10 rounded-full blur-3xl'/>
                    <div className='absolute -bottom-20 -left-20 w-64 h-64 md:w-96 md:h-96 bg-pink-500/10 rounded-full blur-3xl'/>
                </div>
            </div>
    </div>
  );
};

export default FAQ;