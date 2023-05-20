import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { ReadUserDto } from '../../../api';
import React from 'react';

interface Props {
  users: ReadUserDto[];
}
const columns: GridColDef[] = [
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
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },
];

export const UserTable: React.FunctionComponent<Props> = ({ users }) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};
