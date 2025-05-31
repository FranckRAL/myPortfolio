import {NavLink} from 'react-router-dom'

export const NavLinkItem = ({path, label}) => {
  return (
    <li className="flex items-center">
        <NavLink to={path} className={({isActive}) =>(
            `px-4 py-4 text-stone-100 text-lg poppins-light text-center w-full h-full ${isActive && `bg-slate-700` } hover:bg-slate-700 transition-all duration-300 ease-in-out`
        )}>{label}</NavLink>
    </li>
  )
}