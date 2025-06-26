import { Button } from "../Button"
import { Input } from "./Input"
import { Textarea } from "./Textarea"
export const ContactForm = ({onSubmitHandler}) => {
  return (
    <form className="flex flex-col gap-4  " onSubmit={onSubmitHandler}>
        <ul className="flex flex-col gap-5">
            <li>
                <Input type="email" name="email" placeholder="example@host.com" />
            </li>
            <li>
                <Input type="text" name="subject" placeholder="Subject" />
            </li>
            <li>
                <Textarea name="content" placeholder="Your message here..." />
            </li>
            <li className="flex justify-center md:justify-start items-center">
                <button 
                type="submit"
                className="flex justify-center w-1/2 md:w-fit items-center gap-2 px-7 py-4  poppins-light text-lg cursor-pointer leading-none bg-yellow-500  text-gray-900 rounded-full   hover:scale-110 transition-all duration-300 ease-in-out shadow-lg">Send</button>
            </li>
        </ul>
    </form>
  )
}
