import { ArrowRight, Shield, Eye, MapPin, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Landing = () => {
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    setStatsVisible(true);
  }, []);

  const stats = [
    { value: 2847, label: 'Total Loans', suffix: '+' },
    { value: 127, label: 'Frauds Detected', suffix: '' },
    { value: 1842, label: 'Field Visits Reduced', suffix: '+' },
    { value: 4.5, label: 'Fraud Rate', suffix: '%' }
  ];

  const innovations = [
    {
      icon: Eye,
      title: 'AI Fraud Detection',
      description: 'Advanced object detection and duplicate matching to identify fraudulent claims instantly'
    },
    {
      icon: MapPin,
      title: 'Geo-tag Verification',
      description: 'GPS-based location tracking ensures assets are where they should be'
    },
    {
      icon: Clock,
      title: 'Temporal Proof',
      description: 'Timestamp verification prevents photo reuse and ensures evidence authenticity'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>AI-Powered Verification System</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              LoanTrack — Smarter, Transparent,<br />AI-Driven Loan Verification
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto">
              Ensuring every rupee reaches the right purpose
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/beneficiary">
                <Button className="btn-hero">
                  Try Prototype
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/pilot">
                <Button variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-3 rounded-2xl transition-all duration-300">
                  View System Flow
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {statsVisible && (
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                The Problem We Solve
              </h2>
              <p className="text-lg text-muted-foreground">
                Traditional loan verification relies on manual field visits, leading to delays, increased costs, and vulnerability to fraud
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="card-hover shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Before LoanTrack</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Manual field visits required</li>
                    <li>• 2-3 weeks verification time</li>
                    <li>• High operational costs</li>
                    <li>• Easy to manipulate evidence</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-hover shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">After LoanTrack</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• AI-powered remote verification</li>
                    <li>• 2-4 hours verification time</li>
                    <li>• 70% cost reduction</li>
                    <li>• Fraud detection rate: 95%+</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Three simple steps to verify loan utilization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Capture Evidence',
                description: 'Beneficiary uploads photos/videos of assets using their mobile device, even offline'
              },
              {
                step: '02',
                title: 'AI Analysis',
                description: 'Our AI verifies authenticity using object detection, geo-location, and temporal checks'
              },
              {
                step: '03',
                title: 'Officer Review',
                description: 'Field officers review AI reports and approve or flag suspicious cases for investigation'
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Innovations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Key Innovations
            </h2>
            <p className="text-lg text-muted-foreground">
              Powered by cutting-edge AI and mobile technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {innovations.map((innovation, index) => (
              <Card key={index} className="card-hover shadow-card">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                    <innovation.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{innovation.title}</h3>
                  <p className="text-muted-foreground">{innovation.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Loan Verification?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Join the revolution in transparent, AI-powered loan management
          </p>
          <Link to="/contact">
            <Button className="btn-hero">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

// Simple CountUp component
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
