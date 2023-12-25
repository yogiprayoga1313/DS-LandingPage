import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ handleMenuClick, handleAboutClick, handleHomeClick }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAbout, setShowAbout] = useState(false)
  const [showHome, setShowHome] = useState(false)
  // const menuSectionRef = useRef(null);
  // const aboutSectionRef = useRef(null);
  // const homeSecctionRef = useRef(null)

  const handleToggleMenu = () => {
    setShowMenu(!showMenu)
    setShowAbout(!showAbout)
    setShowHome(!showHome)
  };

  const handleMenuLinkClick = () => {
    handleMenuClick(); // Scroll to the specified section
    setShowMenu(false); // Close the mobile menu
  };

  const handleAboutLinkClick = () => {
    handleAboutClick()
    setShowAbout(false)
  }

  const handleHomeLinkClick = () =>{
    handleHomeClick()
    setShowHome(false)

  }

  return (
    <div className='w-full fixed z-10 pb-20'>
      <div className='flex justify-around  items-center bg-[#FFAB07] h-[60px] px-8 md:px-0'>
        <div>
          <Link onClick={handleHomeLinkClick} className='font-bold text-xl text-white'>Dapoer Sakha</Link>
        </div>
        <nav className='hidden md:flex gap-7 text-white font-semibold'>
          <Link onClick={handleHomeLinkClick} className='hover:text-blue-600'>Home</Link>
          <Link onClick={handleAboutLinkClick} className='hover:text-blue-600'>Gallery</Link>
          <Link onClick={handleMenuLinkClick} className='hover:text-blue-600'>Product</Link>
        </nav>
        <div className='md:hidden'>
          <FaBars
            className='text-xl text-white cursor-pointer'
            onClick={handleToggleMenu}
          />
        </div>
      </div>
      {showMenu && (
        <div className='flex flex-col md:hidden gap-3 bg-[#FFAB07] py-4 px-8'>
          <Link onClick={handleHomeLinkClick} className='hover:text-blue-600'>Home</Link>
          <Link onClick={handleAboutLinkClick} className='hover:text-blue-600'>Tentang</Link>
          <Link onClick={handleMenuLinkClick} className='hover:text-blue-600'>Menu</Link>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  // Ensure handleMenuClick prop is a function
  handleMenuClick: PropTypes.func.isRequired,
  handleAboutClick: PropTypes.func.isRequired,
  handleHomeClick: PropTypes.func.isRequired,
};

export default Header;
