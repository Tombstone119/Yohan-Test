import React from "react";
import { NavbarMenu } from "../mockData/data.ts";
import { FaDumbbell } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<number | null>(null);
  return (

    <nav>
      <div className="container flex justify-around items-center py-4 bg-black ">
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          {/* icon section */}
          <FaDumbbell />
          <p className="text-white">Fit-Track</p>
          <p className="text-red-800 ">Fitness</p>
        </div>
        {/* menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-600">
            {NavbarMenu.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.link}
                    onClick={() => setActiveItem(item.id)} 
                    className={`inline-block py-2.5 px-3 font-semibold transition-all duration-300 ease-in-out ${
                      isActive
                        ? 'bg-red-800 text-white rounded-lg shadow-2xl transform scale-120'// Active state styles
                        : 'text-red-800 hover:text-black hover:bg-red-800 hover:text-white hover:rounded-lg hover:shadow-2xl hover:scale-110'
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* login section */}
        <div className="flex items-center gap-4">
          <button className="hover:bg-red-800 text-red-800 font-semibold hover:text-white rounded-full border-black px-6 py-2 duration-200 hidden md:block" >
            <FaRegUser/>
          </button>
          <button className="hover:bg-red-800 text-red-800 font-semibold hover:text-white rounded-md border-2 border-red-800 px-6 py-2 duration-200 hidden md:block" >
            login
          </button>
          <button className="hover:bg-red-800 text-red-800 font-semibold hover:text-white rounded-md border-2 border-red-800 px-6 py-2 duration-200 hidden md:block" >
            sign in
          </button>
          {/* mobile menu bar */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
