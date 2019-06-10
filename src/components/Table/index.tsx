import React from 'react';
import TableCell from './TableCell';
import TableHead from './TableHead';
import TableRow from './TableRow';
import TableBody from './TableBody';
import { Iplayer } from '../../constants/playerTypes'

interface Props {
  data: Iplayer[],
}

const Table: React.FC<Props> = props => {
  const { data } = props;
  function createData(name: string, position: string, team: string, age?: number) {
    return { name, position, team, age };
  }
  const players = data.map(player => createData(player.name, player.position, player.nationality, player.age))
  return (
    <div className='table'>
      <TableHead>
          <TableRow>
            <TableCell> Name </TableCell>
            <TableCell align="right"> Position </TableCell>
            <TableCell align="right"> Team </TableCell>
            <TableCell align="right"> Age </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row"> {row.name} </TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">{row.team}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
    </div>
  )
}

export default Table;