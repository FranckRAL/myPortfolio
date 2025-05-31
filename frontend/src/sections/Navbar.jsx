
import { NavItems } from "../components/NavItems"

export const Navbar = ({ navItems }) => {
    return (
        <nav className="">
            <ul className="flex flex-col mt-14">
                {
                    navItems.map((item, index) => (
                        <NavItems key={index} path={item.path} label={item.label} />
                    ))
                }

            </ul>
        </nav>
    )
}
