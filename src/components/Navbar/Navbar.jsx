import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import Logo2 from '../Logo2/Logo2';
import LogoHover from '../LogoHover/LogoHover';
import { Link} from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState('bg-transparent');
  const [linkColor, setLinkColor] = useState('text-black');
  const [hover, setHover] = useState('hover:text-rojo');
  const [logo, setLogo] = useState(<Logo />);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarColor('bg-verde');
        setLinkColor('text-gris-oscuro');
        setLogo(<Logo2 />);
        setHover('hover:text-white');
        setIsScrolled(true);
      } else {
        setNavbarColor('lg:bg-transparent bg-transparent');
        setLinkColor('text-gris-claro');
        setLogo(<Logo />);
        setHover('hover:text-rojo');
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    if (isScrolled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isScrolled) {
      setIsHovered(false);
    }
  };

  return (
    <div className="mb-20">
      <nav className={`fixed top-0 mr-10 w-full z-10 ${navbarColor} px-10 transition-colors duration-300`}>
        <div className="container px-6 py-2 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className={`font-extrabold ${linkColor} text-lg`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {isHovered ? <LogoHover /> : logo}
            </a>
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={`${linkColor} dark:text-gray-200 text-gris-oscuro hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400`}
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out ${navbarColor} md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen ? 'translate-y-0 opacity-100 ' : 'opacity-0 -translate-x-full'
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
             <Link
                className={`my-2 ${linkColor} text-lg montserrat text-gris-medio transition-colors duration-300 transform dark:text-gray-200 ${hover} dark:hover:text-blue-400 md:mx-4 md:my-0`}
                to="/"
              >
                Inicio
              </Link> 
              <a
                className={`my-2 ${linkColor} text-lg montserrat text-gris-medio transition-colors duration-300 transform dark:text-gray-200 ${hover} dark:hover:text-blue-400 md:mx-4 md:my-0`}
                href="#nosotros"
              >
                Sobre Nosotros
              </a>
           
              <a
                className={`my-2 ${linkColor} text-lg montserrat text-gris-medio transition-colors duration-300 transform dark:text-gray-200 ${hover} dark:hover:text-blue-400 md:mx-4 md:my-0`}
                href="#repuestosyherramientas"
              >
                Repuestos y Herramientas
              </a>
              <a
                className={`my-2 ${linkColor} text-lg montserrat text-gris-medio transition-colors duration-300 transform dark:text-gray-200 ${hover} dark:hover:text-blue-400 md:mx-4 md:my-0`}
                href="#marcas"
              >
                Marcas
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;