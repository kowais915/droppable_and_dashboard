import {
  Home,
  CalendarDays,
  ShoppingCart,
  Settings,
  HelpCircle,
  FileText,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import OrgDropDown from "./OrgDropDown";

const links = [
  { icon: <Home size={20} />, label: "Home" },
  { icon: <CalendarDays size={20} />, label: "Events" },
  { icon: <ShoppingCart size={20} />, label: "Orders" },
  { icon: <Settings size={20} />, label: "Settings" },
];

const events = [
  { label: "Bear Hug: Live in Concert" },
  { label: "Six Fingers — DJ Set" },
  { label: "We All Look The Same" },
  { label: "Viking People" },
];

const Sidebar = () => {
  return (
    <div className="bg-black min-h-screen w-[280px] text-white flex flex-col">
      <OrgDropDown />

      <Separator className="bg-gray-700 mt-4" />
      <nav className="mt-6 flex-grow">
        {links.map((link, i) => (
          <Button
            variant="ghost"
            key={i}
            className="flex w-full px-4 py-2 text-[16px] justify-start gap-3 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            {link.icon}
            <span>{link.label}</span>
          </Button>
        ))}
      </nav>
      <div className="px-4 mb-[220px]">
        <h3 className="text-gray-400 text-sm mb-2">Upcoming Events</h3>
        {events.map((event, i) => (
          <div key={i} className="py-1 text-[16px] text-gray-300">
            {event.label}
          </div>
        ))}
      </div>

      <nav>
        <Button
          variant="ghost"
          className="flex w-full px-4 py-2 text-[14px] justify-start gap-3 text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          <HelpCircle size={20} />
          <span>Support</span>
        </Button>
        <Button
          variant="ghost"
          className="flex w-full px-4 py-2 text-[14px] justify-start gap-3 text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          <FileText size={20} />
          <span>Changelog</span>
        </Button>
      </nav>
      <Separator className="bg-gray-700" />
      <div className="mt-auto p-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-600"></div>
        <div className="flex-grow">
          <div className="text-sm">DigitLabs</div>
          <div className="text-xs text-gray-400">digitlabs@example.com</div>
        </div>
        <ChevronDown size={16} className="text-gray-400" />
      </div>
    </div>
  );
};

export default Sidebar;
