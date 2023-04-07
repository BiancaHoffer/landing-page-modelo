import { useState } from 'react';

import logo from '../assets/logo.svg';
import { NavLink } from './NavLink';

import buttonDrawer from '../assets/buttonDrawer.svg';
import buttonCloseDrawer from '../assets/buttonCloseDrawer.svg';

export function Header({ }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      {openDrawer === true ? (
        <div className=''>
          <div className=''>
            <button onClick={() => setOpenDrawer(!openDrawer)}>
              <img src={buttonCloseDrawer} className='' />
            </button>
          </div>

          <div className=''>
            <nav className=''>
              <NavLink href='#' title='Sobre' />
              <NavLink href='#' title='Produtos' />
              <NavLink href='#' title='Serviços' />
              <NavLink href='#' title='Equipe' />
              <NavLink href='#' title='Contato' />
            </nav>
          </div>
        </div>
      ) : (
        <></>
      )}

      <header>
        <div className='bg-gray500'>
          <div className='w-[100%] max-w-[1256px] m-auto flex gap-[80px] justify-between items-center flex-row px-[20px] py-[80px] xl:gap-[40px]'>


            <img src={logo} className='w-[100%] xl:w-[50%]' />



            <button onClick={() => setOpenDrawer(!openDrawer)} className='hidden 900:flex '>
              <img src={buttonDrawer} className='xl:w-[100%] xl:justify-center' />
            </button>

            <nav className='flex gap-[28px] 900:hidden xl:w-[100%] xl:justify-center'>
              <NavLink href='#' title='Sobre' />
              <NavLink href='#' title='Produtos' />
              <NavLink href='#' title='Serviços' />
              <NavLink href='#' title='Equipe' />
              <NavLink href='#' title='Contato' />
            </nav>
          </div>
        </div>
      </header >
    </>
  )
}