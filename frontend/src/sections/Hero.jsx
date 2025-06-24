import { heroSm, heroXl } from "../assets/img"
import { Button } from "../components/Button"
import { bio } from "../assets/constant/constant"
export const Hero = () => {
  return (
    <section id="home" className="flex max-lg:flex-col justify-center items-center h-screen padding ">
      <div className="lg:w-3/5 w-full flex flex-col justify-center items-start gap-4 max-lg:items-center max-lg:text-center max-lg:order-2 lg:pl-14">
        <h1 className="text-6xl montserrat-regular text-white">Franck <span className="text-yellow-500">Andritina</span></h1>
        <p className="text-md  poppins-light text-slate-400">{bio}</p>

        <div className="flex gap-4 mt-10">
          <Button label="Contact me" path='/contact' />
          <Button label="View my work" secondary={true} path='/portfolio'/>
        </div>
      </div>
      <div className="w-full lg:w-2/5 md:h-screen flex  justify-center items-center max-lg:order-1">
        <div className="hidden max-lg:flex w-full">
          <img src={heroSm} alt="image de franck" className="object-contain mx-auto" width={200}/>
        </div>
        <div className="max-lg:hidden">
          <img src={heroXl} alt="image de franck" className="object-contain " width={400} />
        </div>
      </div>
    </section>
  )
}
