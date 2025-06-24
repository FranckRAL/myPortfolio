
export const Input = ({type, placeholder, name}) => {
  return (
    <input 
    type={type} 
    name={name} 
    placeholder={placeholder} 
    className="w-full p-2 border text-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 poppins-light"
    />
  )
}
