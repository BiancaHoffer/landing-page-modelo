import logo from '../assets/logo.svg';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <>
      <div className='bg-gray500 px-[40px]'>
        <div className='bg-gray500 flex justify-between items-center w-full max-w-[1216px] m-auto py-[80px] gap-[80px] lg:py-[40px]
        xl:justify-center
      '>
          <img src={logo} className='max-w-[20%] xl:max-w-[100%]' />

          <nav className='flex gap-[38px] max-w-[80%] 
          xl:hidden
        '>
            <NavLink href='#' title='Sobre' />
            <NavLink href='#' title='Produtos' />
            <NavLink href='#' title='Serviços' />
            <NavLink href='#' title='Equipe' />
            <NavLink href='#' title='Contato' />
          </nav>
        </div>
      </div>

      <div className='bg-orange500 fizex w-[100%]'>
      </div>
    </>
  )
}