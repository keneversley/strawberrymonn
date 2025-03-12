import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { navData } from "../../constant/navData";
import { logo, LogoTwo } from "../../assets";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-100 shadow-lg fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between py-0 px-4 ">
        <div className="w-25 h-24">
          <img src={LogoTwo} alt="Brand Logo" className="w-24 h-24" />
        </div>

        <div className="hidden md:flex space-x-9">
          {navData.slice(1).map((item) => (
            <a
              key={item._id}
              href={item.link}
              className="text-black hover:text-slate-600 hover:underline font-bold"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-black text-2xl font-extrabold">
          <button onClick={toggleMenu}>
            {isOpen ? <MdOutlineClose /> : <CiMenuFries />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-transparent p-4">
          <div className="space-y-2">
            {navData.slice(1).map((item) => (
              <a
                key={item._id}
                href={item.link}
                className="block text-black hover:text-slate-600 hover:underline font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
