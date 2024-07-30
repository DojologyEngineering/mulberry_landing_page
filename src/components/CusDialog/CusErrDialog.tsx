import React, {
  Fragment,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { Dialog, Transition } from '@headlessui/react';

export interface IErrDialogRef {
  open: (message: string | Error) => void;
  close: () => void;
}

interface IErrDialog {
  title?: string;
  buttonText?: string;
}

const CusErrDialog = forwardRef<IErrDialogRef, IErrDialog>(
  ({ title = 'Something Wrong', buttonText = 'Close' }, ref) => {
    const messageRef = useRef('');
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);

    useImperativeHandle(
      ref,
      () => ({
        open: (message) => {
          messageRef.current =
            typeof message === 'string' ? message : message.message;
          setOpen(true);
        },
        close: onClose,
      }),
      [],
    );

    return (
      <Transition show={open} as={Fragment}>
        <Dialog onClose={onClose} className='relative z-50'>
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
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title className='text-lg font-medium leading-6 text-gray-900'>
                    {title}
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      {messageRef.current}
                    </p>
                  </div>

                  <div className='mt-4 flex justify-end'>
                    <button
                      type='button'
                      className='rounded-md inline-flex justify-center px-4 py-2 text-sm font-medium text-primary-lighter bg-primary hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50'
                      onClick={onClose}
                    >
                      {buttonText}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  },
);

CusErrDialog.displayName = 'CusErrDialog';

export default CusErrDialog;
