import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Download, Send, Building2, Phone, CheckCircle2, Shield, Clock, Users, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    email: '',
    phone: '',
    organizationType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name.trim() || !formData.department.trim() || !formData.email.trim()) {
      alert('Please fill in all required fields (Name, Department, Email)');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitSuccess(true);
    setFormData({ 
      name: '', 
      department: '', 
      email: '', 
      phone: '',
      organizationType: '',
      message: '' 
    });
    setIsSubmitting(false);
    
    // Hide success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleDownloadMoU = () => {
    // Simulate download
    alert('MoU Template downloaded successfully!');
  };

  const partnershipBenefits = [
    {
      icon: Clock,
      title: '90% Faster Processing',
      description: 'Real-time verification vs traditional 7-14 day processing'
    },
    {
      icon: Shield,
      title: '95%+ Fraud Detection',
      description: 'AI-powered anomaly detection with blockchain verification'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 technical assistance and comprehensive training programs'
    },
    {
      icon: CheckCircle2,
      title: 'Complete Compliance',
      description: 'RBI guidelines, data privacy laws, and security standards'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600 font-semibold text-sm">Partner With VeriLoan</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
            Transform Loan Verification
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join leading financial institutions in revolutionizing loan processing with AI-powered verification
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Contact Form - Takes 3 columns */}
          <div className="lg:col-span-3">
            <Card className="shadow-lg border-2 border-slate-200">
              <CardHeader className="space-y-3 pb-6">
                <CardTitle className="text-2xl">Request Partnership / MoU</CardTitle>
                <CardDescription className="text-base">
                  Fill out this form and our partnership team will contact you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-900">Success!</p>
                      <p className="text-sm text-green-800">MoU request submitted successfully! Our team will contact you within 24 hours.</p>
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold text-slate-700">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        disabled={isSubmitting}
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-slate-700">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        disabled={isSubmitting}
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="department" className="text-sm font-semibold text-slate-700">
                        Department / Organization <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="department"
                        placeholder="e.g., Ministry of Finance, State Bank"
                        value={formData.department}
                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                        disabled={isSubmitting}
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        disabled={isSubmitting}
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organizationType" className="text-sm font-semibold text-slate-700">
                      Organization Type
                    </Label>
                    <select
                      id="organizationType"
                      value={formData.organizationType}
                      onChange={(e) => setFormData({...formData, organizationType: e.target.value})}
                      className="w-full h-11 px-3 py-2 border border-slate-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isSubmitting}
                    >
                      <option value="">Select organization type</option>
                      <option value="bank">Bank</option>
                      <option value="nbfc">NBFC</option>
                      <option value="government">Government Department</option>
                      <option value="fintech">Fintech Company</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-slate-700">
                      Message / Requirements
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements, expected volume, timeline, or any specific questions..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      disabled={isSubmitting}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    onClick={handleSubmit}
                    className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Submit Partnership Request
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting, you agree to our terms of service and privacy policy
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Download MoU */}
            <Card className="shadow-lg border-2 border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Download className="h-5 w-5 text-blue-600" />
                  Sample MoU Template
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-5 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border-2 border-dashed border-blue-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <p className="font-semibold text-lg mb-1">VeriLoan_MoU_Template.pdf</p>
                      <p className="text-sm text-slate-600">2.4 MB • Updated October 2025</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Download className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Comprehensive template covering implementation, data security, SLAs, and partnership terms
                  </p>
                  <Button 
                    onClick={handleDownloadMoU} 
                    className="w-full bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Template
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="shadow-lg border-2 border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
                <CardDescription>Reach out to the VeriLoan team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">
                  <div className="w-11 h-11 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-medium">Email</p>
                    <p className="font-semibold text-slate-900">partnerships@veriloan.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">
                  <div className="w-11 h-11 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-medium">Phone</p>
                    <p className="font-semibold text-slate-900">+91 1234 567 890</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">
                  <div className="w-11 h-11 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-medium">LinkedIn</p>
                    <p className="font-semibold text-slate-900">linkedin.com/company/veriloan</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-slate-100 rounded-lg">
                  <div className="w-11 h-11 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-medium">Headquarters</p>
                    <p className="font-semibold text-sm text-slate-900">Innovation Hub, Tech City, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Partnership Benefits Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">Why Partner With VeriLoan?</h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Join the future of loan verification with cutting-edge technology and proven results
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="shadow-lg border-2 border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-slate-900">{benefit.title}</h3>
                    <p className="text-sm text-slate-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Additional Stats */}
        <Card className="shadow-xl bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 border-2 border-blue-200">
          <CardContent className="py-10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">70%</div>
                <p className="text-slate-700 font-medium">Cost Reduction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                <p className="text-slate-700 font-medium">Loans Verified Daily</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <p className="text-slate-700 font-medium">System Uptime</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;