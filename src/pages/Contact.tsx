import React, { useState, useRef, useEffect } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'contact',
    message: ''
  });
  
  // New state to manage our custom dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const topics = [
    { value: 'contact', label: 'General Inquiry / Contact Us' },
    { value: 'feature', label: 'Request a Feature' },
    { value: 'feedback', label: 'Send App Feedback' },
    { value: 'query', label: 'Query Resolution / Support' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTopicSelect = (value: string) => {
    setFormData({ ...formData, topic: value });
    setIsDropdownOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thanks for reaching out! We'll get back to you soon.");
  };

  return (
    <div className="pt-32 pb-24 bg-zinc-50 dark:bg-[#0a0a0a] min-h-screen transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight mb-6">
            Get in <span className="text-[#F46B2C]">Touch.</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl mx-auto">
            Whether you have a question, want to request a new feature, or need help resolving a query, we're here for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white dark:bg-[#1a1a1a] rounded-[2rem] p-8 md:p-10 border border-zinc-200 dark:border-zinc-800/80 shadow-xl dark:shadow-none">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-200 dark:border-zinc-800">
                    <svg className="w-5 h-5 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Email Us</h4>
                    <a href="mailto:hello@brcstudios.tech" className="text-zinc-500 dark:text-zinc-400 text-sm hover:text-[#F46B2C] transition-colors mt-1 block">hello@brcstudios.tech</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-200 dark:border-zinc-800">
                    <svg className="w-5 h-5 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Headquarters</h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1 leading-relaxed">
                      BRC HUB LLP<br />
                      Bangalore, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-4">Follow DriveMate</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-[#F46B2C] dark:hover:text-[#F46B2C] hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-[#F46B2C] dark:hover:text-[#F46B2C] hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#1a1a1a] rounded-[2rem] p-8 md:p-10 border border-zinc-200 dark:border-zinc-800/80 shadow-xl dark:shadow-none">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-zinc-900 dark:text-zinc-300">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-zinc-50 dark:bg-[#222] border border-zinc-200 dark:border-zinc-700/50 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#F46B2C]/50 focus:border-[#F46B2C] transition-all font-medium"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-zinc-900 dark:text-zinc-300">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-zinc-50 dark:bg-[#222] border border-zinc-200 dark:border-zinc-700/50 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#F46B2C]/50 focus:border-[#F46B2C] transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Custom Topic Dropdown */}
                <div className="space-y-2 relative" ref={dropdownRef}>
                  <label className="text-sm font-bold text-zinc-900 dark:text-zinc-300">How can we help?</label>
                  
                  <button 
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full text-left bg-zinc-50 dark:bg-[#222] border rounded-xl px-4 py-3 flex justify-between items-center transition-all font-medium
                      ${isDropdownOpen 
                        ? 'border-[#F46B2C] ring-2 ring-[#F46B2C]/50 text-zinc-900 dark:text-white' 
                        : 'border-zinc-200 dark:border-zinc-700/50 text-zinc-900 dark:text-white hover:border-zinc-300 dark:hover:border-zinc-600'
                      }
                    `}
                  >
                    {topics.find(t => t.value === formData.topic)?.label}
                    <svg 
                      className={`w-5 h-5 text-zinc-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute z-50 w-full mt-2 bg-white dark:bg-[#222] border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-xl overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                      {topics.map((topic) => (
                        <div
                          key={topic.value}
                          onClick={() => handleTopicSelect(topic.value)}
                          className={`px-4 py-3 cursor-pointer text-sm font-medium transition-colors
                            ${formData.topic === topic.value 
                              ? 'bg-[#F46B2C]/10 text-[#F46B2C] dark:bg-[#F46B2C]/20' 
                              : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#333]'
                            }
                          `}
                        >
                          {topic.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-zinc-900 dark:text-zinc-300">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className="w-full bg-zinc-50 dark:bg-[#222] border border-zinc-200 dark:border-zinc-700/50 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#F46B2C]/50 focus:border-[#F46B2C] transition-all font-medium resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-xl bg-[#F46B2C] hover:bg-[#da5515] text-white font-bold transition-all duration-200 shadow-[0_0_20px_rgba(244,107,44,0.2)] hover:shadow-[0_0_30px_rgba(244,107,44,0.4)] transform hover:-translate-y-1"
                >
                  Send Message
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;