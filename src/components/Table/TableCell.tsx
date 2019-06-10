import React from 'react';

type Props = {
  align?: string;
  component?: string; 
  scope?: string;
};

const TableCell: React.FC<Props> = props => {
  return (
    <div className='tableCell'>
      { props.children }
    </div>
  )
}

export default TableCell;