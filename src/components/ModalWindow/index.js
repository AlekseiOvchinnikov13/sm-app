import {useEffect, useRef} from 'react';
import './style.scss';
import {createPortal} from "react-dom";
import classNames from "classnames";

const modalRoot = document.getElementById('modal');

const ModalWindow = ({visible, onClose, children, title, className, withClose}) => {
  const classes = classNames('modal', className);
  const modalDialogRef = useRef(null);

  const onCloseHandler = () => {
    modalDialogRef.current && modalDialogRef?.current.classList?.add('modalDialogOut');
    setTimeout(() => onClose(), 500);
  };

  useEffect(() => {
    const escapeClose = (e) => {
      if (e.key === "Escape") {
        onCloseHandler();
      }
    }
    document.addEventListener("keydown", escapeClose);
    return () => {
      document.removeEventListener("keydown", escapeClose);
    };
  });

  if (!visible) return null;

  return createPortal(
    <div className={classes} onClick={onCloseHandler}>
      <div className={'modalDialog'} onClick={e => e.stopPropagation()} ref={modalDialogRef}>
        <div className={'modalHeader'}>
          <h4 className={'modalTitle'}>{title}</h4>
          {withClose && <button className={'button-modal-close'} onClick={onCloseHandler}>&#215;</button>}
        </div>
        <div className={'modalBody'}>
          {children}
        </div>
      </div>
    </div>
    , modalRoot
  );
};

export default ModalWindow;