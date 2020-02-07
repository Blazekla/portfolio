import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WorkIcon from "@material-ui/icons/Work";
import EmailIcon from "@material-ui/icons/Email";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  root: {
    justifyContent: "center"
  },
  text: {
    flex: "1 1 50%",
    textAlign: "left"
  },
  listItem: {
    justifyContent: "center",
    marginBottom: "50px"
  },
  icon: {
    flex: "1 1 50%",
    minWidth: "30px",
    justifyContent: "center"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      // onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem
          classes={{ root: classes.listItem }}
          button
          component="a"
          href="#projects"
        >
          <ListItemIcon classes={{ root: classes.icon }}>
            <WorkIcon color="secondary" />
          </ListItemIcon>
          <ListItemText classes={{ root: classes.text }} secondary="Projects" />
        </ListItem>
        <ListItem
          classes={{ root: classes.listItem }}
          button
          component="a"
          href="#about"
          color="secondary"
        >
          <ListItemIcon classes={{ root: classes.icon }}>
            <AccountBoxIcon color="secondary" />
          </ListItemIcon>
          <ListItemText classes={{ root: classes.text }} secondary="About" />
        </ListItem>
        <ListItem
          button
          component="a"
          href="#contact"
          classes={{ root: classes.listItem }}
          // style={{ justifyContent: "center" }}
        >
          <ListItemIcon classes={{ root: classes.icon }}>
            <EmailIcon color="secondary" />
          </ListItemIcon>
          <ListItemText classes={{ root: classes.text }} secondary="Contact" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)} color="inherit">
        <MoreIcon />
      </Button>

      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        // className={classes.root}
        classes={{ paper: classes.root }}
      >
        {console.log(classes.root)}
        {sideList("right")}
      </Drawer>
    </div>
  );
}
