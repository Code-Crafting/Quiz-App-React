import { createPortal } from "react-dom";

const Modal = ({ dataNum, setDataNum, setTime, children }) => {
  return createPortal(
    <div className="fixed inset-0 w-screen h-screen bg-overlay-bg flex justify-center items-center">
      {children}
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;
