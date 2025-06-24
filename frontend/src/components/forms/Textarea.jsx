
export const Textarea = ({name, placeholder}) => {
  return (
    <textarea 
    className="w-full h-32 p-2 border text-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 poppins-light"
    name={name} 
    placeholder={placeholder}
    ></textarea>
  )
}
