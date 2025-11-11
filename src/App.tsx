import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CompanyDirectory from './components/CompanyDirectory';
import CompanyProfile from './components/CompanyProfile';
import OpportunityFeed from './components/OpportunityFeed';
import UserProfile from './components/UserProfile';

type Page = 'home' | 'companies' | 'opportunities' | 'profile' | 'company-profile';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCompanyClick = (companyId: string) => {
    setSelectedCompanyId(companyId);
    setCurrentPage('company-profile');
  };

  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} onLogin={() => setIsLoggedIn(true)} />;
      case 'companies':
        return <CompanyDirectory onCompanyClick={handleCompanyClick} />;
      case 'company-profile':
        return <CompanyProfile companyId={selectedCompanyId} onBack={() => setCurrentPage('companies')} />;
      case 'opportunities':
        return <OpportunityFeed onCompanyClick={handleCompanyClick} />;
      case 'profile':
        return <UserProfile />;
      default:
        return <HomePage onNavigate={setCurrentPage} onLogin={() => setIsLoggedIn(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        isLoggedIn={isLoggedIn}
        onLogin={() => setIsLoggedIn(true)}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
