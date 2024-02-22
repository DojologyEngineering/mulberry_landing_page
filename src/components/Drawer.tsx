'use client';

import { Dispatch, Fragment, ReactNode, SetStateAction, useState } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { IoMdClose } from 'react-icons/io';

export default function Drawer({
  isOpen,
  setIsOpen,
  children,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}) {
  //   let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <Transition.Child
              as={Fragment}
              enter='transition ease duration-500 transform'
              enterFrom='opacity-0 translate-x-12'
              enterTo='opacity-100 translate-x-0'
              leave='transition ease duration-300 transform'
              leaveFrom='opacity-100 translate-x-0'
              leaveTo='opacity-0 translate-x-12'
              // enter='ease-out duration-300'
              // enterFrom='opacity-0 scale-95'
              // enterTo='opacity-100 scale-100'
              // leave='ease-in duration-200'
              // leaveFrom='opacity-100 scale-100'
              // leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full h-full p-6 transition-all transform bg-white shadow-xl'>
                <Dialog.Title className='flex justify-end mt-4 mb-2 mr-2'>
                  <button onClick={closeModal}>
                    <IoMdClose size={30} />
                  </button>
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
