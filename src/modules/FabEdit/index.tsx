import { FloatingActionButton } from '../FloatingActionButton';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';

interface Props {
  onClick: () => void;
}
export const FabEdit: React.FunctionComponent<Props> = ({ onClick }) => (
  <FloatingActionButton color={'primary'} label="edit" onClick={onClick}>
    <EditIcon />
  </FloatingActionButton>
);
