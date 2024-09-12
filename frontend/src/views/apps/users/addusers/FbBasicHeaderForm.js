import React from 'react';
import {
  Box,
  FormControlLabel,
  Button,
  Grid,
  MenuItem,
  FormControl,
  Alert
} from '@mui/material';

import CustomTextField from '../../../../components/forms/theme-elements/CustomTextField';
import CustomSelect from '../../../../components/forms/theme-elements/CustomSelect';
import CustomRadio from '../../../../components/forms/theme-elements/CustomRadio';
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel';
import ParentCard from '../ParentCard';
import { Margin } from '@mui/icons-material';


const currencies = [
  {
    value: 'female',
    label: 'Female',
  },
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'other',
    label: 'Other',
  },
];

const countries = [
  {
    value: 'india',
    label: 'India',
  },
  {
    value: 'uk',
    label: 'United Kingdom',
  },
  {
    value: 'srilanka',
    label: 'Srilanka',
  },
];

const FbBasicHeaderForm = () => {
  const [currency, setCurrency] = React.useState('');

  const handleChange2 = (event) => {
    setCurrency(event.target.value);
  };

  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange3 = (event) => {
    setSelectedValue(event.target.value);
  };

  const [country, setCountry] = React.useState('');

  const handleChange4 = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Checkbox */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <ParentCard title="Basic Header Form" footer={
        <>
          
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </>
      }>

        <form>
          <Grid container spacing={3} mb={3}>
            <Grid item lg={6} md={12} sm={12}>
              <CustomFormLabel htmlFor="fname-text">First Name</CustomFormLabel>
              <CustomTextField id="fname-text" variant="outlined" fullWidth />
              <CustomFormLabel htmlFor="standard-select-currency">Select Gender</CustomFormLabel>
              <CustomSelect
                id="standard-select-currency"
                value={currency}
                onChange={handleChange2}
                fullWidth
                variant="outlined"

              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </CustomSelect>
              <CustomFormLabel>Membership</CustomFormLabel>

              <FormControl
                sx={{
                  width: '100%',
                }}
              >
                <Box>
                  <FormControlLabel
                    checked={selectedValue === 'a'}
                    onChange={handleChange3}
                    value="a"
                    label="Free"
                    name="radio-button-demo"
                    control={<CustomRadio />}
                    inputprops={{ 'aria-label': 'A' }}
                  />
                  <FormControlLabel
                    checked={selectedValue === 'b'}
                    onChange={handleChange3}
                    value="b"
                    label="Paid"
                    control={<CustomRadio />}
                    name="radio-button-demo"
                    inputprops={{ 'aria-label': 'B' }}
                  />
                </Box>
              </FormControl>
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <CustomFormLabel htmlFor="lname-text">Last Name</CustomFormLabel>

              <CustomTextField id="lname-text" variant="outlined" fullWidth />
              <CustomFormLabel htmlFor="date">Date of Birth</CustomFormLabel>

              <CustomTextField
                id="date"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}

              />
            </Grid>
          </Grid>
        </form>

      </ParentCard>
    </div>
  );
};

export default FbBasicHeaderForm;
