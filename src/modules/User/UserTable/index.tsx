import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import { ReadUserDto } from '../../../../api';
import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';

interface Props {
  users: ReadUserDto[];
  onDeleteClick: (userId: number) => void;
}

export const UserTable: React.FunctionComponent<Props> = ({
  users,
  onDeleteClick,
}) => {
  const columns: GridColDef[] = [
    {
      field: '',
      headerName: 'delete',
      width: 100,
      // ref: https://stackoverflow.com/a/67380953/9180019
      renderCell: (params: GridRenderCellParams) => (
        <IconButton
          color="primary"
          size="small"
          onClick={() => {
            onDeleteClick(params.row.id);
          }}
        >
          <DeleteForeverIcon />
        </IconButton>
      ),
    },
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'email', headerName: 'E-mail', width: 130 },
    { field: 'birthdate', headerName: 'Birth date', width: 130 },
  ];

  return (
    <DataGrid
      rows={users}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 100 },
        },
      }}
    />
  );
};
