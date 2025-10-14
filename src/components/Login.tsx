import { useState } from 'react';
import { Shield, Mail, Lock, Eye, EyeOff, ArrowRight, User, FileCheck, Building2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type UserRole = 'beneficiary' | 'officer' | 'admin';
type AuthMode = 'login' | 'signup' | 'forgot';

interface LoginProps {
  onLogin?: (role: UserRole, email: string) => void;
  onClose?: () => void;
}

export const Login = ({ onLogin, onClose }: LoginProps) => {
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const [selectedRole, setSelectedRole] = useState<UserRole>('beneficiary');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const roles = [
    {
      id: 'beneficiary' as UserRole,
      name: 'Beneficiary',
      icon: User,
      description: 'Apply for loans and track applications',
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'officer' as UserRole,
      name: 'Loan Officer',
      icon: FileCheck,
      description: 'Verify and process loan applications',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'admin' as UserRole,
      name: 'Admin/Bank',
      icon: Building2,
      description: 'Manage system and oversee operations',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    // Validation
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    if (authMode !== 'forgot' && !validatePassword(password)) {
      setError('Password must be at least 8 characters long');
      setIsLoading(false);
      return;
    }

    if (authMode === 'signup' && password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      if (authMode === 'forgot') {
        setSuccess('Password reset link sent to your email!');
        setTimeout(() => setAuthMode('login'), 2000);
      } else if (authMode === 'signup') {
        setSuccess('Account created successfully! Please login.');
        setTimeout(() => setAuthMode('login'), 2000);
      } else {
        // Login successful
        if (onLogin) {
          onLogin(selectedRole, email);
        }
      }
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    setError('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(`${provider} login successful!`);
      if (onLogin) {
        onLogin(selectedRole, `user@${provider.toLowerCase()}.com`);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Branding & Info */}
        <div className="hidden lg:flex flex-col justify-center space-y-8 p-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl blur-xl opacity-60 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-violet-600 p-4 rounded-2xl shadow-2xl">
                  <Shield className="h-12 w-12 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  VeriLoan
                </h1>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  Secure Loan Verification System
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">
                  Blockchain Security
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Your data is protected with advanced blockchain technology
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">
                  AI-Powered Verification
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Instant loan processing with intelligent automation
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">
                  Real-time Tracking
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Monitor your loan application status in real-time
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600/10 to-violet-600/10 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <p className="text-sm text-slate-600 dark:text-slate-400 italic">
              "VeriLoan has revolutionized our loan processing system. The blockchain integration ensures complete transparency and security."
            </p>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-2">
              - Financial Services Director
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <Card className="w-full shadow-2xl border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          <CardHeader className="space-y-4 pb-8">
            <div className="lg:hidden flex justify-center mb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl blur-md opacity-70"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-violet-600 p-3 rounded-xl shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  VeriLoan
                </span>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <CardTitle className="text-3xl font-bold">
                {authMode === 'login' && 'Welcome Back'}
                {authMode === 'signup' && 'Create Account'}
                {authMode === 'forgot' && 'Reset Password'}
              </CardTitle>
              <CardDescription className="text-base mt-2">
                {authMode === 'login' && 'Sign in to access your account'}
                {authMode === 'signup' && 'Join VeriLoan today'}
                {authMode === 'forgot' && 'Enter your email to reset password'}
              </CardDescription>
            </div>

            {/* Role Selection */}
            {authMode !== 'forgot' && (
              <Tabs value={selectedRole} onValueChange={(v) => setSelectedRole(v as UserRole)} className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-slate-100 dark:bg-slate-800">
                  {roles.map((role) => {
                    const Icon = role.icon;
                    return (
                      <TabsTrigger
                        key={role.id}
                        value={role.id}
                        className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900"
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-xs font-medium">{role.name}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </Tabs>
            )}
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Error/Success Messages */}
            {error && (
              <Alert variant="destructive" className="animate-in slide-in-from-top-2">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="border-green-200 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-400 animate-in slide-in-from-top-2">
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name - Signup only */}
              {authMode === 'signup' && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-11 h-12"
                  />
                </div>
              </div>

              {/* Phone - Signup only */}
              {authMode === 'signup' && (
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
              )}

              {/* Password */}
              {authMode !== 'forgot' && (
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pl-11 pr-11 h-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Confirm Password - Signup only */}
              {authMode === 'signup' && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      id="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="pl-11 h-12"
                    />
                  </div>
                </div>
              )}

              {/* Remember Me & Forgot Password */}
              {authMode === 'login' && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300"
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Remember me
                    </span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setAuthMode('forgot')}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    {authMode === 'login' && 'Sign In'}
                    {authMode === 'signup' && 'Create Account'}
                    {authMode === 'forgot' && 'Send Reset Link'}
                    <ArrowRight className="h-5 w-5" />
                  </span>
                )}
              </Button>
            </form>

            {/* Divider */}
            {authMode !== 'forgot' && (
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-slate-900 text-slate-500">
                    Or continue with
                  </span>
                </div>
              </div>
            )}

            {/* Social Login */}
            {authMode !== 'forgot' && (
              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleSocialLogin('Google')}
                  disabled={isLoading}
                  className="h-12"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleSocialLogin('Microsoft')}
                  disabled={isLoading}
                  className="h-12"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#f25022" d="M1 1h10v10H1z" />
                    <path fill="#00a4ef" d="M13 1h10v10H13z" />
                    <path fill="#7fba00" d="M1 13h10v10H1z" />
                    <path fill="#ffb900" d="M13 13h10v10H13z" />
                  </svg>
                  Microsoft
                </Button>
              </div>
            )}

            {/* Switch Auth Mode */}
            <div className="text-center text-sm">
              {authMode === 'login' ? (
                <p className="text-slate-600 dark:text-slate-400">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setAuthMode('signup')}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Sign Up
                  </button>
                </p>
              ) : authMode === 'signup' ? (
                <p className="text-slate-600 dark:text-slate-400">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setAuthMode('login')}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Sign In
                  </button>
                </p>
              ) : (
                <p className="text-slate-600 dark:text-slate-400">
                  Remember your password?{' '}
                  <button
                    type="button"
                    onClick={() => setAuthMode('login')}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Sign In
                  </button>
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};