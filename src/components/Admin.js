import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { MenuItem, Menu } from '@mui/material';
import AccountContext from './AccountContext';  


function Admin() {
  const { accountList, handleDelete, handleAdd } = React.useContext(AccountContext);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItemClicked = (account) =>{
    handleDelete(account);
    handleClose();
  }

  const handleDialogOpen = () => {
    setOpen(true);
  };
  
  const handleDialogClose = () => {
    setOpen(false);
  };
  
  const handleAddUser = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    handleAdd(username);
    handleDialogClose();
  };

  return (
    <div className="Admin">
      <Toolbar style={{ backgroundColor: '#6b6a67', display: 'flex', justifyContent: 'flex-end' }}>
      </Toolbar>
      <header className="Admin-header" style={{ alignSelf: 'flex-start' }}>
        <h1>Admin Page</h1>
        <div className="button-container">
          <button className="button" onClick={handleDialogOpen}>Add User</button>
          <Dialog open={open} onClose={handleDialogClose}>
            <DialogTitle>Add User</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="username"
                label="Username"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose}>Cancel</Button>
              <Button onClick={handleAddUser}>Add</Button>
            </DialogActions>
          </Dialog>
          <button className="button" onClick={handleClick}>Delete User</button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {accountList?.map((account, index) => (
              <MenuItem key={index} onClick={() => menuItemClicked(account)}>
                {account}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </header>
    </div>
  );
}

export default Admin;
