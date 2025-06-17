import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import Header from "../../components/Header";
import React from "react";
import { useForm } from "react-hook-form";

const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => {
    console.log("doneee");
    handleClick();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
      width={"90%"}
      mx={"auto"}
    >
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={errors.firstName ? "This Field Is Required" : null}
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={errors.lastName ? "This Field Is Required" : null}
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>
      <TextField
        error={Boolean(errors.email)}
        helperText={
          errors.email ? "Please provide a valid email address" : null
        }
        {...register("email", { required: true, pattern: regEmail })}
        label="Email"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.phone)}
        helperText={
          errors.phone ? "Please provide a valid email address" : null
        }
        {...register("phone", { required: true, pattern: phoneRegExp })}
        label="Contact Number"
        variant="filled"
      />
      <TextField label="Adress 1" variant="filled" />
      <TextField label="Adress 2" variant="filled" />

      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button type="submit" variant="contained">
          Create New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
