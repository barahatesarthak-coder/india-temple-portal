import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard,
  Landmark,
  PlusCircle,
  Calendar,
  Compass,
  Tags,
  Globe,
  LogOut,
  ArrowLeft,
  ShieldCheck
} from 'lucide-react';

export default function AdminSidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
      isActive
        ? 'bg-amber-600 text-white shadow-md'
        : 'text-stone-300 hover:bg-stone-800 hover:text-white'
    }`;

  return (
    <aside className="w-64 bg-stone-900 text-stone-200 min-h-screen p-4 flex flex-col justify-between shrink-0 border-r border-stone-800">
      <div className="space-y-6">
        
        {/* Brand & Admin Badge */}
        <div className="px-3 pt-2">
          <Link to="/" className="flex items-center gap-2 text-stone-400 hover:text-white text-xs mb-3 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Public Portal
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-600 flex items-center justify-center text-white font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-white text-sm font-serif-heading">Heritage CMS</h2>
              <span className="text-[10px] text-amber-400 font-medium uppercase tracking-wider">
                Admin Control Room
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1" aria-label="Admin Portal Navigation">
          <NavLink to="/admin" end className={navClass}>
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/admin/temples" end className={navClass}>
            <Landmark className="w-4 h-4" />
            <span>Temple Shrines</span>
          </NavLink>

          <NavLink to="/admin/temples/new" className={navClass}>
            <PlusCircle className="w-4 h-4" />
            <span>Add New Temple</span>
          </NavLink>

          <NavLink to="/admin/festivals" className={navClass}>
            <Calendar className="w-4 h-4" />
            <span>Festival Records</span>
          </NavLink>

          <NavLink to="/admin/circuits" className={navClass}>
            <Compass className="w-4 h-4" />
            <span>Pilgrimage Circuits</span>
          </NavLink>

          <NavLink to="/admin/categories" className={navClass}>
            <Tags className="w-4 h-4" />
            <span>Categories & Regions</span>
          </NavLink>
        </nav>
      </div>

      {/* User Info & Sign out */}
      <div className="pt-4 border-t border-stone-800 space-y-3">
        <div className="px-3">
          <p className="text-xs font-bold text-white truncate">{user?.name}</p>
          <p className="text-[11px] text-stone-400 truncate">{user?.email}</p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-950/40 hover:text-rose-300 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Exit Admin & Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
