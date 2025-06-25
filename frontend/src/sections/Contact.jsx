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
    <section className="padding w-[90vw] md:w-[80vw] lg:w-[60vw] xl:w-[50vw]">
      <SectionTitle title="Contact me" />
      <div className="mt-14 md:mt-5">
        <ContactForm onSubmitHandler={onsubmitHandler}/>
      </div>
    </section>
  )
}
