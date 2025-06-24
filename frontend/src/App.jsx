
import { Hero} from "./sections/Hero"
import { About } from "./sections/About"
import { Portfolio } from "./sections/Portfolio"
import { Contact } from "./sections/Contact"
import { Services } from "./sections/Services"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Root } from "./sections/Root"

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

  return <RouterProvider router={router} />
}

export default App;