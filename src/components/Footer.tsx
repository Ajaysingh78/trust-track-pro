import { Shield, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Shield className="h-6 w-6" />
              <span>LoanTrack</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Smart. Secure. Transparent.
            </p>
            <p className="text-xs text-primary-foreground/60">
              Built by NOVA | Empowering Trust in Every Loan
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pilot" className="hover:text-accent transition-colors">
                  Pilot Demo
                </Link>
              </li>
              <li>
                <Link to="/ai-insights" className="hover:text-accent transition-colors">
                  AI Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>AI Fraud Detection</li>
              <li>Geo-tag Verification</li>
              <li>Temporal Proof</li>
              <li>Offline Capture</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>nova@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 LoanTrack by NOVA. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4 mt-2 flex-wrap">
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              Data Encrypted (AES-256)
            </span>
            <span>•</span>
            <span>Government Compliant</span>
            <span>•</span>
            <span>AI Verified & Auditable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
