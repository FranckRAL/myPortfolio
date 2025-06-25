import { NavLinkItem } from "../components/navigations/NavLinkItem"

export const Navigation = ({ navItems, navLinkHandler, direction = "row" }) => {
    return (
        <ul className={`flex ${direction === "col" ? "flex-col gap-6 text-2xl" : "flex-row gap-2"}`}>
            {navItems.map((item, index) => (
                <NavLinkItem key={index} path={item.path} label={item.label} navLinkHandler={navLinkHandler}/>
            ))}
        </ul>
    )
}
  