'use client';

import React, { FC } from 'react';
import { Input, InputProps } from 'antd';
import { TextAreaProps } from 'antd/es/input';

// Main CustomInput component
const CustomInput: FC<InputProps> & { TextArea: FC<TextAreaProps>; Password: typeof Input.Password } = ({ ...rest }) => {
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // กรองอักขระ เช่น <, >, ", ', ;, %
  //   const sanitizedValue = e.target.value.replace(/%/g, ''); 
  //   onChange?.({ ...e, target: { ...e.target, value: sanitizedValue } });
  // };

  // return <Input value={value} onChange={handleInputChange} {...rest} />;
  return <Input {...rest} />;
};

// CustomInput.TextArea sub-component
const CustomTextArea: FC<TextAreaProps> = ({ ...rest }) => {
  // const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   // กรองอักขระ เช่น <, >, ", ', ;,%
  //   const sanitizedValue = e.target.value.replace(/%/g, ''); 
  //   onChange?.({ ...e, target: { ...e.target, value: sanitizedValue } });
  // };

  return <Input.TextArea {...rest} />;
  // return <Input.TextArea value={value} onChange={handleTextAreaChange} {...rest} />;
};

// Assign CustomTextArea as a sub-component of CustomInput
CustomInput.TextArea = CustomTextArea;
CustomInput.Password = Input.Password;

export default CustomInput;
