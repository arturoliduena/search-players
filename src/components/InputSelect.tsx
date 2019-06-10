import React, { ChangeEvent } from 'react';

interface Props {
  label: string,
  name: string,
  options: string[],
  value: string,
  handleOnChange: (event: ChangeEvent<HTMLSelectElement>) => void,
}
const InputSelect: React.FC<Props> = props => {
  const { label, name, handleOnChange, options, value } = props;
  return (
    <div className='input'>
      <label className='input-label'> { label } </label>
      <div>
        <select className="select" name={name} aria-invalid="false" id="position-customized-native-simple" value={value} onChange={handleOnChange}>
          {
            options.map((option, index) => <option key={index} value={option}> { option } </option>)
          }
        </select>
        <svg className="select-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </div>
    </div>
  )
}

export default InputSelect;