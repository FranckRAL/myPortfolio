import { useEffect, useState } from "react"
import { fetchProjects, fetchProjectsDetails } from "../assets/constant/constant"
import { ProjectCard } from "../components/ProjectCard"
import { SectionTitle } from "../components/SectionTitle"
import { motion, AnimatePresence } from "framer-motion"
import {SkeletonCard} from "../components/SkeletonCard"

export const Portfolio = () => {
  const [projects, setProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectDetail, setProjectDetail] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProjects().then(setProjects).catch(console.error).finally(()=>setLoading(false))
  }, [])

  useEffect(() => {
    if (selectedProject) {
    fetchProjectsDetails(selectedProject)
      .then(setProjectDetail)
      .catch(console.error);
  } else {
    setProjectDetail(null);
  }
  }, [selectedProject])

  const openModal = (project_id) => setSelectedProject(project_id)
  const closeModal = () => {
    setSelectedProject(null)
    setProjectDetail(null)
  }

  return (
    <div className='padding'>
      <SectionTitle title="Recents projects" />
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {
            loading
            ? Array.from({length: 3}).map((_, index) => <SkeletonCard key={index}/>)
            : projects.map((project, index) => (
              <li key={index} className="mb-6">
                <ProjectCard {...project} projectDetailsHandler={(e) => {
                  e.preventDefault();
                  openModal(project.id)
                }}
                />

              </li>
            ))
          }
        </ul>
        <div className="text-center">
          <a href="" className="poppins-regular text-white hover:text-blue-500">View more projects</a>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && projectDetail && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ background: "rgba(0,0,0,0.5)"}}
          >
            <motion.div
              className="bg-slate-700 rounded-lg p-0 max-w-3xl w-full relative flex flex-row overflow-hidden"
              initial={{ y: 80, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 80, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button
                className="absolute top-2 right-2 text-white text-2xl z-10"
                onClick={closeModal}
              >
                &times;
              </button>
              <div className="w-2/5 min-w-[200px] max-w-[320px] flex-shrink-0 flex items-center justify-center bg-slate-800">
                <img
                  src={projectDetail.image}
                  alt={projectDetail.title}
                  className="object-cover w-full h-full max-h-96 rounded-l-lg"
                  style={{ maxHeight: 350 }}
                />
              </div>
              <div className="w-3/5 p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2 text-white">{projectDetail.title}</h2>
                <p className="mb-2 text-slate-200">{projectDetail.description}</p>
                <hr className="my-2 border-slate-500" />
                <ul className="flex flex-wrap gap-2 mt-2">
                  {projectDetail.technologies?.map((technology) =>
                    <li key={technology.id} className="bg-slate-600 text-white px-2 py-1 rounded text-xs">
                      {technology.name}
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
