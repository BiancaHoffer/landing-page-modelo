import logo from '../../assets/logo.svg';
import buttonDrawer from '../../assets/buttonDrawer.svg';
import { Link } from 'react-scroll';
import { NavLink } from '../NavLink';


//@ts-ignore
export function Header({ setIsOpen }) {
  return (
    <header id='/' className='w-[100%] bg-gray500'>
      <div className="bg-gray500 w-[100%] max-w-[1300px] m-auto px-[40px] pb-[40px] pt-[80px] flex justify-between items-center p-4">
        <Link
          to='/'
          spy={true} smooth={true} offset={0} duration={500}
        >
          <img src={logo} className='cursor-pointer w-auto xl:w-[30%] md:w-[50%]' />
        </Link>

        <button
          className="hidden xl:flex text-white rounded py-1"
          onClick={() => setIsOpen(true)}
        >
          <img src={buttonDrawer} className='xl:w-[100%] xl:justify-center' />
        </button>
        <nav className='xl:hidden flex gap-[32px]'>
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