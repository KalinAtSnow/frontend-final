import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4"
      >
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">{title}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 justify-end hover:text-gray-800 text-3xl"
            >
              &times;
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;