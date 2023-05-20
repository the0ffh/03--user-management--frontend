import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { UserReturn } from '../../../../api';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';

interface Props {
  user: UserReturn;
  onDelete: (userId: number) => void;
}

export const UserTableRow: React.FunctionComponent<Props> = ({
  user: { address, birthdate, email, firstName, id, lastName },
  onDelete,
}) => (
  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
    <TableCell align="right">
      <IconButton onClick={() => onDelete(id)}>
        <DeleteForeverIcon />
      </IconButton>
    </TableCell>
    <TableCell component="th" scope="row">
      {id}
    </TableCell>
    <TableCell align="right">{firstName}</TableCell>
    <TableCell align="right">{lastName}</TableCell>
    <TableCell align="right">{email}</TableCell>
    <TableCell align="right">{address}</TableCell>
    <TableCell align="right">{birthdate}</TableCell>
  </TableRow>
);
