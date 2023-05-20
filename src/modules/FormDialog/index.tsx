import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '../TextField';
import api from '../UserPage/api';

export const FormDialog: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);

  const [firstName, setFirstName] = React.useState<string | null>(null);
  const [lastName, setLastName] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState<string | null>(null);
  const [address, setAddress] = React.useState<string | null>(null);
  const [birthdate, setBirthdate] = React.useState<string | null>(null);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleChange = (func: (value: string) => void) => func;

  const handleSubmit = async () => {
    if (address && birthdate && email && firstName && lastName)
      await api.userControllerCreate({
        createUserDto: {
          address,
          birthdate,
          email,
          firstName,
          lastName,
        },
      });
    else throw Error('some prop(s) missing');
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add user
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New User</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter new user's data</DialogContentText>
          <TextField
            id="firstName"
            label="first name"
            onChange={handleChange(setFirstName)}
            error={!firstName}
          />
          <TextField
            id="lastName"
            label="last name"
            onChange={handleChange(setLastName)}
            error={!lastName}
          />
          <TextField
            id="email"
            label="email"
            type="email"
            onChange={handleChange(setEmail)}
            error={!email}
          />
          <TextField
            id="address"
            label="address"
            onChange={handleChange(setAddress)}
            error={!address}
          />
          <TextField
            id="birthdate"
            label="date of birth"
            type="text"
            onChange={handleChange(setBirthdate)}
            error={!birthdate}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
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
