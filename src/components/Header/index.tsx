import { Dispatch, SetStateAction } from 'react';
import logo from '../../assets/logo.svg';
import buttonDrawer from '../../assets/buttonDrawer.svg';
import { Link } from 'react-scroll';
import { NavLink } from '../NavLink';

interface HeaderProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  scrollActive: boolean;
}

export function Header({ setIsOpen, scrollActive }: HeaderProps) {
  return (
    <header className={`transition-colors ${scrollActive === true ? 'bg-gray500 shadow-lg' : 'bg-none'} fixed z-10 w-[100%]`}>
      <div className={` bg-none w-[100%] max-w-[1300px] m-auto pl-[40px] pr-[6%] lg:pr-[40px] pb-[20px] pt-[50px] flex gap-[18px] justify-between items-center p-4`}>
        <Link
          to='/'
          spy={true} smooth={true} offset={0} duration={500}
        >
          <img src={logo} className='cursor-pointer w-auto' />
        </Link>

        <button
          className="hidden xl:flex text-white rounded py-1"
          onClick={() => setIsOpen(true)}
        >
          <img src={buttonDrawer} className='xl:w-[100%] xl:justify-center' />
        </button>

        <nav className='flex gap-[18px] justify-end xl:hidden'>
          <NavLink href='#' title='Sobre' />
          <NavLink href='products' title='Produtos' />
          <NavLink href='services' title='Serviços' />
          <NavLink href='aboutUs' title='Equipe' />
          <NavLink href='contact' title='Contato' />
        </nav>
      </div>
    </header>
  )
}