import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export type UserRole = 'beneficiary' | 'officer' | 'admin' | null;

interface NavbarProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export const Navbar = ({ currentRole, onRoleChange }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/pilot', label: 'Pilot Demo' },
    { path: '/ai-insights', label: 'AI Insights' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Shield className="h-6 w-6" />
            <span>LoanTrack</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Role Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <Select value={currentRole || ''} onValueChange={(value) => onRoleChange(value as UserRole)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beneficiary">Beneficiary</SelectItem>
                <SelectItem value="officer">Officer</SelectItem>
                <SelectItem value="admin">Admin/Bank</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 ${
                  isActive(link.path)
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Select value={currentRole || ''} onValueChange={(value) => onRoleChange(value as UserRole)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beneficiary">Beneficiary</SelectItem>
                <SelectItem value="officer">Officer</SelectItem>
                <SelectItem value="admin">Admin/Bank</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </nav>
  );
};
