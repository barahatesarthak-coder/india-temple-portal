import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Landmark, Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const { success, error: toastError } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const result = await login(email, password);
      success('Welcome back! You have successfully signed in.');
      navigate(result.user?.role === 'admin' && redirectPath === '/' ? '/admin' : redirectPath);
    } catch (err) {
      const message = err.message || 'Invalid email or password.';
      setError(message);
      toastError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-stone-200 shadow-xl space-y-6">
        <header className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-amber-600 flex items-center justify-center text-white mx-auto shadow-md"><Landmark className="w-6 h-6" /></div>
          <h1 className="text-2xl font-bold font-serif-heading text-stone-900">Sign in to Devalaya</h1>
          <p className="text-sm text-stone-500">Sign in to save pilgrimage plans and manage your temple content.</p>
        </header>

        <div className="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
          <ShieldCheck className="w-5 h-5 shrink-0 text-amber-700" />
          <p><strong>Administrator?</strong> Use the private account provisioned for you by your portal administrator. Admin credentials are never displayed on this public page.</p>
        </div>

        {error && <div role="alert" className="p-3 bg-rose-50 text-rose-700 text-sm rounded-xl border border-rose-200">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-700">Email address</label>
            <div className="relative"><Mail aria-hidden="true" className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" /><input id="email" name="email" type="email" autoComplete="username" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500" /></div>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-stone-700">Password</label>
            <div className="relative"><Lock aria-hidden="true" className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" /><input id="password" name="password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500" /></div>
          </div>
          <button type="submit" disabled={loading} className="w-full py-3 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 disabled:opacity-60 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
            <span>{loading ? 'Signing in…' : 'Sign in'}</span><ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-sm text-stone-500">New to Devalaya? <Link to="/register" className="font-bold text-amber-700 hover:underline">Create an account</Link></p>
      </div>
    </div>
  );
}
