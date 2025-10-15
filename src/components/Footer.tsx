import { Shield, Mail, Linkedin, Twitter, Github, Phone, MapPin, Award, Lock, Zap, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Footer = () => {
  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for subscribing! 🎉');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        
        {/* Top Section - Newsletter */}
        <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">Stay Updated with VeriLoan</h3>
            <p className="text-white/90">Get the latest updates on AI-powered loan verification technology</p>
            
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-6">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="h-12 bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
              />
              <Button type="submit" className="h-12 bg-white text-blue-600 hover:bg-slate-100 font-semibold px-8 whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl blur-md opacity-70"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-violet-600 p-2.5 rounded-xl shadow-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                </div>
                <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  VeriLoan
                </span>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Revolutionizing loan verification with AI, blockchain, and mobile-first technology. Ensuring transparency, security, and efficiency in every transaction.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-xs bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <Shield className="h-3 w-3 text-green-400" />
                  <span>ISO Certified</span>
                </div>
                <div className="flex items-center gap-2 text-xs bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <Award className="h-3 w-3 text-blue-400" />
                  <span>RBI Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-xs bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <Lock className="h-3 w-3 text-purple-400" />
                  <span>GDPR Ready</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-slate-400 uppercase tracking-wider">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: '#', color: 'hover:bg-blue-600' },
                  { icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
                  { icon: Github, href: '#', color: 'hover:bg-slate-700' },
                  { icon: Mail, href: '#', color: 'hover:bg-red-600' }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all ${social.color} hover:scale-110 group`}
                    >
                      <Icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-violet-500 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', to: '/' },
                { name: 'Pilot Demo', to: '/pilot' },
                { name: 'AI Insights', to: '/ai-insights' },
                { name: 'Contact Us', to: '/contact' },
                { name: 'About NOVA', to: '#' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.to}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-violet-500 rounded-full"></div>
              Features
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {[
                'AI Fraud Detection',
                'Geo-tag Verification',
                'Temporal Proof',
                'Blockchain Security',
                'Offline Capture',
                'Real-time Analytics'
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-violet-500 rounded-full"></div>
              Contact
            </h3>
            <div className="space-y-4 text-sm">
              <a href="mailto:contact@veriloan.com" className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-0.5">Email</div>
                  <div className="font-medium">contact@veriloan.com</div>
                </div>
              </a>

              <a href="tel:+911234567890" className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-0.5">Phone</div>
                  <div className="font-medium">+91 123 456 7890</div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-0.5">Location</div>
                  <div className="font-medium">Bhopal, Madhya Pradesh</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p>&copy; {currentYear} VeriLoan by Team NOVA. All rights reserved.</p>
              <div className="hidden md:block w-1 h-1 bg-slate-600 rounded-full"></div>
              <div className="flex items-center gap-1">
                <Lock className="h-3 w-3" />
                <span className="text-xs">AES-256 Encrypted</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                Privacy Policy
                <ExternalLink className="h-3 w-3" />
              </a>
              <span className="text-slate-600">•</span>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                Terms of Service
                <ExternalLink className="h-3 w-3" />
              </a>
              <span className="text-slate-600">•</span>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                Cookie Policy
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-white/10">
            {[
              { icon: Shield, text: 'Bank Grade Security' },
              { icon: Zap, text: '99.9% Uptime' },
              { icon: Award, text: 'ISO 27001 Certified' },
              { icon: Lock, text: 'GDPR Compliant' }
            ].map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="flex items-center gap-2 text-xs text-slate-500">
                  <Icon className="h-4 w-4 text-slate-600" />
                  <span>{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};