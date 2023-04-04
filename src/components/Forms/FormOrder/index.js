import {useForm} from '@formspree/react';
import Input from "../../Input";
import {FormOrderInputsArray} from "../../../data/data";
import {useCallback, useEffect, useState} from "react";
import './style.scss';
import {Checkbox} from "antd";
import {sendMessageToTelegram} from "../../../api/api";

const FormOrder = ({onClose, successHandler}) => {
  const [state, handleSubmit] = useForm("xyyankdp");
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    position: ''
  });

  const handleInputChange = useCallback((e) => {
    const {name, value, type, checked} = e.target;
    const valueInput = type === 'tel' ? value.replaceAll(/[^\d+]/g, '') : value

    setFormValues(prevValues => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : valueInput,
    }));
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      successHandler()
      onClose();
    }
  }, [state.succeeded]);

  const submitHandler = e => {
    e.preventDefault()
    const text = `<u><b>#Заявка</b></u> \n<b>Имя</b>: ${formValues.name} \n<b>Телефон</b>: ${formValues.phone}\n<b>Email</b>: ${formValues.email}\n<b>Организация</b>: ${formValues.company}\n<b>Должность</b>: ${formValues.position}`
    handleSubmit(e)
      .then(() =>
        sendMessageToTelegram(text))
  }

  const [isChecked, setIsChecked] = useState(false)

  return (
    <form onSubmit={submitHandler} id='form-order'>
      <div className={'form-fields'}>
        {FormOrderInputsArray.map(inputElementData =>
          <Input
            key={inputElementData.id}
            data={inputElementData}
            value={formValues[inputElementData.id]}
            onChange={handleInputChange}
          />
        )}
        <Checkbox
          className={`checkbox ${isChecked ? 'checkbox-checked' : ''}`}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          id={'checkbox'}
          name={'checkbox'}
        >
          Нажимая кнопку “Отправить”, я даю свое согласие на обработку моих персональных данных, в соответствии с
          Федеральным законом от 27.07.2006 года №152-ФЗ “О персональных данных” на условиях и для целей, определенных
          в
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