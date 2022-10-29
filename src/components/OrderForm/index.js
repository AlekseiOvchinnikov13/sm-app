import {useForm} from "@formspree/react";
import './style.scss'
import {FormInputsArray} from "../../data/data";
import Input from "../Input";
import {useEffect, useState} from "react";
import ModalWindow from "../ModalWindow";
import {useHistory} from "react-router";

const OrderForm = () => {
  const [state, handleSubmit] = useForm("meqdlrdz");
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const btnGreatHandler = () => {
    history.push('/');
  }

  useEffect(() => {
    if (state.succeeded) {
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
          onClick={btnGreatHandler}
        >
          Отлично
        </button>
      </ModalWindow>
    </>
  )
}

export default OrderForm