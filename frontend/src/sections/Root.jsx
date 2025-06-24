import { useRef, useState } from "react"
import { Outlet } from "react-router-dom"
import { navItems } from "../assets/constant/constant"
import { avatar } from "../assets/img"
import { Brand } from "../components/Brand"
import { Navigation } from "./Navigation"
import { Footer } from "./Footer"

export const Root = () => {
  const [isNavShow, setIsNavShow] = useState(false)
  const refBtn = useRef(null)
  
  
  return (
    <div className="App h-screen mx-auto max-container flex gap-0 relative bg-slate-700">
      <button ref={refBtn} className="hamburger md:hidden absolute top-4 left-4 z-50 cursor-pointer transition-all duration-300 ease" onClick={() => setIsNavShow(!isNavShow)} aria-label="Toggle Navigation" >
        {
          !isNavShow && <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg> 
        
        } 
        {
          isNavShow && <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
        }
      </button>
        <section className={`navigation ${isNavShow ? 'translate-x-[0]' : '-translate-x-full md:translate-x-0'}`}>
          <Brand brand="Franck Andritina" avatar={avatar}/>
          <Navigation navItems={navItems} navLinkHandler={() => refBtn.current.click()}/>
          <div className="mt-auto mb-5">
            <Footer />
          </div>
      </section>
      
      <main className="content">
          <Outlet />
      </main>
    </div>
  )
}


