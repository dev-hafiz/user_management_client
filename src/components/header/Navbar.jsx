import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  navbar: {
    background: "#545454",
    color: "#F3A740",
    textAlign: "center",
    padding: "4px 0",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.navbar}>
        <Typography variant="h5" gutterBottom>
          Management System
        </Typography>
      </div>
    </>
  );
};

export default Navbar;
