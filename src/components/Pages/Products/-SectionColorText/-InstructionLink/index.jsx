import React from "react";

import './scss/style.scss';
import iconDownload from './img/icon-download.svg';

const InstructionLink = ({text, href}) => (
  <a className='instruction-download-wrapper' href={href}>
    <img className='instruction-download-wrapper__img' src={iconDownload} alt="Скачать"/>
    <p className='instruction-download-wrapper__text'>{text}</p>
  </a>
)

export default InstructionLink;
