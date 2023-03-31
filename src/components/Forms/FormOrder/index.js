import {useForm} from '@formspree/react';
import Input from "../../Input";
import {FormOrderInputsArray} from "../../../data/data";
import {useEffect, useState} from "react";
import './style.scss';
import {Checkbox} from "antd";

const FormOrder = () => {
  const [state, handleSubmit] = useForm("xyyankdp");
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (state.succeeded) {
      onClickHandler();
    }
  }, [state.succeeded]);

  const [isChecked, setIsChecked] = useState(false)

  return (
    <form onSubmit={handleSubmit} id='form-order'>
      <div className={'form-fields'}>
        {FormOrderInputsArray.map(inputElementData =>
          <Input
            key={inputElementData.id}
            data={inputElementData}
          />
        )}
        <Checkbox
          className={`checkbox ${isChecked ? 'checkbox-checked' : ''}`}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        >
          Нажимая кнопку “Отправить”, я даю свое согласие на обработку моих персональных данных, в соответствии с
          Федеральным законом от 27.07.2006 года №152-ФЗ “О персональных данных” на условиях и для целей, определенных в
          Согласии на обработку данных
        </Checkbox>
      </div>
      <button
        type="submit"
        disabled={state.submitting || !isChecked}
        className='btn-submit purple-btn form-order-btn'
      >
        Отправить
      </button>
    </form>
  );
}

export default FormOrder