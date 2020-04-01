import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main
  },
  rootImage: {
    textAlign: "center"
  },
  card: {
    padding: 20,
    width: 800,
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  title: {
    margin: 0,
    marginBottom: 25,
    fontWeight: "bold",
    color: theme.palette.primary.main
  },
  img: { width: "80%", height: "auto", textAlign: "center" },
  form: { display: "flex", justifyContent: "center", flexDirection: "column" }
}));
