import { useState } from 'react';
import { Upload, Camera, Video, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

const Beneficiary = () => {
  const [uploadStep, setUploadStep] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [aiScore, setAiScore] = useState<number | null>(null);

  const steps = [
    { icon: Camera, title: 'Photo 1', description: 'Front view of asset' },
    { icon: Camera, title: 'Photo 2', description: 'Side view of asset' },
    { icon: Camera, title: 'Photo 3', description: 'Identification tag/mark' },
    { icon: Video, title: 'Short Video', description: '10-second verification clip' },
  ];

  const handleUpload = () => {
    setUploading(true);
    // Simulate upload process
    setTimeout(() => {
      if (uploadStep < steps.length - 1) {
        setUploadStep(uploadStep + 1);
        toast.success(`${steps[uploadStep].title} uploaded successfully`);
      } else {
        // Final step - show AI validation
        setTimeout(() => {
          const score = Math.random() * 0.3 + 0.7; // Random score between 0.7-1.0
          setAiScore(score);
          toast.success('All evidence uploaded! AI validation complete.');
        }, 2000);
      }
      setUploading(false);
    }, 1500);
  };

  const progress = ((uploadStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Beneficiary Portal</h1>
          <p className="text-lg text-muted-foreground">
            Upload evidence to verify your loan utilization
          </p>
        </div>

        {/* Login Simulation */}
        <Card className="mb-8 shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">Logged in as: Ramesh Kumar</div>
                <div className="text-sm text-muted-foreground">Loan ID: LN-1001 | +91 98765 43210</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {!aiScore ? (
          <>
            {/* Upload Progress */}
            <Card className="mb-8 shadow-card">
              <CardHeader>
                <CardTitle>Upload Progress</CardTitle>
                <CardDescription>Complete all steps to submit your verification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Step {uploadStep + 1} of {steps.length}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isCompleted = index < uploadStep;
                    const isCurrent = index === uploadStep;
                    
                    return (
                      <div
                        key={index}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          isCompleted
                            ? 'border-accent bg-accent/5'
                            : isCurrent
                            ? 'border-primary bg-primary/5'
                            : 'border-border'
                        }`}
                      >
                        <Icon className={`h-8 w-8 mb-2 ${
                          isCompleted ? 'text-accent' : isCurrent ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                        <div className="font-medium text-sm">{step.title}</div>
                        <div className="text-xs text-muted-foreground">{step.description}</div>
                        {isCompleted && (
                          <CheckCircle className="h-5 w-5 text-accent mt-2" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Current Upload Step */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  {steps[uploadStep].title}
                </CardTitle>
                <CardDescription>{steps[uploadStep].description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-border rounded-2xl p-12 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="font-medium mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-muted-foreground">
                    {steps[uploadStep].icon === Video ? 'MP4, MOV (max 50MB)' : 'JPG, PNG (max 10MB)'}
                  </p>
                </div>

                {/* Metadata Display */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm font-medium">GPS Location</div>
                      <div className="text-xs text-muted-foreground">22.7196° N, 75.8577° E</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm font-medium">Timestamp</div>
                      <div className="text-xs text-muted-foreground">{new Date().toLocaleString()}</div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleUpload}
                  disabled={uploading}
                  className="w-full btn-hero"
                >
                  {uploading ? 'Uploading...' : 'Upload & Continue'}
                </Button>
              </CardContent>
            </Card>
          </>
        ) : (
          /* AI Validation Result */
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-accent" />
                AI Validation Complete
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center py-8">
                <div className="relative inline-flex">
                  <svg className="w-32 h-32">
                    <circle
                      className="text-secondary"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="56"
                      cx="64"
                      cy="64"
                    />
                    <circle
                      className="text-accent"
                      strokeWidth="8"
                      strokeDasharray={2 * Math.PI * 56}
                      strokeDashoffset={2 * Math.PI * 56 * (1 - aiScore)}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="56"
                      cx="64"
                      cy="64"
                      style={{ transition: 'stroke-dashoffset 1s ease' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">{Math.round(aiScore * 100)}%</span>
                  </div>
                </div>
                <div className="mt-4 text-lg font-semibold">
                  {aiScore > 0.85 ? 'Verification Successful' : 'Review Required'}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  Your evidence has been submitted for officer review
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <span className="text-sm">Object Detection</span>
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <span className="text-sm">GPS Verification</span>
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <span className="text-sm">Timestamp Valid</span>
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <span className="text-sm">Duplicate Check</span>
                  {aiScore > 0.85 ? (
                    <CheckCircle className="h-5 w-5 text-accent" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-warning" />
                  )}
                </div>
              </div>

              <Button className="w-full btn-hero" onClick={() => window.location.reload()}>
                Submit New Evidence
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Beneficiary;
