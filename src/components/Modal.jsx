import { forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom"

const Modal = forwardRef(function Modal({children}, ref) {
    useImperativeHandle(ref, () => {
        return {
            // Define any methods you want to expose
        };
    });

    return createPortal(
    <dialog>
        {children}
    </dialog>, 
    document.getElementById('modal-root')
    );
});

export default Modal;