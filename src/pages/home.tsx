import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/custom/navbar';
import {
  Home, Compass, User, Settings, Bell, MessageSquare, Calendar, Star, LucideIcon,
  ChevronLeft, ChevronRight,
} from 'lucide-react';

// --- Types & Interfaces ---

interface NavItem {
  icon: LucideIcon;
  label: string;
}

// Updated Interface: Removed 'side' as we now have specific components
interface SidebarProps {
  isOpen: boolean;
  items: NavItem[];
  title: string;
}

interface MainContentProps {
  toggleLeft: () => void;
  toggleRight: () => void;
  isLeftOpen: boolean;
  isRightOpen: boolean;
}

// --- Configuration ---

const LEFT_NAV_ITEMS: NavItem[] = [
  { icon: Home, label: "Home" },
  { icon: Compass, label: "Popular" },
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
];

const RIGHT_NAV_ITEMS: NavItem[] = [
  { icon: Star, label: "Favorites" },
  { icon: MessageSquare, label: "Messages" },
  { icon: Calendar, label: "Events" },
  { icon: Bell, label: "Updates" },
];

// --- Components ---

<Navbar />
// --- 1. Left Sidebar Function ---
const LeftSidebar: React.FC<SidebarProps> = ({ isOpen, items, title }) => {
  return (
    <motion.aside
      initial={false}
      animate={{
        width: isOpen ? 320 : 0,
        opacity: isOpen ? 1 : 0
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="shrink-0 overflow-hidden bg-white border-r border-gray-200 hidden md:block"
    >
      <div className="w-[280px] h-full flex flex-col">
        <div className="p-4 pb-2">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">
            {title}
          </h3>
          <nav className="space-y-1">
            {items.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors group"
              >
                <item.icon className="w-5 h-5 text-gray-400 group-hover:text-indigo-600  transition-colors" />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </motion.aside>
  );
};

// --- 2. Right Sidebar Function ---
const RightSidebar: React.FC<SidebarProps> = ({ isOpen, items, title }) => {
  return (
    <motion.aside
      initial={false}
      animate={{
        width: isOpen ? 480 : 0,
        opacity: isOpen ? 1 : 0
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="shrink-0 overflow-hidden bg-white border-l border-gray-200 hidden md:block"
    >
      <div className="w-[280px] h-full flex flex-col">
        <div className="p-4 pb-2">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">
            {title}
          </h3>
          <nav className="space-y-1">
            {items.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors group"
              >
                <item.icon className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Specific to Right Sidebar: Maybe a different footer or none */}
        <div className="mt-auto p-4 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">© 2024 Study Mate Inc.</p>
        </div>
      </div>
    </motion.aside>
  );
};

const MainContent: React.FC<MainContentProps> = ({ toggleLeft, toggleRight, isLeftOpen, isRightOpen }) => (
  <main className="flex-1 bg-gray-50 overflow-y-auto min-w-0 relative">

    {/* --- Left Trigger Button --- */}
    <button
      onClick={toggleLeft}
      className="absolute top-6 left-4 z-20 p-2 cursor-pointer bg-white border border-gray-200 shadow-md rounded-lg text-gray-600 hover:text-indigo-600 hover:border-indigo-300 transition-all"
      aria-label={isLeftOpen ? "Close Left Sidebar" : "Open Left Sidebar"}
    >
      {isLeftOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
    </button>

    {/* --- Right Trigger Button --- */}
    <button
      onClick={toggleRight}
      className="absolute top-6 right-4 z-20 p-2 cursor-pointer bg-white border border-gray-200 shadow-md rounded-lg text-gray-600 hover:text-indigo-600 hover:border-indigo-300 transition-all"
      aria-label={isRightOpen ? "Close Right Sidebar" : "Open Right Sidebar"}
    >
      {isRightOpen ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
    </button>


    <div className="max-w-7xl mx-auto p-6 space-y-6 pt-16">

      {/* Video Player Container */}
      <div className="w-full bg-black rounded-2xl overflow-hidden shadow-xl aspect-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/jfKfPfyJRdk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* Video Info */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">lofi hip hop radio - beats to relax/study to</h1>
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
              LG
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Lofi Girl</h3>
              <span className="text-sm text-gray-500">13M subscribers</span>
            </div>
          </div>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors">
            Subscribe
          </button>
        </div>
        <div className="text-gray-600 space-y-2">
          <p>Welcome to the lofi hip hop radio. Beats to relax/study to.</p>
          <p className="text-sm text-gray-400">Started streaming on Feb 22, 2020</p>
        </div>
      </div>



    </div>
  </main>
);

// --- Main Layout Component ---

const StudyMateApp: React.FC = () => {
  const [leftOpen, setLeftOpen] = useState<boolean>(true);
  const [rightOpen, setRightOpen] = useState<boolean>(true);

  return (
    <div className="h-screen w-full flex flex-col bg-gray-50 overflow-hidden">
      {/* 1. Navbar (Fixed at Top) */}
      <Navbar />

      {/* 2. Flex Container for Body */}
      <div className="flex flex-1 overflow-hidden relative">

        {/* 3. Left Sidebar */}
        <LeftSidebar
          isOpen={leftOpen}
          items={LEFT_NAV_ITEMS}
          title="Feeds"
        />

        {/* 4. Middle Content */}
        <MainContent
          toggleLeft={() => setLeftOpen(!leftOpen)}
          toggleRight={() => setRightOpen(!rightOpen)}
          isLeftOpen={leftOpen}
          isRightOpen={rightOpen}
        />

        {/* 5. Right Sidebar */}
        <RightSidebar
          isOpen={rightOpen}
          items={RIGHT_NAV_ITEMS}
          title="Trending"
        />
      </div>
    </div>
  );
};

export default StudyMateApp;