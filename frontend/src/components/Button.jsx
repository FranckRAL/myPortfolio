import { NavLink } from "react-router-dom"

export const Button = ({label, path, secondary}) => {
  return (
    <NavLink to={path} className={`flex justify-center items-center gap-2 px-7 py-4  poppins-light text-lg cursor-pointer leading-none ${secondary ? "border-[1px] border-white  text-white hover:bg-light-white" : "bg-yellow-500  text-gray-900"} rounded-full   hover:scale-110 transition-all duration-300 ease-in-out shadow-lg`}>
        {label}
    </NavLink>
  )
}

