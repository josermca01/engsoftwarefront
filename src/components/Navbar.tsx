import { useState } from "react";
import { navLinks } from "../constants";

export const Navbar = () => {
  const [active, setActive] = useState("Home");
  return (
    <nav className='w-full flex py-6 justify-between items-center z-50 bg-gray-800 bg-opacity-40 fixed'>
      <h1 className='text-white text-xl mx-10'>Nome da Marca</h1>
      <ul className="list-none sm:flex hidden justify-start items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar