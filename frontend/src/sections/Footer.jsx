import { SocialLink } from "../components/navigations/SocialLink"
import { socialMedia } from "../assets/icons"
export const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white mt-[auto] py-5">
      <div className="flex flex-col justify-center items-center h-20  px-2 text-center gap-4">
        <address>
        <ul className="flex justify-center items-center">
          {socialMedia.map((item, index) => (
            <li key={index} className="inline-block mx-2">
              <SocialLink name={item.name} link={item.link} icon={item.icon} />
            </li>
          ))}
        </ul>
      </address>
        <p className="text-sm poppins-extralight">&copy; 2025 Franck Andritina. All rights reserved.</p>
      </div>
    </footer>
  )
}
