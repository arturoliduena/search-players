import React, { ChangeEvent } from 'react';

interface Props {
  type: string,
  label: string,
  value: string | number | undefined,
  name: string,
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

const InputText: React.FC<Props> = props => {
  const { type, label, value, name, handleOnChange } = props;
  return (
    <div className='input'>
      <label className='input-label'> { label } </label>
      <input aria-invalid='false' className='input-text' id='input-text' name={name} type={type} value={value} onChange={handleOnChange}/>
    </div>
  )
}

export default InputText;