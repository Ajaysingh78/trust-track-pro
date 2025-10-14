import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Download, Send, Building2, Phone } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('MoU request submitted successfully! We will contact you soon.');
    setFormData({ name: '', department: '', email: '', message: '' });
  };

  const handleDownloadMoU = () => {
    toast.success('Sample MoU document downloaded');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact & Partnership</h1>
          <p className="text-lg text-muted-foreground">
            Ready to transform loan verification? Let's collaborate
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Request MoU / Partnership</CardTitle>
              <CardDescription>
                Fill out this form and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Department / Organization *</Label>
                  <Input
                    id="department"
                    placeholder="e.g., Ministry of Finance, State Bank"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full btn-hero">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Download MoU */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Sample MoU Document
                </CardTitle>
                <CardDescription>
                  Download our standard Memorandum of Understanding template
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-semibold">LoanTrack_MoU_Template.pdf</p>
                        <p className="text-sm text-muted-foreground">2.4 MB • Updated Oct 2025</p>
                      </div>
                      <Download className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Comprehensive MoU template covering implementation, data security, and partnership terms
                    </p>
                    <Button onClick={handleDownloadMoU} className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Template
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to the NOVA team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">nova.loantrack@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+91 1234 567 890</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium">linkedin.com/company/nova-tech</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Office</p>
                    <p className="font-medium text-sm">Innovation Hub, Tech City, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Partnership Benefits */}
            <Card className="shadow-card gradient-card">
              <CardHeader>
                <CardTitle>Partnership Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span>70% reduction in verification costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span>95%+ fraud detection accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span>Complete data security & compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span>Dedicated support & training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span>Seamless integration with existing systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
