import { Outlet } from "react-router-dom"
import { navItems } from "../assets/constant/constant"
import { avatar } from "../assets/img"
import { Brand } from "../components/Brand"
import { Navigation } from "./Navigation"
import { Footer } from "./Footer"

export const Root = () => {
  return (
    <div className="App h-screen mx-auto max-container flex gap-0 ">
        <section className="navigation md:flex md:flex-col hidden ">
          <Brand brand="Franck Laurent" avatar={avatar}/>
          <Navigation navItems={navItems}/>
          <div className="mt-auto">
            <Footer />
          </div>
      </section>
      
      <main className="content">
          <Outlet />
      </main>
    </div>
  )
}
