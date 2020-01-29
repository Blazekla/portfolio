import React, { useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { CSSTransition } from "react-transition-group";

import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  title: {},
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  appBar: {
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "16px"
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbarContainer: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",

    "@media (min-width: 576px)": {
      maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px"
    },
    // minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap",
    backgroundColor: "transparent"
    // flex: "1"
  },
  button: {
    flex: 1
  }
}));

function MenuAppBar() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const [isAlive, setIsAlive] = useState(false);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <MailIcon />
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <NotificationsIcon />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} color="inherit">
        Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  let next = false;
  console.error(`initial next value: ${next}`);
  return (
    <React.Fragment>
      <CSSTransition
        in={isMounted}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames="fadedown"
        onEntered={() => setIsAlive(true)}
      >
        <div>
          <AppBar
            position="fixed"
            // className={classes.appBar}
          >
            <ToolBar className={classes.toolbarContainer}>
              <div>
                <CSSTransition
                  in={isAlive}
                  timeout={300}
                  mountOnEnter
                  classNames="fadedown"
                >
                  <span style={{ display: "block", transitionDelay: "500ms" }}>
                    <Button color="inherit">LC</Button>
                  </span>
                </CSSTransition>
              </div>

              <div className={classes.sectionDesktop}>
                <CSSTransition
                  in={isAlive}
                  timeout={300}
                  mountOnEnter
                  classNames="fadedown"
                >
                  <span style={{ display: "block", transitionDelay: "700ms" }}>
                    <IconButton aria-label="show new emails" color="inherit">
                      <MailIcon />
                    </IconButton>
                  </span>
                </CSSTransition>

                <CSSTransition
                  in={isAlive}
                  timeout={300}
                  mountOnEnter
                  classNames="fadedown"
                >
                  <span style={{ display: "block", transitionDelay: "800ms" }}>
                    <IconButton
                      aria-label="show new notifications"
                      color="inherit"
                    >
                      <NotificationsIcon />
                    </IconButton>
                  </span>
                </CSSTransition>

                <CSSTransition
                  in={isAlive}
                  timeout={300}
                  mountOnEnter
                  classNames="fadedown"
                >
                  <span style={{ display: "block", transitionDelay: "900ms" }}>
                    <IconButton
                      aria-label="show new emails"
                      edge="end"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </span>
                </CSSTransition>
              </div>
              <div className={classes.sectionMobile}>
                <CSSTransition
                  in={isAlive}
                  timeout={300}
                  mountOnEnter
                  classNames="fadedown"
                >
                  <span style={{ display: "block", transitionDelay: "700ms" }}>
                    <IconButton
                      aria-label="show more"
                      aria-controls={mobileMenuId}
                      aria-haspopup="true"
                      onClick={handleMobileMenuOpen}
                      color="inherit"
                    >
                      <MoreIcon />
                    </IconButton>
                  </span>
                </CSSTransition>
              </div>
            </ToolBar>
          </AppBar>
        </div>
      </CSSTransition>
      {renderMobileMenu}
      {renderMenu}
    </React.Fragment>
  );
}

export default MenuAppBar;
