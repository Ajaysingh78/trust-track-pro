// components/Navbar.tsx - COMPLETE PROFESSIONAL VERSION

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, User, LogIn, UserCircle, Building2, FileCheck } from 'lucide-react';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

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

  const getRoleIcon = (role: UserRole) => {
    switch (role) {
      case 'beneficiary':
        return <User className="h-4 w-4" />;
      case 'officer':
        return <FileCheck className="h-4 w-4" />;
      case 'admin':
        return <Building2 className="h-4 w-4" />;
      default:
        return <UserCircle className="h-4 w-4" />;
    }
  };

  const getRoleLabel = (role: UserRole) => {
    switch (role) {
      case 'beneficiary':
        return 'Beneficiary';
      case 'officer':
        return 'Loan Officer';
      case 'admin':
        return 'Admin/Bank';
      default:
        return 'Select Role';
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Premium Design */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-violet-600 p-2.5 rounded-xl shadow-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                VeriLoan
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium -mt-1">
                Loan Verification System
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></span>
                )}
                {!isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full transition-all duration-300 group-hover:left-0 group-hover:right-0"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Role Switcher & User Menu */}
          <div className="hidden lg:flex items-center gap-4">
            <Select value={currentRole || ''} onValueChange={(value) => onRoleChange(value as UserRole)}>
              <SelectTrigger className="w-[200px] border-slate-300 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  {getRoleIcon(currentRole)}
                  <SelectValue placeholder="Select Role" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beneficiary">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-green-600" />
                    <span>Beneficiary</span>
                  </div>
                </SelectItem>
                <SelectItem value="officer">
                  <div className="flex items-center gap-2">
                    <FileCheck className="h-4 w-4 text-blue-600" />
                    <span>Loan Officer</span>
                  </div>
                </SelectItem>
                <SelectItem value="admin">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-purple-600" />
                    <span>Admin/Bank</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>

            {currentRole ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="rounded-full h-10 w-10 border-slate-300 dark:border-slate-700 hover:shadow-md transition-all"
                  >
                    {getRoleIcon(currentRole)}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{getRoleLabel(currentRole)}</p>
                      <p className="text-xs text-slate-500">demo@veriloan.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  <DropdownMenuItem>Help & Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-md hover:shadow-lg transition-all">
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 space-y-4 border-t border-slate-200 dark:border-slate-800">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 px-4 rounded-lg font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t">
              <Select value={currentRole || ''} onValueChange={(value) => onRoleChange(value as UserRole)}>
                <SelectTrigger className="w-full">
                  <div className="flex items-center gap-2">
                    {getRoleIcon(currentRole)}
                    <SelectValue placeholder="Select Role" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beneficiary">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-green-600" />
                      <span>Beneficiary</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="officer">
                    <div className="flex items-center gap-2">
                      <FileCheck className="h-4 w-4 text-blue-600" />
                      <span>Loan Officer</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="admin">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-purple-600" />
                      <span>Admin/Bank</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};