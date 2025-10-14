import { useState } from 'react';
import { Upload, Camera, Video, MapPin, Clock, CheckCircle, AlertCircle, Shield, User, FileText, Sparkles, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const Beneficiary = () => {
  const [uploadStep, setUploadStep] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [aiScore, setAiScore] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const steps = [
    { icon: Camera, title: 'Front View', description: 'Front view of asset', color: 'from-blue-500 to-cyan-500' },
    { icon: Camera, title: 'Side View', description: 'Side view of asset', color: 'from-purple-500 to-pink-500' },
    { icon: Camera, title: 'ID Tag', description: 'Identification tag/mark', color: 'from-green-500 to-emerald-500' },
    { icon: Video, title: 'Video Proof', description: '10-second verification clip', color: 'from-orange-500 to-red-500' },
  ];

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => {
      if (uploadStep < steps.length - 1) {
        setUploadStep(uploadStep + 1);
        toast.success(`${steps[uploadStep].title} uploaded successfully! ✓`);
      } else {
        setTimeout(() => {
          const score = Math.random() * 0.3 + 0.7;
          setAiScore(score);
          toast.success('🎉 All evidence uploaded! AI validation complete.');
        }, 2000);
      }
      setUploading(false);
    }, 1500);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleUpload();
  };

  const progress = ((uploadStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-violet-600 to-purple-700 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>Secure Upload Portal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Beneficiary Portal</h1>
            <p className="text-lg text-white/90">
              Upload evidence to verify your loan utilization with AI-powered verification
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl -mt-8 relative z-20">
        
        {/* User Profile Card */}
        <Card className="mb-8 shadow-2xl border-0 bg-white dark:bg-slate-900">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-xl text-slate-900 dark:text-white">Ramesh Kumar</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">+91 98765 43210</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">Loan ID</div>
                  <div className="font-bold text-slate-900 dark:text-white">LN-1001</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                  <div className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">Status</div>
                  <div className="font-bold text-slate-900 dark:text-white">Active</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {!aiScore ? (
          <>
            {/* Upload Progress */}
            <Card className="mb-8 shadow-xl border-0 bg-white dark:bg-slate-900">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      Upload Progress
                    </CardTitle>
                    <CardDescription>Complete all steps to submit your verification</CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-lg font-bold px-4 py-2">
                    {Math.round(progress)}%
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Progress value={progress} className="h-3" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isCompleted = index < uploadStep;
                    const isCurrent = index === uploadStep;
                    
                    return (
                      <div
                        key={index}
                        className={`relative p-5 rounded-2xl border-2 transition-all duration-300 ${
                          isCompleted
                            ? 'border-green-500 bg-green-50 dark:bg-green-900/20 shadow-lg scale-95'
                            : isCurrent
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-xl scale-100'
                            : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                        }`}
                      >
                        {isCompleted && (
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in">
                            <CheckCircle className="h-5 w-5 text-white" />
                          </div>
                        )}
                        
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br ${step.color} ${isCurrent ? 'animate-pulse' : ''}`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        
                        <div className="font-bold text-sm mb-1 text-slate-900 dark:text-white">{step.title}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{step.description}</div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Current Upload Step */}
            <Card className="shadow-xl border-0 bg-white dark:bg-slate-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${steps[uploadStep].color}`}>
                    <Upload className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div>{steps[uploadStep].title}</div>
                    <CardDescription className="mt-1">{steps[uploadStep].description}</CardDescription>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Upload Area */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`relative border-2 border-dashed rounded-2xl p-16 text-center transition-all duration-300 cursor-pointer group ${
                    isDragging
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 scale-105'
                      : 'border-slate-300 dark:border-slate-700 hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/10'
                  }`}
                  onClick={handleUpload}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${steps[uploadStep].color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                  
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${steps[uploadStep].color} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Upload className="h-10 w-10 text-white" />
                    </div>
                    
                    <p className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                      {isDragging ? 'Drop file here' : 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                      {steps[uploadStep].icon === Video ? 'MP4, MOV (max 50MB)' : 'JPG, PNG (max 10MB)'}
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                      <Shield className="h-4 w-4" />
                      <span>Encrypted & Secure Upload</span>
                    </div>
                  </div>
                </div>

                {/* Metadata Display */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">GPS Location</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 font-mono">22.7196° N, 75.8577° E</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">Timestamp</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">{new Date().toLocaleString()}</div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleUpload}
                  disabled={uploading}
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-lg hover:shadow-xl transition-all"
                >
                  {uploading ? (
                    <span className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Uploading...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Upload & Continue
                      <CheckCircle className="h-5 w-5" />
                    </span>
                  )}
                </Button>
              </CardContent>
            </Card>
          </>
        ) : (
          /* AI Validation Result */
          <Card className="shadow-2xl border-0 bg-white dark:bg-slate-900 overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${aiScore > 0.85 ? 'from-green-500 to-emerald-500' : 'from-yellow-500 to-orange-500'}`}></div>
            
            <CardHeader className="pb-0">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${aiScore > 0.85 ? 'from-green-500 to-emerald-500' : 'from-yellow-500 to-orange-500'} shadow-lg`}>
                  {aiScore > 0.85 ? <CheckCircle className="h-7 w-7 text-white" /> : <Sparkles className="h-7 w-7 text-white" />}
                </div>
                AI Validation Complete
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-8 pt-8">
              
              {/* Score Display */}
              <div className="text-center py-8">
                <div className="relative inline-flex">
                  {/* Background Circle */}
                  <svg className="w-40 h-40 transform -rotate-90">
                    <circle
                      className="text-slate-200 dark:text-slate-700"
                      strokeWidth="12"
                      stroke="currentColor"
                      fill="transparent"
                      r="64"
                      cx="80"
                      cy="80"
                    />
                    <circle
                      className={aiScore > 0.85 ? 'text-green-500' : 'text-yellow-500'}
                      strokeWidth="12"
                      strokeDasharray={2 * Math.PI * 64}
                      strokeDashoffset={2 * Math.PI * 64 * (1 - aiScore)}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="64"
                      cx="80"
                      cy="80"
                      style={{ transition: 'stroke-dashoffset 2s ease' }}
                    />
                  </svg>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-black bg-gradient-to-br from-blue-600 to-violet-600 bg-clip-text text-transparent">
                      {Math.round(aiScore * 100)}%
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">AI Score</span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-2">
                  <Badge variant={aiScore > 0.85 ? 'default' : 'secondary'} className="text-lg px-6 py-2">
                    {aiScore > 0.85 ? '✓ Verification Successful' : '⚠ Review Required'}
                  </Badge>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Your evidence has been submitted for officer review
                  </p>
                </div>
              </div>

              {/* Validation Checks */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Verification Checks
                </h3>
                
                {[
                  { label: 'Object Detection', passed: true, icon: Camera },
                  { label: 'GPS Verification', passed: true, icon: MapPin },
                  { label: 'Timestamp Valid', passed: true, icon: Clock },
                  { label: 'Duplicate Check', passed: aiScore > 0.85, icon: Shield }
                ].map((check, index) => {
                  const Icon = check.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                        check.passed
                          ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20'
                          : 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          check.passed ? 'bg-green-500' : 'bg-yellow-500'
                        }`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-medium text-slate-900 dark:text-white">{check.label}</span>
                      </div>
                      {check.passed ? (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      ) : (
                        <AlertCircle className="h-6 w-6 text-yellow-600" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold flex items-center gap-2 mb-3">
                  <Award className="h-5 w-5 text-blue-600" />
                  Next Steps
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">1.</span>
                    <span>Your application is now under review by loan officers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">2.</span>
                    <span>You will receive a notification once verification is complete</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">3.</span>
                    <span>Estimated review time: 2-4 hours</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-12 font-semibold"
                  onClick={() => window.location.reload()}
                >
                  Submit New Evidence
                </Button>
                <Button
                  className="h-12 font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
                >
                  View Application Status
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      
      <div className="h-20"></div>
    </div>
  );
};

export default Beneficiary;