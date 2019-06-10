import React from 'react';

const TableBody: React.FC = props => {
  return (
    <div className='tableBody'>
      { props.children }
    </div>
  )
}

export default TableBody;