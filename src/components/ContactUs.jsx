import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaComment } from 'react-icons/fa';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleFocus = () => {
        setIsExpanded(true);
    };

    const handleBlur = () => {
        setIsExpanded(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6 relative overflow-hidden'>
            {/* Floating Elements */}
            <div className='absolute inset-0 opacity-20 pointer-events-none'>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className='absolute w-2 h-2 bg-purple-400 rounded-full animate-float'
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    ></div>
                ))}
            </div>
            
            {/* Main Content */}
            <div className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transition-all duration-500 ${isExpanded ? 'w-[600px]' : 'w-[500px]'}`}
                onFocus={handleFocus}
                onBlur={handleBlur}>
                <div className='p-6 space-y-6'>
                    {/* Animated Header */}
                    <div className='text-center group'>
                        <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 bg-clip-text text-transparent inline-block'>
                            Contact Us
                        </h1>
                        <div className='h-1 bg-gradient-to-r from-purple-500 to-blue-500 w-20 mx-auto mt-2 rounded-full transform group-hover:scale-x-150 transition-all' />
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        {/* Name Input */}
                        <div className='relative'>
                            <FaUser className='absolute left-3 top-1/2 -translate-y-1/2 text-purple-400' />
                            <input 
                                type="text" 
                                placeholder='Your Name'
                                className='w-full pl-10 pr-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all'
                                value={formData.name} 
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                            />
                        </div>

                        {/* Email Input */}
                        <div className='relative'>
                            <FaEnvelope className='absolute left-3 top-1/2 -translate-y-1/2 text-purple-400' />
                            <input 
                                type="email" 
                                placeholder='Your Email'
                                className='w-full pl-10 pr-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all'
                                value={formData.email} 
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                            />
                        </div>
                        
                        {/* Message Input */}
                        <div className='relative'>
                            <FaComment className='absolute left-3 top-4 text-purple-400' />
                            <textarea 
                                placeholder='Your Message' 
                                rows="4"
                                className='w-full pl-10 pr-3 pt-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all'
                                value={formData.message} 
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                            />
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className='w-full py-2 bg-purple-500/30 hover:bg-purple-600 text-white font-bold rounded-lg transition-all'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Send Message"}
                        </button>

                        {/* Success Message */}
                        {isSuccess && (
                            <p className='text-green-400 text-center'>Your message has been sent successfully!</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
