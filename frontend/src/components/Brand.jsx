
export const Brand = ({brand, avatar}) => {
  return (
    <div className="text-center">
        <div className="flex flex-col items-center pb-2">
            <img src={avatar} alt="avatar" className="object-contain rounded-full  w-[25%] border-2 border-white p-1" />
        </div>
        <h2 className="text-stone-100 md:text-xl text-md montserrat-regular">{brand}</h2>
    </div>
  )
}
