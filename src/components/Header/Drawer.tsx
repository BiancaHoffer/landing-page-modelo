
import { Dispatch, ReactNode, SetStateAction } from 'react';
import buttonClose from '../../assets/buttonCloseDrawer.svg'

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function Drawer({ children, isOpen, setIsOpen }: DrawerProps) {
  return (
    <main
      className={
        " fixed overflow-hidden z-40 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-orange500 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative z-50 w-screen max-w-lg pb-10 flex flex-col justify-start space-y-6 h-full">
          <button
            className='w-[100%] flex justify-end p-[40px]'
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <img src={buttonClose} />
          </button>
          <div>
            {children}
          </div>

        </article>
      </section>

      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  )
}