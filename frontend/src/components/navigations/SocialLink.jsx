
export const SocialLink = ({name, link, icon}) => {
  return (
    
        <a href={link} className="" target="_blank" rel="noopener noreferrer">
            <img src={icon} alt={name} className="object-contain w-[40px] sm:w-[30px] hover:scale-110 transition-all duration-300 ease-in-out text-slate-500"/>
        </a>
    
  )
}
