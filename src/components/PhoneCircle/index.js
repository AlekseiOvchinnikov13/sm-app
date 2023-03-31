import './style.scss'
import {useState} from "react";
import ModalWindow from "../ModalWindow";
import CallLogo from './call.svg'
import {createPortal} from "react-dom";
import FormCall from "../Forms/FormCall";

const phoneRoot = document.getElementById('phone');
const PhoneCircle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalHandler = () => {
    setIsModalOpen(!isModalOpen)
  }

  return createPortal(
    <>
      <button
        className={'btn-call'}
        onClick={modalHandler}
      >
        <img src={CallLogo} alt="call" className={'btn-call_logo'}/>
        {window.innerWidth > 500 && <p className={'btn-call_text'}>Обратный звонок</p>}
      </button>
      {isModalOpen &&
        <ModalWindow
          visible={isModalOpen}
          onClose={modalHandler}
          withClose
          className={'modal-call'}
          title={'Мы вам перезвоним'}
        >
          <FormCall onSuccess={modalHandler}/>
        </ModalWindow>}
    </>
    , phoneRoot
  )
}

export default PhoneCircle