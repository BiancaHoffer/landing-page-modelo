import logo from '../../assets/logo.svg';
import buttonDrawer from '../../assets/buttonDrawer.svg';
import { Link } from 'react-scroll';
import { NavLink } from '../NavLink';


//@ts-ignore
export function Header({ setIsOpen, scrollActive }) {
  return (
    <header id='/' className={`transition-colors ${scrollActive === true ? 'bg-gray500 shadow-lg' : 'bg-none'} fixed z-10 w-[100%]`}>
      <div className={` bg-none w-[100%] max-w-[1300px] m-auto px-[40px] pb-[20px] pt-[50px] flex justify-between gap-[20px] items-center p-4`}>
        <Link
          to='/'
          spy={true} smooth={true} offset={0} duration={500}
        >
          <img src={logo} className='cursor-pointer w-auto' />
        </Link>

        <button
          className="hidden lg:flex text-white rounded py-1"
          onClick={() => setIsOpen(true)}
        >
          <img src={buttonDrawer} className='xl:w-[100%] xl:justify-center' />
        </button>
      </div>
    </header>
  )
}