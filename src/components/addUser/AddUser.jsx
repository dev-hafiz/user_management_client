import { Box, CardMedia, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import user from "../../assets/images/user.png";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const useStyles = makeStyles({
  girdWrapper: {
    height: "100vh",
  },
  rightBox: {
    paddingTop: "100px",
    paddingLeft: "100px",
  },
  leftArea: {
    background: "#ECF0F3",
    display: "flex",
    justifyContent: "center",
  },
  iconBox: {
    width: "120px",
  },
  submitBtn: {
    background: "#F3D416",
    padding: "8px 20px",
    outline: "none",
    border: "2 px solid #545454",
    width: "100%",
    fontSize: "18px",
    marginTop: "16px",
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
      <Grid item xs={12} lg={9}>
        <Box className={classes.rightBox}>
          <Typography variant="h4" sx={{ color: "#545454" }} gutterBottom>
            Management System
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#545454", fontWeight: "bold", marginBottom: "20px" }}
            gutterBottom
          >
            User can manage his\her information according to role
          </Typography>

          <form>
            <Box sx={{ width: "70%" }}>
              <TextField
                label="Enter your name"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "100%" }}
                name="name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Name: </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Enter your email"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "100%" }}
                name="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Email: </InputAdornment>
                  ),
                }}
              />
              <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                  <TextField
                    label="Enter your age"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: "100%" }}
                    name="age"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">Age: </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    label="Enter your height"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: "100%" }}
                    name="height"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          Height:{" "}
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Grid sx={{ marginBottom: "8px" }} container spacing={2}>
                <Grid item xs={12} lg={6}>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Status
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Active"
                      control={<Radio />}
                      label="Active"
                    />
                    <FormControlLabel
                      value="Inactive"
                      control={<Radio />}
                      label="Inactive"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              <input
                className={classes.submitBtn}
                type="submit"
                value="Submit"
              />
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AddUser;
