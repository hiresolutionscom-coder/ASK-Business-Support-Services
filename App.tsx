
import React from 'react';
import { 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Globe, 
  ShieldCheck, 
  BarChart3,
  ChevronRight,
  UserCircle
} from 'lucide-react';
import { SERVICES, TEAM, CLIENTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-800 p-2 rounded-lg">
                <Building2 className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-blue-900">ASK <span className="text-blue-600 font-medium text-lg">Business Support Services</span></span>
            </div>
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <a href="#overview" className="hover:text-blue-700 transition-colors">Overview</a>
              <a href="#services" className="hover:text-blue-700 transition-colors">Services</a>
              <a href="#clients" className="hover:text-blue-700 transition-colors">Clients</a>
              <a href="#team" className="hover:text-blue-700 transition-colors">Leadership</a>
              <a href="#contact" className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors">Contact Us</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             <img 
               src="https://picsum.photos/seed/industrial/1600/900" 
               alt="Corporate Workforce" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
                Reliable Manpower & <br/>
                <span className="text-blue-400">Workforce Solutions</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Trusted staffing, HR solutions, and industrial support for manufacturing, automotive, and corporate industries since 2014.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#services" className="px-8 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-all flex items-center">
                  Explore Services <ChevronRight className="ml-2 w-4 h-4" />
                </a>
                <a href="#contact" className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-md font-semibold hover:bg-white/20 transition-all">
                  Partner With Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-blue-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">2014</div>
                <div className="text-blue-200 text-sm uppercase tracking-wider">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">750+</div>
                <div className="text-blue-200 text-sm uppercase tracking-wider">Total Workforce</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-blue-200 text-sm uppercase tracking-wider">Compliance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">12+</div>
                <div className="text-blue-200 text-sm uppercase tracking-wider">Top Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section id="overview" className="py-20 bg-white scroll-mt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Company Overview</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  ASK Business Support Services is a trusted manpower and workforce solutions partner delivering reliable, compliant, and performance-driven staffing and business support services.
                </p>
                <p className="text-slate-600 mb-8">
                  The company has evolved into a preferred partner for organizations seeking contract staffing, industrial manpower support, and specialized HR outsourcing. We are recognized for our service quality, operational governance, and long-term client partnerships.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Service Quality & Reliability",
                    "Strong Operational Governance",
                    "Compliance-Driven Processes",
                    "Long-term Client Partnerships"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/biz1/400/500" alt="Workforce Management" className="rounded-2xl shadow-lg mt-8" />
                <img src="https://picsum.photos/seed/biz2/400/500" alt="Office Support" className="rounded-2xl shadow-lg mb-8" />
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section id="services" className="py-20 bg-slate-50 scroll-mt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Capabilities</h2>
              <p className="text-3xl font-bold text-slate-900 sm:text-4xl">Core Services & Solutions</p>
              <p className="mt-4 max-w-2xl mx-auto text-slate-600">
                Specialized support designed to optimize your operations and human capital needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((svc, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-slate-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-6">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{svc.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm">{svc.description}</p>
                  
                  <ul className="space-y-3 mb-6 flex-grow">
                    {svc.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {(svc.focus || svc.models || svc.strengths) && (
                    <div className="pt-6 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Key Indicators</span>
                      <div className="flex flex-wrap gap-2">
                        {(svc.focus || svc.models || svc.strengths)?.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] rounded font-semibold">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="team" className="py-20 bg-white scroll-mt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Governance</h2>
              <p className="text-3xl font-bold text-slate-900 sm:text-4xl">Leadership Team</p>
              <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-sm">
                Driven by industry veterans committed to operational discipline and ethical business practices.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM.map((member, i) => (
                <div key={i} className="flex items-center p-6 bg-slate-50 rounded-xl">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <UserCircle className="w-8 h-8 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{member.name}</h4>
                    <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="py-20 bg-slate-900 scroll-mt overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">Portfolio</h2>
              <p className="text-3xl font-bold text-white sm:text-4xl">Trusted by Industry Leaders</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {CLIENTS.map((client, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-center hover:bg-white/10 transition-colors">
                  <span className="text-slate-300 font-medium text-sm">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose ASK Business Support Services?</h2>
                <div className="space-y-6">
                  {[
                    { 
                      title: "Vast Expertise", 
                      desc: "Strong expertise in staffing and workforce operations across various industrial sectors.",
                      icon: <ShieldCheck className="w-5 h-5" />
                    },
                    { 
                      title: "Scaleable Management", 
                      desc: "Proven ability to manage large workforce requirements for major manufacturing plants.",
                      icon: <Globe className="w-5 h-5" />
                    },
                    { 
                      title: "Disciplined Governance", 
                      desc: "Leadership-driven governance ensures consistent process discipline and quality.",
                      icon: <BarChart3 className="w-5 h-5" />
                    },
                    { 
                      title: "Transparent & Ethical", 
                      desc: "Commitment to ethical and compliant business practices in all our operations.",
                      icon: <CheckCircle2 className="w-5 h-5" />
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex space-x-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm text-blue-600 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="relative">
                  <img 
                    src="https://picsum.photos/seed/choice/600/400" 
                    alt="Why Choose Us" 
                    className="rounded-2xl shadow-2xl relative z-10"
                  />
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-50 scroll-mt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center lg:text-left">Get in Touch</h2>
                <p className="text-slate-600 mb-8 text-center lg:text-left">
                  Ready to optimize your workforce? Contact our team for specialized manpower and HR solutions.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm">
                    <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900">Registered Office</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mt-1">
                        Lb 41, 1st Floor, NH 2<br/>
                        Opposite to Govt. Hr. Sec School<br/>
                        Kambar Street, Maraimalai Nagar<br/>
                        Chennai – 603209, Tamil Nadu
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
                    <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900">Phone Number</h4>
                      <p className="text-slate-600 text-sm mt-1">+91 78710 37553</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
                    <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900">Email Address</h4>
                      <p className="text-slate-600 text-sm mt-1">askentp1@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-slate-200">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
                      <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Subject</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Staffing Inquiry</option>
                      <option>HR Solutions</option>
                      <option>IT Recruitment</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your workforce needs..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <Building2 className="text-white w-6 h-6" />
            <span className="text-xl font-bold text-white">ASK Business Support Services</span>
          </div>
          <p className="max-w-2xl mx-auto text-sm mb-8">
            Committed to reliability, operational excellence, and long-term client partnership. Providing industry-leading manpower solutions across Tamil Nadu and beyond.
          </p>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>© {new Date().getFullYear()} ASK Business Support Services. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Compliance Documentation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
