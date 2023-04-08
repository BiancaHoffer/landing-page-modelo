import { NavLink } from '../NavLink';

import logo from '../../assets/logo.svg';
import buttonDrawer from '../../assets/buttonDrawer.svg';

//@ts-ignore
export function Header({ setIsOpen }) {
  return (
    <header className='bg-gray500'>
      <div className="bg-gray500 w-[100%] max-w-[1300px] m-auto px-[40px] pb-[40px] pt-[80px] flex justify-between items-center p-4">
        <img src={logo} className='w-auto xl:w-[30%] md:w-[50%]' />
        <button
          className="hidden xl:flex text-white rounded py-1"
          onClick={() => setIsOpen(true)}
        >
          <img src={buttonDrawer} className='xl:w-[100%] xl:justify-center' />
        </button>
        <nav className='xl:hidden flex gap-[32px]'>
          <NavLink href='#' title='Sobre' />
          <NavLink href='#' title='Produtos' />
          <NavLink href='#' title='Serviços' />
          <NavLink href='#' title='Equipe' />
          <NavLink href='#' title='Contato' />
        </nav>
      </div>
    </header>
  )
}