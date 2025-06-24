import {NavLink} from 'react-router-dom'

export const NavLinkItem = ({path, label, navLinkHandler}) => {
  return (
    <li className="flex items-center">
        <NavLink to={path} className={({isActive}) =>(
            `px-4 py-4 text-stone-100 text-md poppins-light text-center w-full h-full ${isActive && `bg-slate-700 scale-110` } hover:bg-slate-700 hover:scale-110 transition-all duration-300 ease-in-out`
        )}
        onClick={() => navLinkHandler()}
        
        >{label}</NavLink>
    </li>
  )
}