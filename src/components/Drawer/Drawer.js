import { List, ListItem, ListItemIcon, ListItemText, Divider, Drawer } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  list: {
    width: 300,
  }
});

export default function MainDrawer(props) {

  const classes = useStyles();

  const list = () => {
    return (
      <div
        className={classes.list}
        role="presentation"
      >
        <List>
          <ListItem button key="Inbox">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="Another Item">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Another Item" />
          </ListItem>
        </List>
      </div>
    )
  };

  return (
    <Drawer anchor="left" open={props.open}>
      {list}
    </Drawer>
  )
}