import { List, ListItem, ListItemIcon, ListItemText, Divider, Drawer } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  list: {
    width: 300,
  }
});

export default function MainDrawer(props) {

  const classes = useStyles();

  return (
    <Drawer anchor="left" open={ props.open } onClose={ props.onClose }>
      <div
        className={classes.list}
        role="presentation"
        onClick= { props.onClose }
      >
        <List>
          <ListItem button key="Dummy Button">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dummy Button" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="Open Dialog">
            <ListItemIcon>
              <OpenInNewIcon />
            </ListItemIcon>
            <ListItemText primary="Open Dialog" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}