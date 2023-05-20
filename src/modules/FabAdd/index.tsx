import { FloatingActionButton } from '../FloatingActionButton';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

interface Props {
  onClick: () => void;
}
export const FabAdd: React.FunctionComponent<Props> = ({ onClick }) => (
  <FloatingActionButton color={'secondary'} label="add" onClick={onClick}>
    <AddIcon />
  </FloatingActionButton>
);
