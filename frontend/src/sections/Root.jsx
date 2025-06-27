import { useState, useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { fetchImages, navItems } from "../assets/constant/constant"
import { Brand } from "../components/Brand"
import { Navigation } from "./Navigation"
import { Footer } from "./Footer"
import { AnimatePresence, motion } from "framer-motion"

export const Root = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    fetchImages('logo.png').then(setAvatar).catch(console.error)
  }, [])
  

  return (
    <div className="App min-h-screen flex flex-col bg-slate-700 md:min-h-screen">
      <div className="bg-slate-800  px-8 py-4 shadow-md sticky top-0 z-50 ">
        <header className="w-full  flex items-center justify-between max-container">
        <div className="flex items-center gap-4">
          {
            avatar && <Brand brand="Franck Andritina" avatar={avatar} />
          }
        </div>
        {/* Desktop nav */}
        <nav className="hidden md:block">
          <Navigation navItems={navItems} />
        </nav>
        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 group z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 bg-white my-1 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-white my-1 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-white my-1 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
        {/* Mobile nav */}
        <nav className={`fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-95 flex flex-col items-center justify-center z-40 transition-all duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
          <Navigation navItems={navItems} navLinkHandler={() => setMenuOpen(false)} direction="col" />
        </nav>
      </header>
      </div>
      <main className="max-container flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}