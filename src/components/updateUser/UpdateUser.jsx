import { Grid, Box, Typography, Paper } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { makeStyles } from "@mui/styles";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useState } from "react";
import Swal from "sweetalert2";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const useStyles = makeStyles({
  leftArea: {
    height: "100vh",
    paddingLeft: "20px",
    paddingRight: "10px",
    paddingTop: "30px",
  },
  girdWrapper: {
    height: "100vh",
  },
  rightBox: {
    paddingTop: "60px",
    paddingLeft: "100px",
  },

  iconBox: {
    width: "120px",
  },
  submitBtn: {
    background: "#F3D416",
    padding: "8px 20px",
    outline: "none",
    width: "100%",
    fontSize: "18px",
    marginTop: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
  },
  profileBox: {
    width: "180px",
    height: "240px",
    marginTop: "110px",
  },
  cameraBtn: {
    display: "flex",
    border: ".5px solid #FFD866",
    background: " none",
    alignItems: "center",
    width: "180px",
    marginTop: "8px",
    paddingLeft: "10px",
    borderRadius: "6px",
    justifyContent: "center",
  },
});

const UpdateUser = () => {
  const classes = useStyles();

  const loadedUser = useLoaderData();

  const [gender, setGender] = useState(null);
  const [isActive, setIsActive] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    photoUrl: "",
    phone: "",
  });

  // form handler
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Radio Handler
  const handleRadioChange = (event) => {
    setGender(event.target.value);
  };
  // active handler
  const handleActiveStatus = (event) => {
    setIsActive(event.target.value);
  };

  // Get all Data from state
  const userInfo = {
    ...formData,
    gender,
    isActive,
  };

  //handle Create user
  const handleCreateUser = () => {
    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Profile Updated",
            text: "Keep continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <Grid container>
      <Grid item xs={12} lg={3}>
        <Box className={classes.leftArea}>
          <Typography sx={{ fontWeight: "bold" }} variant="h6">
            Account Settings
          </Typography>
          <Typography sx={{ mt: 1, marginBottom: "6px" }} variant="subtitle2">
            Account
          </Typography>

          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 1,
              px: 2,
              alignItems: "center",
              marginBottom: "6px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <PersonIcon sx={{ color: "#F3D053" }} />
              <Typography
                sx={{ marginLeft: "6px", marginTop: "2px", color: "#F3D053" }}
                variant="body2"
              >
                Profile
              </Typography>
            </Box>
            <KeyboardArrowRightIcon />
          </Paper>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 1,
              px: 2,
              alignItems: "center",
              marginBottom: "6px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <NotificationsActiveIcon />
              <Typography
                sx={{ marginLeft: "6px", marginTop: "2px" }}
                variant="body2"
              >
                Notification
              </Typography>
            </Box>
            <KeyboardArrowRightIcon />
          </Paper>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 1,
              px: 2,
              alignItems: "center",
              marginBottom: "6px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <EnhancedEncryptionIcon />
              <Typography
                sx={{ marginLeft: "6px", marginTop: "2px" }}
                variant="body2"
              >
                Password
              </Typography>
            </Box>
            <KeyboardArrowRightIcon />
          </Paper>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 1,
              px: 2,
              alignItems: "center",
              marginBottom: "6px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <SettingsIcon />
              <Typography
                sx={{ marginLeft: "6px", marginTop: "2px" }}
                variant="body2"
              >
                Settings
              </Typography>
            </Box>
            <KeyboardArrowRightIcon />
          </Paper>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 1,
              px: 2,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <ExitToAppIcon />
              <Typography
                sx={{ marginLeft: "6px", marginTop: "2px" }}
                variant="body2"
              >
                Exit
              </Typography>
            </Box>
            <KeyboardArrowRightIcon />
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box className={classes.rightBox}>
          <Typography sx={{ fontSize: "20px" }} variant="h5">
            Edit your profile
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Grid sx={{ mt: 2 }} container spacing={2}>
              <Grid item sx={{ mb: 3 }} xs={12} lg={6}>
                <TextField
                  label="Enter first name"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "100%" }}
                  defaultValue={loadedUser.firstName}
                  name="firstName"
                  valye={formData.firstName}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">First: </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  label="Enter last name"
                  id="outlined-start-adornment"
                  defaultValue={loadedUser.lastName}
                  sx={{ m: 1, width: "100%" }}
                  name="lastName"
                  valye={formData.lastName}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Last: </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            <TextField
              label="Enter your email"
              id="outlined-start-adornment"
              defaultValue={loadedUser.email}
              sx={{ m: 1, width: "100%", mb: 3 }}
              name="email"
              valye={formData.email}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Email: </InputAdornment>
                ),
              }}
            />
            <Grid container spacing={2}>
              <Grid sx={{ mb: 3 }} item xs={12} lg={6}>
                <TextField
                  label="Enter photo url"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "100%" }}
                  defaultValue={loadedUser.photoUrl}
                  name="photoUrl"
                  valye={formData.photoUrl}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Url: </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sx={{ mb: 3 }} xs={12} lg={6}>
                <TextField
                  label="Enter  phone  number"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "100%" }}
                  name="phone"
                  defaultValue={loadedUser.phone}
                  valye={formData.phone}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Phone: </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Grid sx={{ marginBottom: "8px" }} container spacing={2}>
              <Grid sx={{ mb: 3 }} item xs={12} lg={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={handleRadioChange}
                  defaultValue={loadedUser.gender}
                >
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </Grid>
              <Grid sx={{ mb: 2 }} item xs={12} lg={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Status
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={handleActiveStatus}
                  defaultValue={loadedUser.isActive}
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
            <button onClick={handleCreateUser} className={classes.submitBtn}>
              Update Profile{" "}
            </button>
          </Box>
        </Box>
      </Grid>
      <Grid
        sx={{ display: "flex", justifyContent: "center" }}
        item
        xs={12}
        lg={3}
      >
        <Box className={classes.profileBox}>
          <img
            style={{ borderRadius: "20px" }}
            width="100%"
            height="100%"
            src={loadedUser.photoUrl}
          />
          <button className={classes.cameraBtn}>
            <PhotoCameraIcon />
            <p style={{ marginLeft: " 6px" }}>Profile picture</p>
          </button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UpdateUser;
