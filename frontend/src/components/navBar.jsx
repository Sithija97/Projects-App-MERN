import { Avatar, Container, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  container: {
    backgroundColor: "white",
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  space: {
    flexGrow: 1,
  },
  logo: {
    cursor: "pointer",
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

const Navbar = ({ history }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth={"xl"}>
        <AppBar position="static" className={classes.container} elevation={0}>
          <Toolbar>
            <Grid
              container
              spacing={3}
              justify={"space-between"}
              alignItems={"center"}
            >
              <Grid item>
                <Typography variant={"h6"}>Projects App</Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Typography>Sithija</Typography>
                  </Grid>
                  <Grid item>
                    <Avatar src="" className={classes.small} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
};

export default Navbar;
