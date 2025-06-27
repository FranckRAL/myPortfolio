import { useEffect } from "react"
import { Hero} from "./sections/Hero"
import { About } from "./sections/About"
import { Portfolio } from "./sections/Portfolio"
import { Contact } from "./sections/Contact"
import { Services } from "./sections/Services"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Root } from "./sections/Root"
import { sendVisitor } from "./assets/constant/constant"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Hero />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/services",
        element: <Services />
      }
    ]
  }
])




const App = () =>{

  useEffect(() => {
    const userAgent = navigator.userAgent
  sendVisitor({ user_agent: userAgent })
    .catch(console.error);
}, [])

  return <RouterProvider router={router} />
}

export default App;