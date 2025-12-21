import {
    PlusCircle,
    GraduationCap // Added for the logo
} from 'lucide-react'

// --- Types & Interfaces ---

const Navbar: React.FC = () => (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm shrink-0">
        <div className="flex items-center gap-4">
            {/* Logo Area */}
            <div className="flex items-center gap-2 ml-2">
                {/* Updated Logo: Graduation Cap */}
                <GraduationCap className="w-8 h-8 text-indigo-600" />
                <span className="text-xl font-bold text-gray-800 hidden sm:block">Study Mate</span>
            </div>
        </div>

        {/* Center Navigation Items */}
        <div className="flex-1 justify-center items-center gap-8 hidden md:flex">
            {['Focus', 'Practice', 'Note'].map((item) => (
                <button
                    key={item}
                    className="text-gray-500 cursor-pointer font-semibold text-sm hover:text-indigo-600 transition-colors px-3 py-2 rounded-lg hover:bg-indigo-50"
                >
                    {item}
                </button>
            ))}
        </div>

        <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                <PlusCircle className="w-4 h-4" />
                <span>Create</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                {/* Placeholder Avatar */}
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="w-full h-full" />
            </div>
        </div>
    </header>
);

export default Navbar;