import { useState, useEffect } from "react"
import { Button } from "../components/Button"
import { bio, fetchImages } from "../assets/constant/constant"
import { useInView } from "react-intersection-observer"
import { Typewriter } from "react-simple-typewriter"

export const Hero = () => {
  const [heroImg, setHeroImg] = useState(null)
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024)
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isLargeScreen) {
      fetchImages('hero_img_xl.png').then(setHeroImg).catch(console.error)
    } else {
      fetchImages('hero_img_sm.png').then(setHeroImg).catch(console.error)
    }
  }, [isLargeScreen])

  return (
    <section
      id="home"
      ref={ref}
      className="flex max-lg:flex-col justify-center items-center h-screen padding "
    >
      <div className="lg:w-3/5 w-full flex flex-col justify-center items-start gap-4 max-lg:items-center max-lg:text-center max-lg:order-2 lg:pl-14">

        <h1 className="text-6xl montserrat-regular text-white text-shadow-lg" aria-label="Franck Andritina">
          {inView ? (
            <>
              <Typewriter
                words={['Hello, i\'m ', 'Franck Andritina']}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={800}
              />
            </>
          ) : (
            <>
              Franck Andritina
            </>
          )}
        </h1>
        <p className="text-lg text-shadow-2xs  poppins-light text-slate-400">{bio}</p>
        <div className="flex gap-4 mt-10">
          <Button label="Contact me" path='/contact' />
          <Button label="View my work" secondary={true} path='/portfolio' />
        </div>
      </div>
      <div className="w-full lg:w-2/5 md:h-screen flex  justify-center items-center max-lg:order-1 relative">
        <img src={heroImg} alt="image de franck" className="object-contain mx-auto" width={isLargeScreen ? 400 : 200} />
        {
          isLargeScreen 
          && <div className="flex flex-col justify-center items-center gap-4 absolute bottom-1/2 right-2 ">
          <span className="p-2 text-xl rounded-full shadow text-white bg-slate-500  w-[40px] h-[40px] flex justify-center items-center animate-pulse">Js</span>
          <span className="p-2 text-xl rounded-full shadow text-white bg-slate-500  w-[40px] h-[40px] flex justify-center items-center animate-pulse">Py</span>
        </div>
        }
      </div>
    </section>
  )
}