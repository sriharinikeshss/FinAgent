import React from 'react';

type SideNavProps = {
  currentScreen: 'dashboard' | 'reasoning' | 'reports' | 'profile';
  onNavigate: (screen: 'dashboard' | 'reasoning' | 'reports' | 'profile') => void;
};

export default function SideNav({ currentScreen, onNavigate }: SideNavProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'reasoning', label: 'Reasoning Lab', icon: 'psychology' },
    { id: 'reports', label: 'Research Reports', icon: 'analytics' },
    { id: 'profile', label: 'Profile', icon: 'person' },
  ] as const;

  return (
    <nav className="h-screen w-64 fixed left-0 top-0 bg-surface flex flex-col border-r border-outline-variant z-50">
      <div className="p-gutter flex flex-col items-start gap-2 pt-6">
        <h2 className="font-headline-sm text-headline-sm font-bold text-primary">
          Aegis Intelligence
        </h2>
        <span className="font-label-md text-label-md text-on-surface-variant">
          Autonomous v2.4
        </span>
      </div>
      
      <div className="flex-1 mt-stack-lg flex flex-col gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex items-center gap-4 px-gutter py-3 transition-colors active:scale-95 duration-150 cursor-pointer ${
              currentScreen === item.id
                ? 'text-primary font-bold border-r-2 border-primary bg-surface-container-low hover:bg-surface-container-high'
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-label-md text-label-md">{item.label}</span>
          </button>
        ))}
      </div>
      
      <div className="p-gutter mt-auto mb-6">
        <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm cursor-pointer">
          New Analysis
        </button>
      </div>
    </nav>
  );
}
