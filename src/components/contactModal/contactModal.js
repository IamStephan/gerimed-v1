import React, { Component } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@material-ui/core';

export default class ContactModal extends Component {
  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.onClose}>
        <DialogTitle>Send us a message</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can send us a message directly by simply filling in the below fields.
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full name"
            type='text'
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type='email'
            fullWidth
          />
          <TextField
            margin="dense"
            id="message"
            label="Message"
            type='text'
            multiline
            rows='5'
            fullWidth
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.props.onClose} color="primary" variant='contained'>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
