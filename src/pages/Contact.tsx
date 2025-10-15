import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Download, Send, Building2, Phone, CheckCircle2, Shield, Clock, Users } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

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
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.department.trim()) {
      newErrors.department = 'Department/Organization is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (formData.phone && !/^[+]?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
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
    setErrors({});
    setIsSubmitting(false);
    
    // Hide success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleDownloadMoU = () => {
    // Simulate download - in production this would trigger actual download
    const link = document.createElement('a');
    link.download = 'VeriLoan_MoU_Template.pdf';
    link.click();
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
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
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm">Partner With VeriLoan</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
            Transform Loan Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join leading financial institutions in revolutionizing loan processing with AI-powered verification
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Contact Form - Takes 3 columns */}
          <div className="lg:col-span-3">
            <Card className="shadow-xl border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="space-y-3 pb-6">
                <CardTitle className="text-2xl">Request Partnership / MoU</CardTitle>
                <CardDescription className="text-base">
                  Fill out this form and our partnership team will contact you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitSuccess && (
                  <Alert className="mb-6 bg-green-50 border-green-200">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      MoU request submitted successfully! Our team will contact you within 24 hours.
                    </AlertDescription>
                  </Alert>
                )}

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={errors.name ? 'border-destructive' : ''}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={errors.email ? 'border-destructive' : ''}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="department" className="text-sm font-semibold">
                        Department / Organization <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="department"
                        placeholder="e.g., Ministry of Finance, State Bank"
                        value={formData.department}
                        onChange={(e) => handleInputChange('department', e.target.value)}
                        className={errors.department ? 'border-destructive' : ''}
                        disabled={isSubmitting}
                      />
                      {errors.department && (
                        <p className="text-xs text-destructive">{errors.department}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={errors.phone ? 'border-destructive' : ''}
                        disabled={isSubmitting}
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organizationType" className="text-sm font-semibold">
                      Organization Type
                    </Label>
                    <select
                      id="organizationType"
                      value={formData.organizationType}
                      onChange={(e) => handleInputChange('organizationType', e.target.value)}
                      className="w-full px-3 py-2 border rounded-md bg-background text-sm"
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
                    <Label htmlFor="message" className="text-sm font-semibold">
                      Message / Requirements
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements, expected volume, timeline, or any specific questions..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      disabled={isSubmitting}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    onClick={handleSubmit}
                    className="w-full h-12 text-base font-semibold"
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

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our terms of service and privacy policy
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Download MoU */}
            <Card className="shadow-lg border hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Download className="h-5 w-5 text-primary" />
                  Sample MoU Template
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-5 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-lg border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <p className="font-semibold text-lg mb-1">VeriLoan_MoU_Template.pdf</p>
                      <p className="text-sm text-muted-foreground">2.4 MB • Updated October 2025</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive template covering implementation, data security, SLAs, and partnership terms
                  </p>
                  <Button 
                    onClick={handleDownloadMoU} 
                    className="w-full"
                    variant="outline"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Template
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="shadow-lg border">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
                <CardDescription>Reach out to the VeriLoan team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors cursor-pointer group">
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Email</p>
                    <p className="font-semibold">partnerships@veriloan.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors cursor-pointer group">
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Phone</p>
                    <p className="font-semibold">+91 1234 567 890</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors cursor-pointer group">
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">LinkedIn</p>
                    <p className="font-semibold">linkedin.com/company/veriloan</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Headquarters</p>
                    <p className="font-semibold text-sm">Innovation Hub, Tech City, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Partnership Benefits Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">Why Partner With VeriLoan?</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join the future of loan verification with cutting-edge technology and proven results
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="shadow-lg border hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Additional Stats */}
        <Card className="shadow-xl bg-gradient-to-br from-primary/5 via-purple-500/5 to-primary/5 border-2">
          <CardContent className="py-10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">70%</div>
                <p className="text-muted-foreground">Cost Reduction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">₹50K+</div>
                <p className="text-muted-foreground">Loans Verified Daily</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-muted-foreground">System Uptime</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;