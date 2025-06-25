import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export const NavLinkItem = ({ path, label, navLinkHandler }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `relative px-4 py-2 mx-1 text-stone-100 text-md poppins-light rounded
          ${isActive ? "text-yellow-500" : ""}
          hover:bg-slate-700 hover:scale-110 transition-all duration-300 ease-in-out`
        }
        onClick={() => navLinkHandler && navLinkHandler()}
      >
        {({ isActive }) => (
          <>
            {label}
            {isActive && (
              <motion.span
                layoutId="navbar-underline"
                className="absolute left-0 right-0 -bottom-1 h-1 bg-yellow-500 rounded"
                style={{ zIndex: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </>
        )}
      </NavLink>
    </li>
  )
}