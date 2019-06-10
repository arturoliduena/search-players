import React from 'react';


const TableHead: React.FC = props => {
  return (
    <div className='tableHead'>
      { props.children }
    </div>
  )
}

export default TableHead;