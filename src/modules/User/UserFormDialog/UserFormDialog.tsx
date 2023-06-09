import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '../../core/TextField/TextField';
import api from '../UserPage/api';

interface Props {
  onSubmit: () => void;
}

export const FormDialog: React.FunctionComponent<Props> = ({ onSubmit }) => {
  const [open, setOpen] = React.useState(false);

  const [firstName, setFirstName] = React.useState<string | null>(null);
  const [lastName, setLastName] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState<string | null>(null);
  const [address, setAddress] = React.useState<string | null>(null);
  const [birthdate, setBirthdate] = React.useState<string | null>(null);

  const openDialog = () => setOpen(true);

  const closeDialog = () => setOpen(false);

  const handleSubmit = async () => {
    if (address && birthdate && email && firstName && lastName)
      await api
        .userControllerCreate({
          createUserDto: {
            address,
            birthdate,
            email,
            firstName,
            lastName,
          },
        })
        .then(() => {
          onSubmit();
        })
        .catch(console.error);
    else throw Error('some prop(s) missing');
    closeDialog();
  };

  return (
    <div>
      <Button variant="contained" onClick={openDialog}>
        Add user
      </Button>
      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle>New User</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter new user's data</DialogContentText>
          <TextField
            id="firstName"
            label="first name"
            onChange={setFirstName}
            error={!firstName}
          />
          <TextField
            id="lastName"
            label="last name"
            onChange={setLastName}
            error={!lastName}
          />
          <TextField
            id="email"
            label="email"
            type="email"
            onChange={setEmail}
            error={!email}
          />
          <TextField
            id="address"
            label="address"
            onChange={setAddress}
            error={!address}
          />
          <TextField
            id="birthdate"
            label="date of birth"
            type="text"
            onChange={setBirthdate}
            error={!birthdate}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Close</Button>
          <Button
            onClick={handleSubmit}
            disabled={!(address && birthdate && email && firstName && lastName)}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
