import {NavLink} from 'react-router-dom';

export const ServiceCard = ({title, description, icon}) => {
  return (
    <div className="project-card bg-slate-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={icon} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
        <h3 className="text-xl  text-white mb-2 montserrat-regular">{title}</h3>
        <p className="text-gray-300 poppins-light">{description}</p>
        <div className="mt-4">
          <NavLink to="/contact" className="text-blue-400 hover:underline poppins-regular">Contact me</NavLink>
        </div>
    </div>
  )
}
