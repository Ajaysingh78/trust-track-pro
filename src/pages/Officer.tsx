import { useState } from 'react';
import { Eye, CheckCircle, XCircle, AlertTriangle, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { mockBeneficiaries, mockAIReport } from '@/lib/mockData';
import { toast } from 'sonner';

const Officer = () => {
  const [selectedLoan, setSelectedLoan] = useState<string | null>(null);
  const [beneficiaries, setBeneficiaries] = useState(mockBeneficiaries);

  const handleAction = (loanId: string, action: 'approve' | 'reject' | 'recapture') => {
    const actionText = action === 'approve' ? 'approved' : action === 'reject' ? 'rejected' : 'requested recapture for';
    toast.success(`Loan ${loanId} ${actionText}`);
    
    if (action === 'approve') {
      setBeneficiaries(prev =>
        prev.map(b => b.loanId === loanId ? { ...b, status: 'verified' } : b)
      );
    } else if (action === 'reject') {
      setBeneficiaries(prev =>
        prev.map(b => b.loanId === loanId ? { ...b, status: 'flagged' } : b)
      );
    }
    
    setSelectedLoan(null);
  };

  const selectedBeneficiary = beneficiaries.find(b => b.loanId === selectedLoan);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <Badge className="bg-accent text-accent-foreground">Verified</Badge>;
      case 'flagged':
        return <Badge variant="destructive">Flagged</Badge>;
      default:
        return <Badge variant="secondary">Pending</Badge>;
    }
  };

  const getSuspicionColor = (score: number) => {
    if (score >= 0.85) return 'text-accent';
    if (score >= 0.70) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Officer Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Review evidence and manage loan verifications
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Review</p>
                  <p className="text-3xl font-bold text-primary">
                    {beneficiaries.filter(b => b.status === 'pending').length}
                  </p>
                </div>
                <AlertTriangle className="h-10 w-10 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Flagged Cases</p>
                  <p className="text-3xl font-bold text-destructive">
                    {beneficiaries.filter(b => b.status === 'flagged').length}
                  </p>
                </div>
                <XCircle className="h-10 w-10 text-destructive" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Verified</p>
                  <p className="text-3xl font-bold text-accent">
                    {beneficiaries.filter(b => b.status === 'verified').length}
                  </p>
                </div>
                <CheckCircle className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Cases</p>
                  <p className="text-3xl font-bold text-primary">{beneficiaries.length}</p>
                </div>
                <Eye className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Queue Table */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Verification Queue</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Loan ID</TableHead>
                  <TableHead>Beneficiary</TableHead>
                  <TableHead>Asset</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>AI Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {beneficiaries.map((beneficiary) => (
                  <TableRow key={beneficiary.loanId}>
                    <TableCell className="font-medium">{beneficiary.loanId}</TableCell>
                    <TableCell>{beneficiary.name}</TableCell>
                    <TableCell>{beneficiary.asset}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {beneficiary.location}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`font-semibold ${getSuspicionColor(beneficiary.aiScore)}`}>
                        {Math.round(beneficiary.aiScore * 100)}%
                      </span>
                    </TableCell>
                    <TableCell>{getStatusBadge(beneficiary.status)}</TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedLoan(beneficiary.loanId)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Review
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Evidence Viewer Modal */}
        <Dialog open={!!selectedLoan} onOpenChange={() => setSelectedLoan(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Evidence Review - {selectedLoan}</DialogTitle>
              <DialogDescription>
                Review AI analysis and evidence for {selectedBeneficiary?.name}
              </DialogDescription>
            </DialogHeader>

            {selectedBeneficiary && (
              <div className="space-y-6">
                {/* AI Report Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">AI Analysis Report</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Object Detected</p>
                        <p className="font-semibold">{mockAIReport.objectDetected}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Confidence</p>
                        <p className="font-semibold">{(mockAIReport.confidence * 100).toFixed(1)}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Count</p>
                        <p className="font-semibold">{mockAIReport.count} objects</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Geo Distance</p>
                        <p className="font-semibold">{mockAIReport.geoDistance} km</p>
                      </div>
                    </div>

                    {mockAIReport.duplicateMatch && (
                      <div className="p-4 bg-warning/10 border border-warning rounded-lg">
                        <div className="flex items-center gap-2 text-warning mb-2">
                          <AlertTriangle className="h-5 w-5" />
                          <span className="font-semibold">Potential Duplicate Detected</span>
                        </div>
                        <p className="text-sm">
                          {(mockAIReport.duplicateMatch.similarity * 100).toFixed(1)}% match with loan{' '}
                          {mockAIReport.duplicateMatch.loanID}
                        </p>
                      </div>
                    )}

                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Overall Score</p>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent transition-all"
                            style={{ width: `${mockAIReport.overallScore * 100}%` }}
                          />
                        </div>
                        <span className="font-bold text-lg">
                          {(mockAIReport.overallScore * 100).toFixed(0)}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Media Viewer Placeholder */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Evidence Photo 1</p>
                  </div>
                  <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Evidence Photo 2</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    className="flex-1"
                    variant="default"
                    onClick={() => handleAction(selectedLoan, 'approve')}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Approve
                  </Button>
                  <Button
                    className="flex-1"
                    variant="destructive"
                    onClick={() => handleAction(selectedLoan, 'reject')}
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject
                  </Button>
                  <Button
                    className="flex-1"
                    variant="outline"
                    onClick={() => handleAction(selectedLoan, 'recapture')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Request Recapture
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Officer;
