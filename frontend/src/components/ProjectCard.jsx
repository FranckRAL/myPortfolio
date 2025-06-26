
export const ProjectCard = ({image, title, description, projectDetailsHandler}) => {
  return (
    <div className="project-card bg-slate-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
        <h3 className="text-xl  text-white mb-2 montserrat-regular">{title}</h3>
        <p className="text-gray-300 poppins-light">{description.slice(0, 150)}...</p>
        <div className="mt-4">
          <a href="#" onClick={projectDetailsHandler} rel="noopener noreferrer" className="text-blue-400 hover:underline poppins-regular">View Project</a>
        </div>
    </div>
  )
}
