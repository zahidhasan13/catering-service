import React from 'react';
import { ChefHat, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickMenuItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Hire Chef', href: '/hire-chef' },
    { name: 'Contact', href: '/contact' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Slogan */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <ChefHat className="h-8 w-8 text-yellow-500 mr-2" />
              <span className="text-xl font-bold">ChefHub</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Connecting food lovers with professional chefs. Experience culinary excellence at your doorstep with our premium chef services.
            </p>
          </div>

          {/* Quick Menu */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Quick Menu</h3>
            <ul className="space-y-2">
              {quickMenuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-yellow-500 text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address and Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Contact Information</h3>
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>123 Culinary Street</p>
                  <p>Food District, Dhaka 1000</p>
                  <p>Bangladesh</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>+880 1234-567890</p>
                  <p>+880 9876-543210</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>info@chefhub.com</p>
                  <p>support@chefhub.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Social Link</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 ChefHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;