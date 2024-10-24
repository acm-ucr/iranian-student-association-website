type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-95 backdrop-blur-3xl">
      <div className="max-w-sm rounded-lg bg-isa-beige-100 p-6 shadow-lg">
        {children}
        <button
          onClick={onClose}
          className="mt-4 rounded bg-isa-light-red px-4 py-2 text-isa-bright-yellow"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
