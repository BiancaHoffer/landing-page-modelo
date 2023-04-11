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
      className='pl-[0.5rem] cursor-pointer uppercase font-sans leading-[50px] transition tracking-[0.7rem] text-white hover:text-gray800 text-[18px] [&.active]:border-b-2'
    >
      {title}
    </Link>
  )
}