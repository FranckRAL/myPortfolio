
export const NavItems = ({path, label}) => {
  return (
    <li className="flex items-center">
        <a href={path} className="px-4 py-5 text-stone-100 text-xl text-center w-full h-full hover:bg-slate-700">{label}</a>
    </li>
  )
}
