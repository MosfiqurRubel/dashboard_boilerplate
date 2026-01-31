import useShrink from "@/hooks/useShrink";
import { Home, Settings, LineChart } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const menu = [
  { label: "Home", path: "/home", icon: Home },
  { label: "Analytics", path: "/analytics", icon: LineChart },
  { label: "Settings", path: "/settings", icon: Settings },
];

const Sidebar: React.FC = () => {
  const { isShrinkSidebar } = useShrink();

  return (
    <aside
      className={`sidebar ${isShrinkSidebar ? "w-16" : "w-64"}`}
    >
      <ul className="p-4 space-y-4">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded transition ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200 text-gray-700"
                }`
              }
            >
              <Icon size={20} />
              {!isShrinkSidebar && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
