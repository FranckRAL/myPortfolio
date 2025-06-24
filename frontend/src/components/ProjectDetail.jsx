
export const ProjectDetail = ({title, description, img, link, technologies }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between ">
        <div className="mb-4 sm:mb-0">
            <img src={img} alt="" />
        </div>
        <div className="flex-1 sm:ml-6 ">
            <h3 className="montserrat-regular ">{title}</h3>
            <p className="poppins-light">{description}</p>
            <div className="mt-4">
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline poppins-regular">View Project</a>
            </div>
            <div className="mt-4">
                <h4 className="text-lg font-semibold">Technologies Used:</h4>
                <ul className="list-disc pl-5">
                    {technologies.map((tech, index) => (
                        <li key={index} className="text-gray-300 poppins-light">{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
