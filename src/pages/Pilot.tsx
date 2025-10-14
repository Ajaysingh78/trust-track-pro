import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Brain, Eye, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const Pilot = () => {
  const steps = [
    {
      number: 1,
      icon: Camera,
      title: 'Ramesh uploads cow photo',
      description: 'Ramesh Kumar from Bhampura submits photos of a cow for his agricultural loan verification',
      status: 'complete',
      details: ['GPS: 22.7196° N, 75.8577° E', 'Timestamp: 2025-10-10 09:15 AM', 'Asset: Cow (Holstein breed)']
    },
    {
      number: 2,
      icon: Camera,
      title: 'Suresh uploads similar cow photo',
      description: 'Suresh Patel, also from Bhampura, submits photos of what appears to be the same cow',
      status: 'complete',
      details: ['GPS: 22.7189° N, 75.8581° E (14 km away)', 'Timestamp: 2025-10-10 11:42 AM', 'Asset: Cow (Holstein breed)']
    },
    {
      number: 3,
      icon: Brain,
      title: 'AI flags duplicate match',
      description: 'LoanTrack AI analyzes both submissions and detects 87% visual similarity',
      status: 'warning',
      details: [
        'Object Detection: Cow identified with 94% confidence',
        'ReID Match: 87% similarity between assets',
        'Geo-Temporal: Same region, 2.5 hours apart',
        'Unique features: Identical spot pattern detected'
      ]
    },
    {
      number: 4,
      icon: Eye,
      title: 'Officer reviews evidence',
      description: 'Field officer examines the AI report and side-by-side comparison of evidence',
      status: 'review',
      details: [
        'Visual inspection confirms match',
        'Background elements show same barn',
        'Tag numbers differ but cow appears identical',
        'Cross-reference with beneficiary records'
      ]
    },
    {
      number: 5,
      icon: XCircle,
      title: 'Fraud confirmed',
      description: 'Officer marks case as fraudulent. Loan applications rejected and flagged for investigation',
      status: 'rejected',
      details: [
        'Both applications rejected',
        'Case forwarded to fraud investigation',
        'Cost saved: ₹4.5L (combined loan amount)',
        'Time saved: 6 days of field verification'
      ]
    }
  ];

  const getStepColor = (status: string) => {
    switch (status) {
      case 'complete':
        return 'border-accent bg-accent/5';
      case 'warning':
        return 'border-warning bg-warning/5';
      case 'review':
        return 'border-primary bg-primary/5';
      case 'rejected':
        return 'border-destructive bg-destructive/5';
      default:
        return 'border-border';
    }
  };

  const getStepIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return <CheckCircle className="h-6 w-6 text-accent" />;
      case 'warning':
        return <AlertTriangle className="h-6 w-6 text-warning" />;
      case 'review':
        return <Eye className="h-6 w-6 text-primary" />;
      case 'rejected':
        return <XCircle className="h-6 w-6 text-destructive" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'complete':
        return <Badge className="bg-accent text-accent-foreground">Completed</Badge>;
      case 'warning':
        return <Badge className="bg-warning text-warning-foreground">AI Flagged</Badge>;
      case 'review':
        return <Badge className="bg-primary text-primary-foreground">Under Review</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Fraud Confirmed</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent text-accent-foreground">Real-World Scenario</Badge>
          <h1 className="text-4xl font-bold text-primary mb-4">Pilot Simulation</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how LoanTrack detects and prevents loan fraud in a real-world scenario from our pilot program
          </p>
        </div>

        {/* Impact Summary */}
        <Card className="shadow-elevated mb-12 gradient-card">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Pilot Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">₹4.5L</div>
                <div className="text-sm text-muted-foreground">Fraud Prevented</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6 days</div>
                <div className="text-sm text-muted-foreground">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning mb-2">2.5 hrs</div>
                <div className="text-sm text-muted-foreground">Detection Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">87%</div>
                <div className="text-sm text-muted-foreground">AI Confidence</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Number Circle */}
                  <div className="absolute left-0 top-0 hidden md:flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full border-4 ${getStepColor(step.status)} flex items-center justify-center bg-card z-10`}>
                      <span className="text-xl font-bold">{step.number}</span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <Card className={`md:ml-24 shadow-card border-2 ${getStepColor(step.status)}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-card`}>
                          <StepIcon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            {getStatusBadge(step.status)}
                          </div>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                        {getStepIcon(step.status)}
                      </div>

                      <div className="pl-16 space-y-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                            <span className="text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Success Story */}
        <Card className="mt-12 shadow-elevated gradient-hero text-primary-foreground">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Success Story</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-6">
              This is just one example from our pilot program. LoanTrack has successfully prevented
              127 fraudulent loan applications, saving ₹2.4 Crore in potential losses while reducing
              verification time by 70%.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Zero false positives</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>95% accuracy rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Instant detection</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pilot;
