import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-16 pb-8 border-t border-purple-900/50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Grid Container */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Social Links */}
          <div className='space-y-6'>
            <h3 className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Connect With Us
            </h3>
            <div className='flex space-x-5'>
              {[
                { icon: FaTwitter, color: '#1DA1F2', link: 'https://x.com/Pulkit70baseeth' },
                { icon: FaFacebook, color: '#1877F2', link: 'https://www.facebook.com/sudhansu24/' },
                { icon: FaInstagram, color: '#E4405F', link: 'https://www.instagram.com/pulkit7070' },
              ].map((social, index) => (
                <a
                  className='p-3 transition-transform duration-300 hover:scale-110 rounded-lg'
                  key={index}
                  href={social.link}
                  style={{ color: social.color }}
                  aria-label={`Follow us on ${social.icon.displayName}`}
                >
                  <social.icon size={36} className='hover:drop-shadow-[0_0_12px_rgba(192,132,252,0.5)]' />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-6'>
            <h3 className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Quick Links
            </h3>
            <div className='space-y-4'>
              {[
                { name: 'Home', path: '/' },
                { name: 'Works', path: '/how-it-works' },
                { name: 'Mission', path: '/our-mission' },
                { name: 'FAQ', path: '/faq' },
              ].map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className='block text-lg hover:text-purple-400 transition-all duration-300 hover:pl-3 border-l-2 border-transparent hover:border-purple-400'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className='space-y-6 lg:col-span-2'>
            <h3 className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Stay Updated
            </h3>
            <form className='flex flex-col space-y-4 relative group'>
              <div className='relative w-full'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full bg-gray-800/50 backdrop-blur-sm rounded-3xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 border-2 border-gray-700 hover:border-purple-400 transition-all placeholder-gray-500 text-gray-100 pr-24'
                  aria-label='Enter your email'
                />
                <button
                  type='submit'
                  className='absolute right-2 top-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-2xl transition-transform duration-300 font-medium text-lg hover:shadow-lg hover:shadow-purple-500/20 transform hover:scale-105 flex items-center gap-2'
                >
                  <span>Join</span>
                  <FiArrowRight className='h-5 w-5' />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
