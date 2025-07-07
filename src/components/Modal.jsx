import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 bg-black/30 flex justify-center items-center'>
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl relative p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
