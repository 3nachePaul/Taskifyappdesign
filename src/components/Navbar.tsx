import { Button } from './ui/button';
import { Trophy } from 'lucide-react';

type Page = 'home' | 'companies' | 'opportunities' | 'profile' | 'company-profile';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isLoggedIn: boolean;
  onLogin: () => void;
}

export default function Navbar({ currentPage, onNavigate, isLoggedIn, onLogin }: NavbarProps) {
  const navItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'opportunities' as Page, label: 'Opportunities' },
    { id: 'companies' as Page, label: 'Companies' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 text-[#0A3A0B]"
            >
              <Trophy className="w-6 h-6" />
              <span className="font-semibold">Taskify</span>
            </button>
            
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`transition-colors ${
                    currentPage === item.id
                      ? 'text-[#0A3A0B]'
                      : 'text-gray-600 hover:text-[#0A3A0B]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <Button
                onClick={() => onNavigate('profile')}
                className="bg-[#0A3A0B] hover:bg-[#0A3A0B]/90"
              >
                My Profile
              </Button>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={onLogin}
                  className="text-[#0A3A0B] hover:text-[#0A3A0B]/90"
                >
                  Login
                </Button>
                <Button
                  onClick={onLogin}
                  className="bg-[#0A3A0B] hover:bg-[#0A3A0B]/90"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
