const Navbar = () => {
  return (
    <div className="w-full h-14 md:h-17 flex justify-center items-center bg-background sticky top-0 z-10">
      <ul className="flex gap-5 text-md md:text-lg p-3">
        <li>
          <a href="#" className="hover:bg-amber-600 p-2 rounded-md ease-in-out duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:bg-amber-600 p-2 rounded-md ease-in-out duration-300">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#about" className="hover:bg-amber-600 p-2 rounded-md ease-in-out duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:bg-amber-600 p-2 rounded-md ease-in-out duration-300">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
