import {useForm} from "@formspree/react";
import './style.scss'
import {FormInputsArray} from "../../data/data";
import Input from "../Input";
import {useEffect, useState} from "react";
import ModalWindow from "../ModalWindow";

const OrderForm = () => {
  const [state, handleSubmit] = useForm("meqdlrdz");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (state.succeeded) {
      setIsSuccess(true);
      onClickHandler();
    }
  }, [state.succeeded]);


  return (
    <>
      <form
        className='order-form'
        onSubmit={handleSubmit}
      >
        {FormInputsArray.map(inputData =>
          <Input
            key={inputData.id}
            data={inputData}
            isSuccess={isSuccess}
          />
        )}
        <button
          className='btn-submit purple-btn'
          type="submit"
          disabled={state.submitting}
        >
          отправить
        </button>
      </form>
      <ModalWindow
        onClose={onClickHandler}
        visible={isOpen}
        title={'Спасибо! Форма отправлена!'}
      >
        <button
          className={'modal-btn purple-btn'}
          onClick={onClickHandler}
        >
          Отлично
        </button>
      </ModalWindow>
    </>
  )
}

export default OrderForm