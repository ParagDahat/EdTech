import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavTabs({ tabs }) {
  return (
    <div className="flex items-center justify-center gap-6 rounded-md bg-gray-500 p-6">
      {/* Logo on the left */}
      <NavLink to="/" className="flex items-center">
        <img src="/calibreLogo.png" alt="Logo" className=" w-36" />
      </NavLink>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {tabs.map((tab) => (
          <Tab text={tab} key={tab} />
        ))}
      </div>
    </div>
  );
}

const Tab = ({ text }) => {
  const path = text.toLowerCase() === "home" ? "/" : `/${text.toLowerCase()}`;

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `relative rounded-md p-2 text-sm transition-all ${
          isActive ? "text-white" : "text-slate-300 hover:font-black"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <p className="relative z-50 min-w-20">{text}</p>
          {isActive && (
            <motion.span
              layoutId="tabs"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute text-center inset-0 rounded-sm bg-gradient-to-r from-red-800 to-red-600"
            />
          )}
        </>
      )}
    </NavLink>
  );
};
