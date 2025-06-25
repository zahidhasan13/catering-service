'use client';
import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Search, 
  Filter,
  ChevronRight,
  Heart,
  Zap,
  Target,
  Award,
  Coffee,
  Wifi,
  Car,
  GraduationCap,
  Briefcase,
  Globe
} from 'lucide-react';

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90k - $120k',
      experience: '3-5 years',
      description: 'Join our dynamic frontend team to build cutting-edge user interfaces using React, Next.js, and modern web technologies.',
      requirements: [
        '3+ years of React experience',
        'Experience with Next.js and TypeScript',
        'Strong CSS and responsive design skills',
        'Experience with state management (Redux/Zustand)',
        'Familiarity with testing frameworks'
      ],
      benefits: ['Remote work', 'Health insurance', 'Stock options', 'Learning budget'],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$70k - $95k',
      experience: '2-4 years',
      description: 'Create beautiful and intuitive user experiences for our web and mobile applications.',
      requirements: [
        '2+ years of UX/UI design experience',
        'Proficiency in Figma and Adobe Creative Suite',
        'Strong portfolio showcasing web and mobile designs',
        'Understanding of design systems',
        'Experience with user research and testing'
      ],
      benefits: ['Hybrid work', 'Health insurance', 'Design tools budget', 'Flexible hours'],
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$110k - $140k',
      experience: '4-6 years',
      description: 'Lead product strategy and development for our core platform, working closely with engineering and design teams.',
      requirements: [
        '4+ years of product management experience',
        'Experience with agile development methodologies',
        'Strong analytical and problem-solving skills',
        'Excellent communication and leadership abilities',
        'Technical background preferred'
      ],
      benefits: ['Relocation assistance', 'Equity package', 'Conference budget', 'Gym membership'],
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$95k - $125k',
      experience: '3-5 years',
      description: 'Build scalable backend systems and APIs using Node.js, Python, and cloud technologies.',
      requirements: [
        '3+ years of backend development experience',
        'Proficiency in Node.js or Python',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud platforms (AWS, GCP)',
        'Understanding of microservices architecture'
      ],
      benefits: ['Remote work', 'Health insurance', 'Stock options', 'Home office budget'],
      posted: '5 days ago'
    },
    {
      id: 5,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$55k - $75k',
      experience: '1-3 years',
      description: 'Drive growth through digital marketing campaigns, content creation, and social media management.',
      requirements: [
        '1+ years of digital marketing experience',
        'Experience with Google Ads and Facebook Ads',
        'Strong writing and content creation skills',
        'Knowledge of analytics tools (Google Analytics, etc.)',
        'Social media management experience'
      ],
      benefits: ['Flexible hours', 'Professional development', 'Team events', 'Health insurance'],
      posted: '1 day ago'
    },
    {
      id: 6,
      title: 'Data Scientist',
      department: 'Data',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$100k - $130k',
      experience: '3-5 years',
      description: 'Analyze complex datasets to drive business insights and build machine learning models.',
      requirements: [
        '3+ years of data science experience',
        'Proficiency in Python and SQL',
        'Experience with machine learning frameworks',
        'Strong statistical analysis skills',
        'PhD or Masters in related field preferred'
      ],
      benefits: ['Research time', 'Conference budget', 'Stock options', 'Flexible schedule'],
      posted: '1 week ago'
    }
  ];

  const departments = ['all', 'Engineering', 'Design', 'Product', 'Marketing', 'Data'];
  const locations = ['all', 'Remote', 'New York, NY', 'San Francisco, CA', 'Austin, TX', 'Seattle, WA'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const companyValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'People First',
      description: 'We prioritize our team\'s well-being and growth above all else.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to solve problems.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Recognition',
      description: 'We celebrate achievements and recognize outstanding contributions.'
    }
  ];

  const benefits = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Free Meals & Snacks',
      description: 'Catered lunches and fully stocked kitchen'
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Remote Work',
      description: 'Work from anywhere with flexible hours'
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: 'Commuter Benefits',
      description: 'Transportation allowance and parking'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Learning Budget',
      description: '$2000 annual budget for courses and conferences'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Amazing Team
            </h1>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              We're building the future of technology with passionate people who love what they do. 
              Come grow with us and make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors">
                View Open Positions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600">We take care of our team</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 text-yellow-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your next opportunity</p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12 bg-gray-50 p-6 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>
                    {loc === 'all' ? 'All Locations' : loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                   onClick={() => setSelectedJob(job)}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-green-600 font-semibold">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Users className="w-4 h-4" />
                      {job.experience}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{job.posted}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't see the perfect role?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-50 transition-colors">
            Submit General Application
          </button>
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedJob.title}</h2>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {selectedJob.department}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedJob.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {selectedJob.type}
                    </div>
                    <div className="flex items-center gap-1 text-green-600 font-semibold">
                      <DollarSign className="w-4 h-4" />
                      {selectedJob.salary}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Job Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.benefits.map((benefit, index) => (
                    <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 pt-4">
                <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-all">
                  Apply Now
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Save Job
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}