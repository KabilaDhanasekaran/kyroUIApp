import * as React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import CallIcon from '@mui/icons-material/Call';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Form = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25%' },
        background: 'linear-gradient(to right, #fafafa, #ffffff)'
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-required"
          label="Last Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-required"
          label="Display Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PermContactCalendarOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-required"
          label="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-number"
          label="Phone No (Work)"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CallIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-required"
          label="Location"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </Box>
  );
}

export default Form;