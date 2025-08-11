import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/BannerImage.jpg';

const Banner = () => {
  return (
    <div>
      <section
        className='relative bg-center bg-no-repeat h-60vh flex items-center justify-center text-white'
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient Overlay */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,1) 80%)',
          }}
        ></div>

        {/* Banner Content */}
        <div className='relative z-10 max-w-4xl text-center px-4 py-8 mx-auto'>
          <h2 className='text-xl md:text-5xl mt-22 sm:text-xl lg:text-6xl font-bold mb-6 font-montserrat tracking-tighter'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500'>
              Rental Inspection
            </span>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 ml-4'>
              <br />and Management Online
            </span>
          </h2>
          <p
            className='text-lg md:text-2xl mb-8 leading-relaxed'
            style={{
              fontFamily: 'Poppins, sans-serif',
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
            }}
          >
            Simplifying the way you rent and return, with AI ensuring every step is smooth, safe, and stress-free
          </p>
          <a
            href="#"
            className='inline-block mb-10 bg-gradient-to-r from-purple-500 to-indigo-500 border-none px-8 py-3 rounded-full text-white text-lg md:text-xl font-semibold shadow-lg transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500'
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className='relative z-10'>Launch App</span>
          </a>
        </div>
      </section>

      {/* Marketbox Section */}
      <section className='bg-black py-12 px-4'>
        <div className='relative w-full max-w-5xl mx-auto'>
          <div className='absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-50 blur-lg animate-border'></div>

          {/* Main Content */}
          <div
            className='relative backdrop-blur-xl bg-gradient-to-br from-[#000bid] to-[#0a1226] rounded-3xl p-8 shadow-2xl'
            style={{
              clipPath: 'polygon(0 5%,100% 0,100% 95%,0 100%)',
              boxShadow: '0 0 50px rgba(104, 109, 224, 0.2)',
            }}
          >
            {/* Floating Elements */}
            <div className='absolute inset-0 opacity-20'>
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className='absolute w-1 h-1 bg-white rounded-full animate-float'
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random()}s`,
                  }}
                ></div>
              ))}
            </div>

            {/* Content Grid */}
            <div className='relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
              {["$Market Size", "$ Indian Market", "$Indian rental economy"].map((title, index) => (
                <div
                  key={title}
                  className='group relative p-6 rounded-xl transition-all duration-300 hover:bg-[#ffffff08] hover:-translate-y-2'
                >
                  <div className='absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-500'></div>

                  {/* Content */}
                  <div className='text-center space-y-4'>
                    <h3 className='text-sm uppercase tracking-widest text-cyan-300 font-bold opacity-90'>
                      {title}
                    </h3>
                    <p className='text-3xl font-extrabold bg-gradient-to-r from-purple-200 to-cyan-300 bg-clip-text text-transparent'>
                      {index === 0 ? "$130B+" :
                        index === 1 ? "$6B+" :
                          "$25B+"}
                    </p>
                  </div>

                  {/* Content Accents */}
                  <div className='absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 opacity-50'></div>
                  <div className='absolute bottom-2 left-2 w-3 h-3 border-t-2 border-r-2 border-pink-400 opacity-50'></div>
                </div>
              ))}
            </div>

            {/* Center Divider */}
            <div className='absolute inset-x-0 top-1/2 md:block lg:hidden'>
              <div className='h-[1px] bg-gradient-to-r from-transparent via-[#ffffff15] to-transparent w-full'></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
