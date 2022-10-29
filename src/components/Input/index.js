import './style.scss'
import classNames from "classnames";
import {useState} from "react";
import {Select} from "antd";

const Input = ({data: {id, className, type, label, placeholder, isRequired, size, options, min}}) => {
  const classes = classNames('order-input', className, size === 's' ? 'small-input' : size === 'm' ? 'medium-input' : 'long-input')
  const [value, setValue] = useState('');
  const {Option} = Select;

  return (
    <div className={classes} id={`wrapper-${id}`}>
      <label
        htmlFor={id}
        className='order-input__label'
      >
        {label}
      </label>
      {type === 'select'
        ? <>
          <Select
            value={value}
            onChange={value => setValue(value)}
            className='order-input__input order-input__select'
            bordered={false}
            allowClear
          >
            {options.length > 0 &&
              options.map(option =>
                <Option key={option} value={option}>
                  {option}
                </Option>
              )
            }
          </Select>
          <input
            id={id}
            name={id}
            type='hidden'
            value={value}
          />
        </>
        : <input
          id={id}
          type={type || 'text'}
          min={min}
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
