'use client';
import React, { useState } from 'react';
import { ChefHat, Star, Users, Calendar, Phone, Play, ArrowRight, CheckCircle } from 'lucide-react';

const Homepage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const services = [
    {
      icon: ChefHat,
      title: 'Personal Chef Services',
      description: 'Professional chefs come to your home to prepare customized meals for any occasion.',
      features: ['Custom menu planning', 'Fresh ingredient sourcing', 'Professional cooking', 'Kitchen cleanup']
    },
    {
      icon: Calendar,
      title: 'Event Catering',
      description: 'Make your special events memorable with our expert catering and chef services.',
      features: ['Birthday parties', 'Corporate events', 'Wedding catering', 'Holiday dinners']
    },
    {
      icon: Users,
      title: 'Cooking Classes',
      description: 'Learn from professional chefs with personalized cooking lessons in your kitchen.',
      features: ['One-on-one instruction', 'Group classes', 'Cuisine specialization', 'Recipe collections']
    }
  ];

  const featuredChefs = [
    {
      name: 'Chef Ahmad Rahman',
      specialty: 'Bengali & Indian Cuisine',
      experience: '12 Years',
      rating: 4.9,
      image: '/api/placeholder/250/250',
      description: 'Master of traditional Bengali flavors with modern presentation techniques.'
    },
    {
      name: 'Chef Maria Santos',
      specialty: 'Mediterranean & Italian',
      experience: '8 Years',
      rating: 4.8,
      image: '/api/placeholder/250/250',
      description: 'Passionate about authentic Italian cuisine and Mediterranean healthy cooking.'
    },
    {
      name: 'Chef David Kim',
      specialty: 'Asian Fusion',
      experience: '10 Years',
      rating: 4.9,
      image: '/api/placeholder/250/250',
      description: 'Creative fusion specialist blending Asian flavors with contemporary techniques.'
    }
  ];

  const testimonials = [
    {
      name: 'Fatima Ahmed',
      location: 'Gulshan, Dhaka',
      text: 'ChefHub transformed our anniversary dinner into an unforgettable experience. Chef Ahmad created the most amazing Bengali feast right in our kitchen!',
      rating: 5
    },
    {
      name: 'Robert Johnson',
      location: 'Banani, Dhaka',
      text: 'The cooking class with Chef Maria was incredible. I finally learned how to make authentic pasta from scratch. Highly recommend!',
      rating: 5
    },
    {
      name: 'Ayesha Khan',
      location: 'Dhanmondi, Dhaka',
      text: 'Perfect for our corporate event. Professional service, delicious food, and everything was handled seamlessly. Will definitely book again.',
      rating: 5
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Choose Your Service',
      description: 'Select from personal chef, catering, or cooking classes based on your needs.'
    },
    {
      number: '02',
      title: 'Pick Your Chef',
      description: 'Browse our verified chefs and choose based on cuisine specialty and reviews.'
    },
    {
      number: '03',
      title: 'Schedule & Customize',
      description: 'Set your preferred date, time, and customize your menu preferences.'
    },
    {
      number: '04',
      title: 'Enjoy the Experience',
      description: 'Relax while our professional chef creates an amazing culinary experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Chefs
                <span className="block text-yellow-100">At Your Service</span>
              </h1>
              <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
                Experience restaurant-quality dining in the comfort of your home with our verified professional chefs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg flex items-center justify-center">
                  <ChefHat className="mr-2 h-5 w-5" />
                  Hire a Chef Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-yellow-600 transition-colors duration-300 flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch How It Works
                </button>
              </div>
              <div className="flex items-center space-x-6 text-yellow-100">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-200 mr-1" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="ml-1">Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-yellow-200 mr-1" />
                  <span className="font-semibold">10,000+</span>
                  <span className="ml-1">Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 transform rotate-3">
                <div className="bg-white rounded-xl p-6 transform -rotate-6 shadow-2xl">
                  <div className="flex items-center justify-center h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg">
                    <ChefHat className="h-24 w-24 text-yellow-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From intimate dinners to grand celebrations, we bring culinary excellence to every occasion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 text-yellow-600 font-semibold hover:text-yellow-700 flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started with ChefHub is simple. Follow these easy steps to your perfect dining experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-yellow-500 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 h-6 w-6 text-yellow-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Chefs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Chefs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet some of our top-rated chefs who are ready to create extraordinary culinary experiences for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredChefs.map((chef, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center">
                  <ChefHat className="h-20 w-20 text-yellow-600" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{chef.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{chef.rating}</span>
                    </div>
                  </div>
                  <p className="text-yellow-600 font-medium mb-2">{chef.specialty}</p>
                  <p className="text-gray-500 text-sm mb-3">{chef.experience} Experience</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{chef.description}</p>
                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300">
                    Book This Chef
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Dont just take our word for it. Heres what our satisfied customers have to say.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                {testimonials[activeTestimonial].text}
              </blockquote>
              <div className="font-semibold text-gray-900 text-lg">
                {testimonials[activeTestimonial].name}
              </div>
              <div className="text-gray-500">
                {testimonials[activeTestimonial].location}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeTestimonial ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Dining Experience?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
            Join thousands of satisfied customers who have discovered the joy of professional chef services. Book your chef today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg flex items-center justify-center">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Chef Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-yellow-600 transition-colors duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Us: +880 1234-567890
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;