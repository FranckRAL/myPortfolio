
export const Brand = ({brand, avatar}) => {
  return (
    <div className="flex items-center justify-center gap-3">
        <div className="">
            <img src={avatar} alt="avatar" className="object-contain rounded-full  border-[1px] border-yellow-500 " width={32}/>
        </div>
        <h2 className="text-stone-100 md:text-xl text-md montserrat-regular">{brand}</h2>
    </div>
  )
}
