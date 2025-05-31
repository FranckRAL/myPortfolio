
import { NavLinkItem } from "../components/NavLinkItem"

export const Navigation = ({ navItems }) => {
    return (
        <nav className="">
            <ul className="flex flex-col mt-10">
                {
                    navItems.map((item, index) => (
                        <NavLinkItem key={index} path={item.path} label={item.label} />
                    ))
                }

            </ul>
        </nav>
    )
}
  