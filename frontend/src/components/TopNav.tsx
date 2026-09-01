import React from 'react';

export default function TopNav() {
  return (
    <header className="fixed top-0 right-0 left-64 flex justify-between items-center px-gutter z-40 bg-surface-container h-16 transition-all duration-200 ease-in-out border-b border-outline-variant/30">
      <div className="flex items-center gap-4">
        <h1 className="font-headline-md text-headline-md font-black text-on-surface">
          Financial Intelligence
        </h1>
        <div className="hidden md:flex gap-6 ml-8">
          <a className="font-label-md text-label-md text-primary font-bold border-b-2 border-primary pb-1" href="#">
            Market: LIVE
          </a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-highest px-2 py-1 rounded transition-colors" href="#">
            Risk: Aggressive
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-on-surface-variant hover:bg-surface-container-highest p-2 rounded-full transition-colors cursor-pointer">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="text-on-surface-variant hover:bg-surface-container-highest p-2 rounded-full transition-colors cursor-pointer">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <img
          alt="User Profile"
          className="w-8 h-8 rounded-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0h-JZYAnBm9HNKm3FxRXj_rNi-T5uMVRBHFZa1_qvntm3S4Df-nEZ5d2i2MZS8pZJFfsNOH8Hoe-0EM7rsokcvNVkhig1uA0K6BZ2Gtv4U-i4EruS94xFZRyu4uglKZDz5Bz5Vd5L46O2e68-iRCYzssEPWDMI-0KkQDO-mVXN5HkgqVBNne5LoevfMtV-Fq0SSMlj2ktNmCaNRftqqsuEcKQ3jiiA-fFTl3TpTbWEXg63Na1bVN7gw"
        />
      </div>
    </header>
  );
}
