import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import close from '../assets/close.svg'
import { Button } from '../components/Button';

export function Modal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <Button
          name='Abrir modal'
          onClick={() => setIsOpen(true)}
        />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[100%] max-w-[730px] h-[515px] transform overflow-hidden rounded-2xl bg-gray600 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="w-[100%] flex justify-end">
                    <button
                      type="button"
                      className="w-[50px] h-[50px] bg-gray150 flex justify-center items-center rounded-[50%]"
                      onClick={closeModal}
                    >
                      <img src={close} />
                    </button>
                  </div>

                  <Dialog.Title></Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

    </>
  )
}

/*

  <Fragment>
        <Button onClick={handleOpen} variant="gradient" className="bg-orange500">
          Open modal
        </Button>
        <Dialog
          open={open}
          handler={handleOpen}
          className="m-auto w-[730px] h-[515px] bg-gray600 rounded-[40px] shadow-2xl"
        >
          <div className="w-[100%] flex justify-end items-end">
            <Button
              variant="text"
              onClick={handleOpen}
              className="mt-[-30px] mr-[-30px] bg-gray150 rounded-[50%] w-[50px] h-[50px] flex justify-center items-center self-center"
            >
              <img src={close} />
            </Button>
          </div>
          <div className="flex justify-center items-center flex-col">
            <DialogHeader>Header</DialogHeader>
            <DialogBody divider>Body</DialogBody>
            <DialogFooter>Footer</DialogFooter>
          </div>
        </Dialog>
      </Fragment>


*/