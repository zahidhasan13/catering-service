'use client';
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send,Plus, Minus } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+880 1234-567890', '+880 9876-543210'],
      description: 'Speak directly with our customer service team',
      available: '24/7 Support'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@chefhub.com', 'support@chefhub.com'],
      description: 'Send us your questions or booking requests',
      available: 'Response within 24 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      details: ['Available on website'],
      description: 'Get instant help from our support team',
      available: 'Mon-Sun: 8AM-10PM'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Culinary Street', 'Food District, Dhaka 1000'],
      description: 'Come to our office for in-person consultation',
      available: 'Mon-Fri: 9AM-6PM'
    }
  ];

  const faqs = [
    {
      question: 'How far in advance should I book a chef?',
      answer: 'We recommend booking at least 48 hours in advance for regular services. For special events or holidays, please book 1-2 weeks ahead to ensure availability of your preferred chef.'
    },
    {
      question: 'What is included in the chef service?',
      answer: 'Our service includes menu consultation, ingredient shopping, cooking, serving, and complete kitchen cleanup. The chef brings their own professional tools and equipment.'
    },
    {
      question: 'Can I request specific dietary restrictions or cuisines?',
      answer: 'Absolutely! Our chefs specialize in various cuisines and can accommodate dietary restrictions including vegetarian, vegan, gluten-free, halal, and other specific requirements.'
    },
    {
      question: 'What are your pricing options?',
      answer: 'Pricing varies based on the service type, number of guests, menu complexity, and duration. Contact us for a personalized quote based on your specific needs.'
    },
    {
      question: 'Do you provide ingredients or do I need to buy them?',
      answer: 'We handle all ingredient sourcing and shopping as part of our service. The cost of ingredients is included in your final quote, ensuring fresh, high-quality ingredients.'
    },
    {
      question: 'What if I need to cancel or reschedule my booking?',
      answer: 'You can cancel or reschedule up to 24 hours before your scheduled service without any penalty. Cancellations within 24 hours may incur a small fee.'
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Ready to book your perfect dining experience? Were here to help make it happen.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the contact method that works best for you. We are always ready to assist.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <div className="space-y-1 mb-3">
                    {method.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700 font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{method.description}</p>
                  <div className="bg-yellow-50 rounded-lg p-2">
                    <p className="text-yellow-700 text-xs font-medium">{method.available}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and we will get back to you within 24 hours with all the information you need.
              </p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200"
                      placeholder="+880 1234-567890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="personal-chef">Personal Chef</option>
                      <option value="event-catering">Event Catering</option>
                      <option value="cooking-class">Cooking Class</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200"
                    placeholder="Tell us about your event, dietary preferences, number of guests, or any special requirements..."
                  ></textarea>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center shadow-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Business Info & Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
              
              {/* Address Card */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">ChefHub Headquarters</h3>
                    <p className="text-gray-700 mb-1">123 Culinary Street</p>
                    <p className="text-gray-700 mb-1">Food District, Dhaka 1000</p>
                    <p className="text-gray-700 mb-4">Bangladesh</p>
                    <button className="text-yellow-600 font-medium hover:text-yellow-700">
                      Get Directions →
                    </button>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center my-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.8889370787747!2d90.39156016059624!3d23.866829175363925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4185f410f81%3A0xcc0590c6b4f4e14d!2sRoad-2%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1750592781661!5m2!1sen!2sbd" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>

              {/* Business Hours */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-yellow-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">10:00 AM - 9:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-green-700 text-sm font-medium">
                    📞 24/7 Emergency Booking Hotline Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find quick answers to common questions about our chef services.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <Minus className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Contact Our Support Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;