import * as React from 'react';
import Fab from '@mui/material/Fab';

interface Props {
  children: React.ReactNode;
  color: 'secondary' | 'primary';
  size?: 'small' | 'medium';
  label?: string;
  onClick: () => void;
}
export const FloatingActionButton: React.FunctionComponent<Props> = ({
  children,
  size,
  color,
  label,
  onClick,
}) => {
  return (
    <Fab size={size} color={color} aria-label={label} onClick={onClick}>
      {children}
    </Fab>
  );
};
