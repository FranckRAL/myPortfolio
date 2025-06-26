import { SectionTitle } from "../components/SectionTitle"
import { ContactForm } from "../components/forms/ContactForm"
import { sendMessage } from "../assets/constant/constant"
import { useState } from "react"

export const Contact = () => {
  const [status, setStatus] = useState(null);

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      subject: formData.get("subject"),
      content: formData.get("content"),
    };
    try {
      await sendMessage(data);
      setStatus("Message sent!");
      e.target.reset();
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section className="padding w-[90vw] md:w-[80vw] lg:w-[60vw] xl:w-[50vw]">
      <SectionTitle title="Contact me" />
      <div className="mt-14 md:mt-5">
        <ContactForm onSubmitHandler={onsubmitHandler}/>
        {status && <div className="mt-4 text-white">{status}</div>}
      </div>
    </section>
  )
}
