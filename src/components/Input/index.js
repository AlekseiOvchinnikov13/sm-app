import './style.scss'
import classNames from "classnames";
import {useEffect, useState} from "react";

const Input = ({id, className, type, label, placeholder, isRequired, size, options, isSuccess}) => {
  const classes = classNames('order-input', className, size === 's' ? 'small-input' : size === 'm' ? 'medium-input' : 'long-input')
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue('');
  }, [isSuccess])

  return (
    <div className={classes} id={`wrapper-${id}`}>
      <label
        htmlFor={id}
        className='order-input__label'
      >
        {label}
      </label>
      {type === 'select'
        ? <select
          id={id}
          name={id}
          value={value}
          onChange={e => setValue(e.target.value)}
          className='order-input__input order-input__select'
        >
          {options.length > 0 &&
            options.map(option =>
              <option key={option} value={option}>
                {option}
              </option>
            )
          }
        </select>
        : <input
          id={id}
          type={type || 'text'}
          name={id}
          placeholder={placeholder}
          required={isRequired}
          value={value}
          onChange={e => setValue(e.target.value)}
          className='order-input__input'
        />
      }
    </div>
  )
}

export default Input
