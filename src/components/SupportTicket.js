import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useLocation } from 'react-router-dom';
import { MenuItem, Menu } from '@mui/material';

import AccountContext from './AccountContext';


function SupportTicket() {
  const { accountList, handleDelete, handleAdd, supportTickets, handleSupportAdd } = React.useContext(AccountContext);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [ticketTitle, setTicketTitle] = useState('');
  const [ticketBody, setTicketBody] = useState('');

  const location = useLocation();
  const currentAccount = location.state.account;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateTicket = () => {
    handleSupportAdd({ title: ticketTitle, body: ticketBody }, currentAccount);
    setOpen(false);
  };


  return (
    <div className="Support">
      <Toolbar style={{ backgroundColor: '#6b6a67', display: 'flex', justifyContent: 'flex-end' }}>
      </Toolbar>
      <header className="Admin-header" style={{ alignSelf: 'flex-start' }}>
        <h1>Support Ticket Page</h1>
        <div className="button-container">
          <button className="button" onClick={handleClickOpen}>Create Ticket</button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create Ticket</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Title"
                type="text"
                fullWidth
                variant="standard"
                value={ticketTitle}
                onChange={e => setTicketTitle(e.target.value)}
              />
              <TextField
                margin="dense"
                id="body"
                label="Body"
                type="text"
                fullWidth
                variant="standard"
                value={ticketBody}
                onChange={e => setTicketBody(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleCreateTicket}>Create</Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className="tickets-container">
          {Object.keys(supportTickets).map(account => {
            if (account === currentAccount) {
              return (
                <div key={account}>
                  {supportTickets[account].map((ticket, index) => (
                    <div key={index} className="ticket">
                      <h3>{ticket.title}</h3>
                      <p>{ticket.body}</p>
                    </div>
                  ))}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </header>
    </div>
  );
}

export default SupportTicket;
