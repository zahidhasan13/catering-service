import React from 'react';
import { ChefHat, Users, Award, Heart, Clock, Shield, Star, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '500+', label: 'Professional Chefs', icon: ChefHat },
    { number: '10,000+', label: 'Happy Customers', icon: Users },
    { number: '50,000+', label: 'Meals Served', icon: Award },
    { number: '5 Years', label: 'Of Excellence', icon: Star }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Food',
      description: 'We believe great food brings people together and creates lasting memories.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every chef is thoroughly vetted and trained to maintain our high standards.'
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: 'Punctual, professional service that you can count on every time.'
    },
    {
      icon: CheckCircle,
      title: 'Customer First',
      description: 'Your satisfaction is our priority, and we go above and beyond to deliver.'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: '/api/placeholder/300/300',
      description: 'Culinary school graduate with 15 years of restaurant management experience.'
    },
    {
      name: 'Chef Marcus Chen',
      role: 'Head of Culinary Operations',
      image: '/api/placeholder/300/300',
      description: 'Award-winning chef with expertise in Asian and Mediterranean cuisines.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Customer Experience Manager',
      image: '/api/placeholder/300/300',
      description: 'Hospitality expert ensuring every customer interaction exceeds expectations.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About ChefHub</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Connecting food lovers with professional chefs to create extraordinary culinary experiences in the comfort of your home.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="h-12 w-12 text-yellow-500" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  ChefHub was born from a simple idea: everyone deserves access to exceptional culinary experiences, regardless of their cooking skills or time constraints. Founded in 2020, we recognized the growing demand for personalized dining experiences in the comfort of home.
                </p>
                <p>
                  What started as a small network of local chefs has grown into Bangladesh's premier chef-on-demand platform. We've carefully curated a community of talented culinary professionals who share our passion for creating memorable dining moments.
                </p>
                <p>
                  Today, we're proud to serve thousands of families across Dhaka and beyond, bringing restaurant-quality meals and professional culinary expertise directly to their kitchens.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-yellow-100 rounded-lg p-8 transform rotate-3">
                <div className="bg-white rounded-lg p-6 transform -rotate-3 shadow-lg">
                  <ChefHat className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-center">
                    To make professional culinary experiences accessible to everyone, creating moments of joy through exceptional food and service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <IconComponent className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind ChefHub who work tirelessly to bring you exceptional culinary experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full p-2">
                    <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                      <Users className="h-20 w-20 text-gray-400" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-yellow-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience ChefHub?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
            Join thousands of satisfied customers who have discovered the joy of professional chef services at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Hire a Chef Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;