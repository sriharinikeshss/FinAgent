import { useState } from 'react';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import Dashboard from './components/Dashboard';
import ReasoningLab from './components/ReasoningLab';
import ResearchReport from './components/ResearchReport';
import Profile from './components/Profile';

export type ScreenType = 'dashboard' | 'reasoning' | 'reports' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('dashboard');

  return (
    <div className="bg-background text-on-background min-h-screen font-body-md text-body-md overflow-x-hidden flex">
      {/* Side Navigation */}
      <SideNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      
      {/* Main Content Area */}
      <div className="ml-64 flex-1 flex flex-col min-h-screen relative">
        <TopNav />
        
        {/* Dynamic Screen Content */}
        <main className="flex-1 mt-16 p-gutter md:p-margin-edge w-full">
          {currentScreen === 'dashboard' && <Dashboard />}
          {currentScreen === 'reasoning' && <ReasoningLab />}
          {currentScreen === 'reports' && <ResearchReport />}
          {currentScreen === 'profile' && <Profile />}
        </main>
      </div>
    </div>
  );
}
