import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9 aspect ratio
    backgroundSize: "cover",
  },
  overlay: {
    position: "absolute",
    top: "10px",
    left: "10px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "white",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
    color: theme.palette.primary.main, // Uses the theme color
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default useStyles;


