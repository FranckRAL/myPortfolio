import { useEffect, useState } from "react"
import { fetchProjects } from "../assets/constant/constant"
import { ProjectCard } from "../components/ProjectCard"
import { SectionTitle } from "../components/SectionTitle"

export const Portfolio = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetchProjects().then(setProjects).catch(console.error)
  }, [])
  
  const projectDetailsHandler = (project) => {
    return (e) => {
      e.preventDefault();
      // Here you can handle the project details logic, like opening a modal or navigating to a project details page
      console.log("Project details for:", project);
    }
  };
  return (
    <div className='padding'>
      <SectionTitle title="Recents projects"/>
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {
          projects.map((project, index) => (
            <li key={index} className="mb-6">
              <ProjectCard {...project} projectDetailsHandler={(project) => projectDetailsHandler(project)}/>
            </li>
          ))
        }
        </ul>
        <div className="text-center">
          <a href="" className="poppins-regular text-white hover:text-blue-500">View more projects</a>
        </div>
      </div>

    </div>
  )
}
