import React, { useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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

  const mobileMenuId = "howdy";
  // "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      // style={{ backgroundColor: "pink" }}
    >
      <MenuItem>
        <IconButton
          aria-label="Show Projects"
          color="secondary"
          href="#projects"
        >
          <Typography>1. Projects</Typography>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="Show About section"
          color="secondary"
          href="#about"
        >
          <Typography>2. About</Typography>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="Show Contact section"
          color="secondary"
          href="#contact"
        >
          <Typography>3. Contact</Typography>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <CSSTransition
        in={isMounted}
        timeout={1000}
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
                  timeout={1500}
                  mountOnEnter
                  classNames="fadedown"
                >
                  <span
                    style={{
                      display: "block",
                      transitionDelay: "500ms"
                    }}
                  >
                    <Button color="inherit" href="/">
                      <Typography>LC</Typography>
                    </Button>
                  </span>
                </CSSTransition>
              </div>

              <div className={classes.sectionDesktop}>
                <CSSTransition
                  in={isAlive}
                  timeout={1700}
                  mountOnEnter
                  classNames="fadedown"
                >
                  <span
                    style={{
                      transitionDelay: "700ms"
                    }}
                  >
                    <IconButton
                      aria-label="Show Projects section"
                      color="inherit"
                      href="#projects"
                    >
                      <Typography>1. Projects</Typography>
                    </IconButton>
                  </span>
                </CSSTransition>

                <CSSTransition
                  in={isAlive}
                  timeout={1800}
                  mountOnEnter
                  classNames="fadedown"
                >
                  <span
                    style={{
                      transitionDelay: "800ms"
                    }}
                  >
                    <IconButton
                      aria-label="Show About section"
                      color="inherit"
                      href="#about"
                    >
                      <Typography>2. About</Typography>
                    </IconButton>
                  </span>
                </CSSTransition>

                <CSSTransition
                  in={isAlive}
                  timeout={1900}
                  mountOnEnter
                  classNames="fadedown"
                >
                  <span
                    style={{
                      transitionDelay: "900ms"
                    }}
                  >
                    <IconButton
                      aria-label="Show Contact section"
                      edge="end"
                      color="inherit"
                      href="#contact"
                    >
                      <Typography>3. Contact</Typography>
                    </IconButton>
                  </span>
                </CSSTransition>
              </div>
              <div className={classes.sectionMobile}>
                <CSSTransition
                  in={isAlive}
                  timeout={1700}
                  mountOnEnter
                  classNames="fadedown"
                >
                  <span
                    style={{
                      transitionDelay: "700ms"
                    }}
                  >
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
    </React.Fragment>
  );
}

export default MenuAppBar;
