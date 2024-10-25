import React from 'react';
import { Mail, Instagram, Twitter, Facebook, Heart, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#2C2E39] text-gray-300 ">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Movie Maven</h3>
            <p className="text-sm">
              Your ultimate destination for movie reviews, ratings, and recommendations.
              Discover the magic of cinema with us.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white transition-colors">New Releases</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Top Rated</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Coming Soon</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Movie News</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Action</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Comedy</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Drama</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Sci-Fi</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-sm">support@moviemaven.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-1">
              <span>© {currentYear} Movie Maven. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>for movie lovers</span>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;