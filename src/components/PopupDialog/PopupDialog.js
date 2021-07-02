import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

export default function PopupDialog(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">A custom PopupDialog</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            A placeholder dialog popup
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.onClose} color="secondary" variant="contained" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}