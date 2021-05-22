interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode
  onCloseModal: () => void;
}

const Modal = ({ isOpen, children, onCloseModal}: ModalProps) => {
  return isOpen ?(
    <div className="modal fixed left-0 w-full h-full outline-none fade">
  <div className="modal-dialog relative w-auto pointer-events-none max-w-lg my-8 mx-auto px-4 sm:px-0" role="document">
    <div className="relative flex flex-col w-full pointer-events-auto bg-gray-900 rounded-lg">
      <div className="relative flex p-4">
        {children}
      </div>
      <div className="flex items-center justify-end p-4">
        <button onClick={onCloseModal} type="button" className=" font-normal text-center px-3 py-2 leading-normal text-base rounded cursor-pointer text-white bg-gray-600 mr-2" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  ) : null;
}

export default Modal;
