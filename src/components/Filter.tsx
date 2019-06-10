import React, { ChangeEvent } from 'react';
import InputSelect from './InputSelect';
import InputText from './InputText';
import Button from './Button';
import { IFilterDate } from '../constants/playerTypes'

const positionsOptions = [
  'none',
  'Attacking Midfield',
  'Central Midfield',
  'Centre-Back',
  'Centre-Forward',
  'Defensive Midfield',
  'Keeper',
  'Left Midfield',
  'Left Wing',
  'Left-Back',
  'Right-Back',
]

interface Props {
  applyFilter: (data: IFilterDate) => void,
}

type State = {
  name: string,
  position: string,
  age: number | undefined,
};

class Filter extends React.Component<Props, State> { 
  readonly state: State = {
    name: '',
    position: 'none',
    age: undefined
  };

  applyFilters = () => {
    const { name, position, age } = this.state;
    this.props.applyFilter({ name, position, age });
  }

  handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'age':
        const validationAge = (Number(value) >= 1 && Number(value) <= 40)
        if(validationAge){
          this.setState({ [name]: Number(value) })
        } else if(!value){
          this.setState({ [name]: undefined })
        }
      break;
    
      case 'name':
        const validationName = /^[a-z][a-z\s]*$/.test(value) || !value
        if(validationName)
          this.setState({ [name]: value })
      break;

      case 'position':
        this.setState({ [name]: value })
      break;
    }
  }

  render () {
    const { handleOnChange } = this;
    const { name, position, age } = this.state;

    return (
      <div className="filter">
        <div className='group-select'>
          <InputText type='text' label='Player Name' value={name} handleOnChange={handleOnChange} name='name'/>
          <InputSelect label='Position' name='position' handleOnChange={handleOnChange} options={positionsOptions} value={position}/>
          <InputText type='number' label='Age' value={age} handleOnChange={handleOnChange} name='age'/>
        </div>
        <div className='button-container'>
          <Button onClick={this.applyFilters}/>
        </div>
      </div>
    )
  }
}


export default Filter;