import {useRef} from 'react';
import './style.scss';

const ModalWindow = ({visible, onClose, children, title}) => {
  const modalDialogRef = useRef(null);

  const onCloseHandler = () => {
    modalDialogRef && modalDialogRef.current.classList.add('modalDialogOut');
    setTimeout(() => onClose(), 500);
  };

  if (!visible) return null;

  return (
    <div className={'modal'} onClick={onCloseHandler}>
      <div className={'modalDialog'} onClick={e => e.stopPropagation()} ref={modalDialogRef}>
        <div className={'modalHeader'}>
          <h4 className={'modalTitle'}>{title}</h4>
        </div>
        <div className={'modalBody'}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;