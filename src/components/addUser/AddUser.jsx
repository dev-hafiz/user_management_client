import { Box, CardMedia, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import user from "../../assets/images/user.png";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  girdWrapper: {
    height: "100vh",
  },
  leftArea: {
    background: "#ECF0F3",
    display: "flex",
    justifyContent: "center",
  },
  iconBox: {
    width: "120px",
  },
});

const AddUser = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.girdWrapper} container spacing={2}>
      <Grid item xs={12} lg={3} className={classes.leftArea}>
        <Box sx={{ marginTop: "20px" }}>
          <Box className={classes.iconBox}>
            <CardMedia
              component="img"
              sx={{ mb: 0, marginLeft: "-30px" }}
              alt="green iguana"
              image={user}
            />
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ textAlign: "start", marginTop: "-10px" }}
            >
              User management system
            </Typography>
          </Box>
          <Box className={classes.iconBox}>
            <CardMedia
              component="img"
              sx={{ mb: 0, marginLeft: "-30px" }}
              alt="green iguana"
              image={p1}
            />
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ textAlign: "start", marginTop: "-10px" }}
            >
              Store document in database
            </Typography>
          </Box>
          <Box className={classes.iconBox}>
            <CardMedia
              component="img"
              sx={{ mb: 0, marginLeft: "-30px" }}
              alt="green iguana"
              image={p2}
            />
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ textAlign: "start", marginTop: "-10px" }}
            >
              Authorised info recipient
            </Typography>
          </Box>
          <Box className={classes.iconBox}>
            <CardMedia
              component="img"
              sx={{ mb: 0, marginLeft: "-30px" }}
              alt="green iguana"
              image={p3}
            />
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ textAlign: "start", marginTop: "-10px" }}
            >
              Secure access permission
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} lg={9} sx={{ border: "1px solid red" }}>
        <h2>Right</h2>
      </Grid>
    </Grid>
  );
};

export default AddUser;
