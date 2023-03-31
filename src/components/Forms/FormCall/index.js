import './style.scss'
import {sendMessageToTelegram} from "../../../api/api";
import {useFormField} from "../../../hooks/useFormField";

const FormCall = ({onSuccess}) => {
  const nameField = useFormField()
  const phoneField = useFormField()

  const sendMsg = () => {
    const {value: nameValue} = nameField;
    const {value: phoneValue} = phoneField;
    if (nameValue.length <= 0 || phoneValue.length <= 0) return null

    const text = `<u><b>#ЗаказанЗвонок</b></u> \n<b>Имя</b>: ${nameValue} \n<b>Телефон</b>: ${phoneValue}`
    sendMessageToTelegram(text)
      .then(() => onSuccess());
  }

  return (
    <div className={'form-call-wrapper'}>
      <div className={'order-input'} id={`wrapper-name`}>
        <label htmlFor={'name'} className='order-input__label'>
          Имя
          <span className={'required-star'}>*</span>
        </label>
        <input
          id={'name'}
          type={'text'}
          name={'name'}
          required
          className='order-input__input'
          {...nameField}
        />
      </div>
      <div className={'order-input'} id={`wrapper-phone`}>
        <label htmlFor={'name'} className='order-input__label'>
          Номер телефона
          <span className={'required-star'}>*</span>
        </label>
        <input
          id={'phone'}
          type={'tel'}
          min={11}
          max={12}
          name={'phone'}
          required
          className='order-input__input'
          {...phoneField}
        />
      </div>
      <button className={'purple-btn form-call-wrapper__btn'} onClick={sendMsg}>Отправить</button>
    </div>
  )
}

export default FormCall