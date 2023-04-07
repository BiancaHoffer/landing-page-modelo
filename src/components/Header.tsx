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
        <div className='px-[40px] py-[40px] bg-orange500 flex flex-col fixed w-[100%] h-[100vh] z-50'>
          <div className='w-[100%] flex justify-end'>
            <button onClick={() => setOpenDrawer(!openDrawer)}>
              <img src={buttonCloseDrawer} className='' />
            </button>
          </div>

          <div className=''>
            <nav className='h-[80vh] flex justify-center items-center flex-col w-[100%] gap-[60px]'>
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
          <div className='w-[100%] max-w-[1256px] m-auto flex gap-[40px] justify-between items-center flex-row px-[20px] py-[40px] xl:gap-[40px]'>

            <img src={logo} className='w-[80%] xl:w-[30%] md:w-[50%]' />

            <button onClick={() => setOpenDrawer(!openDrawer)} className='hidden xl:flex '>
              <img src={buttonDrawer} className='xl:w-[100%] xl:justify-center' />
            </button>

            <nav className='flex gap-[28px] xl:hidden xl:w-[100%] xl:justify-center'>
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