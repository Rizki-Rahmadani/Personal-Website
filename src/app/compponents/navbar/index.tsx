const Navbar = () => {
  return (
    <div className="w-full h-14 md:h-17 flex justify-center items-center bg-background fixed top-0 z-10">
      <ul className="flex gap-3 md:gap-10 text-md md:text-lg px-2 md:px-0">
        <li>
          <a href="#" className="hover:text-amber-600">
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-amber-600">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-amber-600">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-amber-600">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
