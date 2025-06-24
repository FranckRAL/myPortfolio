import { SectionTitle } from "../components/SectionTitle"
import { ContactForm } from "../components/forms/ContactForm"
import { socialMedia } from "../assets/icons"
import { SocialLink } from "../components/navigations/SocialLink"

export const Contact = () => {
const onsubmitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    
    e.target.reset(); // Reset the form after submission
  }
  return (
    <section className="padding">
      <SectionTitle title="Contact me" />
      <div className="mt-14 md:mt-5">
        <ContactForm onSubmitHandler={onsubmitHandler}/>
      </div>
      <div className="flex  items-center justify-center mt-30">
        <p className="text-gray-300 text-center poppins-light text-lg">
          Join me on 
        </p>
        <address>
          <ul className="flex justify-center items-center">
            {socialMedia.map((social, index) => (
              <li key={index} className="inline-block mx-2">
                <SocialLink name={social.name} link={social.link} icon={social.icon}/>
              </li>  
            
            ))}
          </ul>
        </address>
      </div>
    </section>
  )
}
