import MUITextField from '@mui/material/TextField';

interface Props {
  id: string;
  label: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email';
  variant?: 'standard' | 'outlined' | 'filled';
  error?: boolean;
}
export const TextField: React.FunctionComponent<Props> = ({
  label,
  type = 'text',
  variant = 'standard',
  onChange,
  error,
}) => (
  <MUITextField
    error={error}
    autoFocus
    margin="dense"
    label={label}
    type={type}
    fullWidth
    variant={variant}
    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    }}
  />
);
