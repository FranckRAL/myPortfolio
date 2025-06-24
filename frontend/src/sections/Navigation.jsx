import { NavLinkItem } from "../components/navigations/NavLinkItem"

export const Navigation = ({ navItems, navLinkHandler }) => {
    return (
        <nav className="">
            <ul className="flex flex-col mt-10">
                {
                    navItems.map((item, index) => (
                        <NavLinkItem key={index} path={item.path} label={item.label} navLinkHandler={navLinkHandler}/>
                    ))
                }

            </ul>
        </nav>
    )
}
  