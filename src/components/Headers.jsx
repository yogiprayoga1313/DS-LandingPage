import { useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuSectionRef = useRef(null);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = () => {
    // Lakukan scroll ke bagian Nasi Box di Home
    if (menuSectionRef.current) {
      menuSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    // Tutup menu jika diperlukan
    setShowMenu(false);
  };

  return (
    <div className='w-full fixed z-10 pb-20'>
      <div className='flex justify-around  items-center bg-[#FFAB07] h-[60px] px-8 md:px-0'>
        <div>
          <span className='font-bold text-xl text-white'>Dapoer Sakha</span>
        </div>
        <nav className='hidden md:flex gap-7 text-white font-semibold'>
          <Link className='hover:text-blue-600'>Home</Link>
          <Link className='hover:text-blue-600'>Tentang</Link>
          <Link onClick={handleMenuClick} className='hover:text-blue-600'>Menu</Link>
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
          <Link className='hover:text-blue-600'>Home</Link>
          <Link className='hover:text-blue-600'>Tentang</Link>
          <Link className='hover:text-blue-600'>Menu</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
