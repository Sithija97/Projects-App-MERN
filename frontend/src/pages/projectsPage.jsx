import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getProjects, postProject } from "../services/api";
import { SearchOutlined } from "@material-ui/icons";
import Cards from "../components/cards";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "40px",
    // [theme.breakpoints.up("md")]: {
    //   maxWidth: "1600px",
    // },
  },
  titile: { marginBottom: "5px" },
  subtitle: { color: "#717476" },
  textField: {
    backgroundColor: "#fff",
    outline: 0,
  },
  selectField: {
    backgroundColor: "#fff",
    outline: 0,
  },
  notchedOutline: {
    borderWidth: "0px",
    borderColor: "rgba(255, 255, 255, 0.0) !important",
    color: "rgb(143,146,149)",
    minWidth: "200px",
  },
  button: {
    height: "100%",
    backgroundColor: "#108AF9",
    color: "#fff",
    textTransform: "inherit",
    padding: "5px 20px",
    "&:hover": {
      backgroundColor: "#106ec4",
    },
  },
  dialogInput: {
    marginBottom: "10px",
  },
}));

const ProjectsPage = (props) => {
  const classes = useStyles(props);
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState((old) => ({ ...old, [name]: value }));
  };

  const handleSubmit = () => {
    postProject(state).then(() => {
      setState({});
      setOpen(false);
    });
  };

  const getData = async () => {
    let { data: projects } = await getProjects();
    setProjects(projects);
  };
  useEffect(() => {
    getData();
  }, [projects]);

  return (
    <Container className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant={"h5"} className={classes.title}>
            Project List and Create
          </Typography>
          <Typography variant={"body2"} className={classes.subtitle}>
            You can create, edit and delete the project here
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            justify={"space-between"}
            alignItems={"center"}
          >
            <Grid item>
              <TextField
                placeholder="Search Project"
                className={classes.textField}
                variant={"outlined"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlined />
                    </InputAdornment>
                  ),
                  classes: {
                    root: classes.notchedOutline,
                    focused: classes.notchedOutline,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </Grid>

            <Grid item>
              <Grid container spacing={3}>
                <Grid item>
                  <TextField
                    select
                    size="small"
                    className={classes.selectField}
                    value={0}
                    variant="outlined"
                    InputProps={{
                      classes: {
                        root: classes.notchedOutline,
                        focused: classes.notchedOutline,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  >
                    <MenuItem value={0}>Sort A-Z Descending</MenuItem>
                    <MenuItem value={1}>Sort A-Z Ascending</MenuItem>
                  </TextField>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.button}
                    onClick={() => setOpen(true)}
                  >
                    Create Project
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3}>
            {projects.map((item, i) => (
              <Grid item xs={12} sm={6} md={3} lg={2} key={i}>
                <Cards
                  image={item.image}
                  title={item.title}
                  caption={item.caption}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Project</DialogTitle>
        <DialogContent>
          <TextField
            name="image"
            fullWidth
            label="Image Link"
            variant="outlined"
            value={state.image}
            onChange={handleChange}
            className={classes.dialogInput}
          />
          <TextField
            name="title"
            fullWidth
            label="Project Title"
            variant="outlined"
            value={state.projectName}
            onChange={handleChange}
            className={classes.dialogInput}
          />
          <TextField
            name="caption"
            fullWidth
            label="Caption"
            variant="outlined"
            value={state.tags}
            onChange={handleChange}
            className={classes.dialogInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ProjectsPage;
