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
      spy={true} smooth={true} offset={-100} duration={800}
      className='pl-[0.5rem] cursor-pointer uppercase font-sans leading-[50px] transition-colors tracking-[0.7rem] font-[500] border-2 border-gray500 text-blue800 hover:border-b-2 hover:border-b-white xl:text-white xl:hover:text-gray800 text-[12px] xl:text-[18px] [&.active]:border-b-white [&.active]:border-b-2'
    >
      {title}
    </Link>
  )
}