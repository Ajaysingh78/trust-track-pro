import { ArrowRight, Shield, Eye, MapPin, Clock, CheckCircle, TrendingUp, Zap, Lock, Users, Award, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';  // ✅ ADD THIS IMPORT
import { useEffect, useState } from 'react';

const Landing = () => {
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    setStatsVisible(true);
  }, []);

  const stats = [
    { 
      value: 2847, 
      label: 'Loans Verified', 
      suffix: '+',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    { 
      value: 127, 
      label: 'Frauds Detected', 
      suffix: '',
      icon: Shield,
      color: 'text-red-600'
    },
    { 
      value: 1842, 
      label: 'Field Visits Saved', 
      suffix: '+',
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    { 
      value: 95, 
      label: 'Success Rate', 
      suffix: '%',
      icon: Award,
      color: 'text-purple-600'
    }
  ];

  const innovations = [
    {
      icon: Eye,
      title: 'AI Fraud Detection',
      description: 'Advanced object detection and duplicate matching to identify fraudulent claims instantly with 95%+ accuracy',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Geo-tag Verification',
      description: 'GPS-based location tracking ensures assets are where they should be, preventing location fraud',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Temporal Proof',
      description: 'Timestamp verification prevents photo reuse and ensures evidence authenticity in real-time',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lock,
      title: 'Blockchain Security',
      description: 'Immutable records stored on blockchain ensure data integrity and prevent tampering',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Instant Processing',
      description: 'Reduce verification time from weeks to hours with automated AI-powered analysis',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Multi-Role Dashboard',
      description: 'Separate interfaces for beneficiaries, officers, and admins with role-based access',
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Loan Officer, State Bank',
      content: 'VeriLoan reduced our verification time by 80%. The AI detection is incredibly accurate and has helped us identify frauds we would have missed.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      role: 'Branch Manager, HDFC',
      content: 'The blockchain integration gives us complete transparency. Our customers trust the system and field visit costs have dropped dramatically.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Amit Patel',
      role: 'Beneficiary',
      content: 'Simple to use! I just took photos from my phone and got approval in 3 hours. No need to wait for field officers.',
      rating: 5,
      avatar: '👨'
    }
  ];

  const trustBadges = [
    { label: 'ISO 27001 Certified', icon: Shield },
    { label: 'RBI Compliant', icon: Award },
    { label: 'GDPR Ready', icon: Lock },
    { label: '99.9% Uptime', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      
      {/* Hero Section - Ultra Modern */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-violet-600 to-purple-700 text-white py-20 md:py-32">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform">
              <Shield className="h-5 w-5" />
              <span>AI-Powered Blockchain Verification System</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="block">VeriLoan</span>
              <span className="block text-3xl md:text-5xl font-semibold mt-4 text-white/90">
                Smarter, Transparent, AI-Driven<br/>Loan Verification
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ensuring every rupee reaches the right purpose with cutting-edge AI, blockchain technology, and real-time verification
            </p>
            
            {/* CTA Buttons - FIXED WITH LINK */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/beneficiary">
                <Button className="bg-white text-blue-600 hover:bg-slate-100 font-bold px-8 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                  Try Prototype
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/pilot">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-6 text-lg rounded-2xl transition-all transform hover:scale-105">
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-sm text-white/80">
                    <Icon className="h-4 w-4" />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-white dark:text-slate-950"/>
          </svg>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-16 -mt-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="card-hover shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                      {statsVisible && (
                        <CountUp end={stat.value} suffix={stat.suffix} />
                      )}
                    </div>
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-200">The Challenge</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                The Problem We Solve
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Traditional loan verification is slow, expensive, and vulnerable to fraud. We're changing that with AI and blockchain.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-hover shadow-xl border-2 border-red-100 dark:border-red-900 hover:border-red-200 transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Before VeriLoan</h3>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">✗</span>
                      <span>Manual field visits required for every loan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">✗</span>
                      <span>2-3 weeks average verification time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">✗</span>
                      <span>High operational and travel costs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">✗</span>
                      <span>Easy to manipulate photos and documents</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">✗</span>
                      <span>No real-time tracking or transparency</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-hover shadow-xl border-2 border-green-100 dark:border-green-900 hover:border-green-200 transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">After VeriLoan</h3>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>AI-powered remote verification from anywhere</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>2-4 hours average processing time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>70% reduction in operational costs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>95%+ fraud detection accuracy with AI</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Blockchain-backed transparency & security</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">Simple Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Three simple steps to verify loan utilization with complete transparency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Capture Evidence',
                description: 'Beneficiary uploads photos/videos of purchased assets using their mobile device. Works offline with automatic sync.',
                icon: '📸',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                step: '02',
                title: 'AI Analysis',
                description: 'Our AI verifies authenticity using object detection, geo-location, timestamp verification, and duplicate checking.',
                icon: '🤖',
                color: 'from-purple-500 to-pink-500'
              },
              {
                step: '03',
                title: 'Officer Review',
                description: 'Field officers review AI-generated reports and approve or flag suspicious cases for investigation.',
                icon: '✅',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((step, index) => (
              <Card key={index} className="relative overflow-hidden card-hover shadow-xl border-0 bg-white dark:bg-slate-900">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-10 rounded-bl-full`}></div>
                <CardContent className="p-8">
                  <div className="text-7xl mb-4">{step.icon}</div>
                  <div className={`text-6xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-4`}>
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Innovations - Grid Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">Technology</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Key Innovations
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Powered by cutting-edge AI, blockchain, and mobile-first technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {innovations.map((innovation, index) => {
              const Icon = innovation.icon;
              return (
                <Card key={index} className="card-hover shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-0 bg-white dark:bg-slate-900 overflow-hidden group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${innovation.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{innovation.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{innovation.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-200">Success Stories</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Trusted by banks, officers, and beneficiaries across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover shadow-xl border-0 bg-white dark:bg-slate-900">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-violet-300 mb-4" />
                  <p className="text-slate-600 dark:text-slate-400 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-slate-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - FIXED WITH LINK */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-violet-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Loan Verification?
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of financial institutions using VeriLoan for transparent, AI-powered loan management. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button className="bg-white text-blue-600 hover:bg-slate-100 font-bold px-10 py-6 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all">
                Start Free Trial
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-10 py-6 text-lg rounded-2xl transform hover:scale-105 transition-all">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Enhanced CountUp component
const CountUp = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count.toLocaleString()}{suffix}</>;
};

export default Landing;