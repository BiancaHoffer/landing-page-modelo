import { Link } from 'react-scroll';

interface NavLinkProps {
  href: string;
  title: string;
  onClick?: () => void;
}

export function NavLink({ href, title, onClick, ...rest }: NavLinkProps) {
  return (
    <Link
      {...rest}
      to={href}
      onClick={onClick}
      spy={true} smooth={true} offset={0} duration={800}
      className='pl-[0.3rem] cursor-pointer uppercase font-sans text-gray800 leading-[18.2px] hover:text-orange500 transition tracking-[0.7rem] text-[12px] xl:text-white xl:hover:text-gray800 xl:text-[18px] lg:hover:text-blue750 [&.active]:border-b-2'
    >
      {title}
    </Link>
  )
}