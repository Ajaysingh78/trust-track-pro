import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Upload, TrendingDown, TrendingUp, Clock, Shield } from 'lucide-react';
import { mockStats } from '@/lib/mockData';
import { toast } from 'sonner';

const Admin = () => {
  const fraudData = [
    { month: 'Jan', detected: 12, prevented: 45 },
    { month: 'Feb', detected: 15, prevented: 52 },
    { month: 'Mar', detected: 8, prevented: 38 },
    { month: 'Apr', detected: 18, prevented: 61 },
    { month: 'May', detected: 14, prevented: 48 },
    { month: 'Jun', detected: 11, prevented: 42 },
  ];

  const trancheData = [
    { name: 'Approved', value: 65, color: '#00B386' },
    { name: 'Pending', value: 25, color: '#FFC107' },
    { name: 'Rejected', value: 10, color: '#DC2626' },
  ];

  const verificationTimeData = [
    { week: 'W1', traditional: 168, loantrack: 3.2 },
    { week: 'W2', traditional: 172, loantrack: 2.8 },
    { week: 'W3', traditional: 164, loantrack: 2.4 },
    { week: 'W4', traditional: 170, loantrack: 2.6 },
  ];

  const handleExport = () => {
    toast.success('Forensic bundle exported successfully');
  };

  const handleBulkUpload = () => {
    toast.success('Bulk upload initiated');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Admin & Bank Portal</h1>
          <p className="text-lg text-muted-foreground">
            Manage beneficiaries and monitor system performance
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Avg Verification Time</p>
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <p className="text-3xl font-bold text-primary">{mockStats.averageVerificationTime}</p>
              <div className="flex items-center gap-1 mt-2 text-xs text-accent">
                <TrendingDown className="h-3 w-3" />
                <span>70% faster than traditional</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Fraud Detection Rate</p>
                <Shield className="h-5 w-5 text-warning" />
              </div>
              <p className="text-3xl font-bold text-primary">{mockStats.fraudRate}%</p>
              <div className="flex items-center gap-1 mt-2 text-xs text-accent">
                <TrendingUp className="h-3 w-3" />
                <span>95% accuracy</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Approval Rate</p>
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <p className="text-3xl font-bold text-primary">{mockStats.approvalRate}%</p>
              <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                <span>Consistent trend</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Field Visits Saved</p>
                <TrendingDown className="h-5 w-5 text-accent" />
              </div>
              <p className="text-3xl font-bold text-primary">{mockStats.fieldVisitsReduced}</p>
              <div className="flex items-center gap-1 mt-2 text-xs text-accent">
                <TrendingDown className="h-3 w-3" />
                <span>₹18.4L cost saved</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Fraud Detection Trend */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Fraud Detection Trend</CardTitle>
              <CardDescription>Monthly fraud cases detected and prevented</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={fraudData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="detected" fill="#DC2626" name="Detected" />
                  <Bar dataKey="prevented" fill="#00B386" name="Prevented" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Tranche Distribution */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Tranche Release Distribution</CardTitle>
              <CardDescription>Current status of loan approvals</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={trancheData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {trancheData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Verification Time Comparison */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle>Verification Time Comparison</CardTitle>
            <CardDescription>LoanTrack vs Traditional Methods (hours)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={verificationTimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="traditional" stroke="#DC2626" name="Traditional" strokeWidth={2} />
                <Line type="monotone" dataKey="loantrack" stroke="#00B386" name="LoanTrack" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Actions Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Bulk Upload */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Bulk Beneficiary Upload</CardTitle>
              <CardDescription>Upload CSV file with beneficiary data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                <p className="font-medium mb-1">Drop CSV file here or click to browse</p>
                <p className="text-sm text-muted-foreground">Maximum file size: 5MB</p>
              </div>
              <Button className="w-full" onClick={handleBulkUpload}>
                <Upload className="h-4 w-4 mr-2" />
                Upload Beneficiaries
              </Button>
            </CardContent>
          </Card>

          {/* Export Forensic Bundle */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Export Forensic Bundle</CardTitle>
              <CardDescription>Download complete evidence package for audit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <span className="text-sm">All Evidence Files</span>
                  <span className="text-xs text-muted-foreground">2.4 GB</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <span className="text-sm">AI Analysis Reports</span>
                  <span className="text-xs text-muted-foreground">124 MB</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <span className="text-sm">Officer Reviews</span>
                  <span className="text-xs text-muted-foreground">45 MB</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <span className="text-sm">Audit Logs</span>
                  <span className="text-xs text-muted-foreground">12 MB</span>
                </div>
              </div>
              <Button className="w-full btn-hero" onClick={handleExport}>
                <Download className="h-4 w-4 mr-2" />
                Export Complete Bundle (ZIP)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
