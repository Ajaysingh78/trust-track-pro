import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Eye, MapPin, Copy, Shield, Fingerprint, AlertTriangle } from 'lucide-react';

const AIInsights = () => {
  const aiModules = [
    {
      icon: Eye,
      title: 'Object Detection',
      description: 'YOLOv8-based real-time asset identification',
      accuracy: 94,
      color: 'text-accent'
    },
    {
      icon: Copy,
      title: 'Re-Identification (ReID)',
      description: 'Detects duplicate assets across different loans',
      accuracy: 87,
      color: 'text-primary'
    },
    {
      icon: Fingerprint,
      title: 'Forgery Detection',
      description: 'Analyzes image metadata and compression artifacts',
      accuracy: 91,
      color: 'text-warning'
    },
    {
      icon: MapPin,
      title: 'Geo-Temporal Clustering',
      description: 'Identifies suspicious location patterns and timing',
      accuracy: 89,
      color: 'text-destructive'
    }
  ];

  const detectionExample = {
    image: 'Asset Detection Example',
    detections: [
      { object: 'Cow', confidence: 0.94, bbox: '(120, 80, 340, 420)' },
      { object: 'Tag', confidence: 0.87, bbox: '(180, 150, 220, 180)' },
      { object: 'Barn', confidence: 0.76, bbox: '(20, 30, 180, 200)' },
    ]
  };

  const duplicateExample = {
    loan1: 'LN-1001',
    loan2: 'LN-1002',
    similarity: 0.87,
    matchPoints: ['Color pattern', 'Body structure', 'Unique markings']
  };

  const geoData = {
    cluster: 'Bhampura Region',
    loans: ['LN-1001', 'LN-1002', 'LN-1015', 'LN-1023'],
    distance: 14,
    timeSpan: '2 hours'
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">AI Insights</h1>
          <p className="text-lg text-muted-foreground">
            Transparency into our AI verification modules
          </p>
        </div>

        {/* AI Modules Overview */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {aiModules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card key={index} className="shadow-card card-hover">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${module.color}`} />
                    </div>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                  </div>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Accuracy</span>
                      <span className="font-semibold">{module.accuracy}%</span>
                    </div>
                    <Progress value={module.accuracy} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Object Detection Example */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Object Detection Example
            </CardTitle>
            <CardDescription>
              Real-time asset identification with bounding boxes and confidence scores
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-video bg-secondary/30 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                <div className="relative z-10">
                  <p className="text-muted-foreground mb-4">{detectionExample.image}</p>
                  <div className="space-y-2">
                    {detectionExample.detections.map((det, idx) => (
                      <div key={idx} className="border-2 border-accent/50 p-2 rounded bg-card/80 backdrop-blur">
                        <Badge variant="outline" className="mb-1">{det.object}</Badge>
                        <div className="text-xs text-muted-foreground">
                          Confidence: {(det.confidence * 100).toFixed(0)}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Detection Results</h3>
                {detectionExample.detections.map((det, idx) => (
                  <div key={idx} className="p-4 bg-secondary/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{det.object}</span>
                      <Badge className="bg-accent text-accent-foreground">
                        {(det.confidence * 100).toFixed(1)}%
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Bounding Box: {det.bbox}
                    </div>
                    <Progress value={det.confidence * 100} className="h-1 mt-2" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Duplicate Detection Example */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Copy className="h-5 w-5" />
              Duplicate Asset Detection
            </CardTitle>
            <CardDescription>
              Visual similarity matching across different loan applications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="aspect-square bg-secondary/30 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Asset from</p>
                  <Badge variant="outline" className="mb-2">{duplicateExample.loan1}</Badge>
                  <p className="text-xs text-muted-foreground">Ramesh Kumar</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="w-full h-px bg-border mb-4"></div>
                <div className="bg-warning/10 border border-warning rounded-xl p-4 text-center">
                  <AlertTriangle className="h-8 w-8 text-warning mx-auto mb-2" />
                  <p className="font-semibold text-warning mb-1">
                    {(duplicateExample.similarity * 100).toFixed(1)}% Match
                  </p>
                  <p className="text-xs text-muted-foreground">Suspicious similarity detected</p>
                </div>
                <div className="w-full h-px bg-border mt-4"></div>
              </div>

              <div className="aspect-square bg-secondary/30 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Asset from</p>
                  <Badge variant="outline" className="mb-2">{duplicateExample.loan2}</Badge>
                  <p className="text-xs text-muted-foreground">Suresh Patel</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
              <h4 className="font-semibold mb-3">Match Analysis</h4>
              <div className="space-y-2">
                {duplicateExample.matchPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Geo-Temporal Clustering */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Geo-Temporal Clustering
            </CardTitle>
            <CardDescription>
              Identifying suspicious geographic and temporal patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-square bg-secondary/30 rounded-xl p-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-warning/10"></div>
                <div className="relative z-10 text-center">
                  <MapPin className="h-12 w-12 text-destructive mx-auto mb-4" />
                  <p className="font-semibold text-lg mb-2">{geoData.cluster}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {geoData.loans.length} loans within {geoData.distance} km
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {geoData.loans.map((loan, idx) => (
                      <Badge key={idx} variant="outline">{loan}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-warning/10 border border-warning rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    <span className="font-semibold">Suspicious Pattern Detected</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Multiple loan applications from the same geographic cluster within a short timeframe
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                    <span className="text-sm font-medium">Geographic Radius</span>
                    <span className="text-sm text-muted-foreground">{geoData.distance} km</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                    <span className="text-sm font-medium">Time Span</span>
                    <span className="text-sm text-muted-foreground">{geoData.timeSpan}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                    <span className="text-sm font-medium">Applications</span>
                    <span className="text-sm text-muted-foreground">{geoData.loans.length} loans</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                    <span className="text-sm font-medium">Risk Level</span>
                    <Badge variant="destructive">High</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIInsights;
