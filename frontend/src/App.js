import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectsPage from "./pages/projectsPage";
import Navbar from "./components/navBar";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F4F7FC",
    minHeight: "100vh",
  },
});

const App = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Navbar />
      <ProjectsPage />
    </div>
  );
};

export default App;
