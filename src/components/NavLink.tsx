interface NavLinkProps {
  href: string;
  title: string;
}

export function NavLink({ href, title, ...rest }: NavLinkProps) {
  return (
    <a href={href} className='uppercase font-sans text-gray800 leading-[18.2px] hover:text-orange500 transition tracking-[0.7rem] text-[14px] xl:text-[12px] md:text-white md:hover:text-gray800 md:text-[18px]' {...rest}>
      {title}
    </a>
  )
}