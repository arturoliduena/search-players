import React from 'react';

const TableRow: React.FC = props => {
  return (
    <div className='tableRow'>
      { props.children }
    </div>
  )
}

export default TableRow;