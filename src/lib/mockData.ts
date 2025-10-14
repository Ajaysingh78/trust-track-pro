// Mock data for LoanTrack prototype

export interface Beneficiary {
  loanId: string;
  name: string;
  asset: string;
  location: string;
  status: 'verified' | 'flagged' | 'pending';
  aiScore: number;
  phone?: string;
  uploadDate?: string;
}

export interface AIReport {
  objectDetected: string;
  count: number;
  confidence: number;
  duplicateMatch?: {
    loanID: string;
    similarity: number;
  };
  forgeryFlag: boolean;
  geoDistance: number;
  overallScore: number;
}

export const mockBeneficiaries: Beneficiary[] = [
  {
    loanId: 'LN-1001',
    name: 'Ramesh Kumar',
    asset: 'Cow',
    location: 'Bhampura, MP',
    status: 'flagged',
    aiScore: 0.82,
    phone: '+91 98765 43210',
    uploadDate: '2025-10-10'
  },
  {
    loanId: 'LN-1002',
    name: 'Suresh Patel',
    asset: 'Cow',
    location: 'Bhampura, MP',
    status: 'verified',
    aiScore: 0.94,
    phone: '+91 98765 43211',
    uploadDate: '2025-10-10'
  },
  {
    loanId: 'LN-1003',
    name: 'Anita Sharma',
    asset: 'Shop Equipment',
    location: 'Khargone, MP',
    status: 'pending',
    aiScore: 0.71,
    phone: '+91 98765 43212',
    uploadDate: '2025-10-11'
  },
  {
    loanId: 'LN-1004',
    name: 'Rajesh Singh',
    asset: 'Tractor',
    location: 'Indore, MP',
    status: 'verified',
    aiScore: 0.89,
    phone: '+91 98765 43213',
    uploadDate: '2025-10-09'
  },
  {
    loanId: 'LN-1005',
    name: 'Priya Verma',
    asset: 'Buffalo',
    location: 'Bhopal, MP',
    status: 'pending',
    aiScore: 0.76,
    phone: '+91 98765 43214',
    uploadDate: '2025-10-12'
  }
];

export const mockAIReport: AIReport = {
  objectDetected: 'cow',
  count: 5,
  confidence: 0.92,
  duplicateMatch: {
    loanID: 'LN-1002',
    similarity: 0.87
  },
  forgeryFlag: false,
  geoDistance: 14,
  overallScore: 0.81
};

export const mockStats = {
  totalLoans: 2847,
  fraudDetected: 127,
  fieldVisitsReduced: 1842,
  averageVerificationTime: '2.4 hrs',
  fraudRate: 4.5,
  approvalRate: 89.3
};
