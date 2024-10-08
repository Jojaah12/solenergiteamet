import { Fragment, ReactNode } from "react";
import Icon from "@mdi/react";
import { mdiWindowClose } from "@mdi/js";
import { Dialog, Transition } from "@headlessui/react";

interface ModalContainerProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const transitionClasses = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0 scale-95",
  enterTo: "opacity-100 scale-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100 scale-100",
  leaveTo: "opacity-0 scale-95",
};

export const ModalContainer = ({
  isOpen,
  closeModal,
  children,
}: ModalContainerProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
        <div className="min-h-screen px-4 text-center">
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child as={Fragment} {...transitionClasses}>
            <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded shadow-xl">
              <button
                className="absolute top-5 right-12 hover:text-neutral-950 text-neutral-500"
                onClick={closeModal}
              >
                <Icon path={mdiWindowClose} size={1} />
              </button>
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
