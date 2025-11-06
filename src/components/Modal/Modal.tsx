import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react"

type ModalProps = {
    isOpen: boolean,
    onClose: () => void
}

const Modal = ({isOpen, onClose} : ModalProps) => {

  return (
    <>
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <DialogPanel className="min-w-full min-h-full space-y-4 border border-gray-500 bg-white p-12 rounded-2xl">   
            <DialogTitle className="font-bold">Deactivate account</DialogTitle>
            <Description>This will permanently deactivate your account</Description>
            <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
            <div className="flex gap-4">
              <button onClick={onClose}>Cancel</button>
              <button onClick={onClose}>Deactivate</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default Modal;