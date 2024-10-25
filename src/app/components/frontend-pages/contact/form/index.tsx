"use client";
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  MenuItem,
  Button,
} from "@mui/material";
import CustomFormLabel from "../../../forms/theme-elements/CustomFormLabel";
import CustomTextField from "../../../forms/theme-elements/CustomTextField";
import CustomSelect from "../../../forms/theme-elements/CustomSelect";
import Address from "./Address";

const numbers = [
  {
    value: "one",
    label: "General Enquiry",
  },
  {
    value: "two",
    label: "General Enquiry 2",
  },
];

const Form = () => {
  const [number, setNumber] = React.useState("one");

  const handleChange3 = (event: any) => {
    setNumber(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          paddingTop: {
            xs: "40px",
            lg: "60px",
          },
          paddingBottom: {
            xs: "40px",
            lg: "90px",
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} lg={8} alignItems="center">
              <form>
                <Grid container spacing={3} justifyContent="center">
                  <Grid item xs={12} lg={6} alignItems="center">
                    <CustomFormLabel htmlFor="fname" sx={{ mt: 0 }}>
                      First Name *
                    </CustomFormLabel>
                    <CustomTextField id="fname" placeholder="Name" fullWidth />
                  </Grid>
                  <Grid item xs={12} lg={6} alignItems="center">
                    <CustomFormLabel htmlFor="lname" sx={{ mt: 0 }}>
                      Last Name *
                    </CustomFormLabel>
                    <CustomTextField
                      id="lname"
                      placeholder="Last Name"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} lg={6} alignItems="center">
                    <CustomFormLabel htmlFor="phone" sx={{ mt: 0 }}>
                      Phone Number *
                    </CustomFormLabel>
                    <CustomTextField
                      id="phone"
                      placeholder="xxx xxx xxxx"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} lg={6} alignItems="center">
                    <CustomFormLabel htmlFor="txt-email" sx={{ mt: 0 }}>
                      Email *
                    </CustomFormLabel>
                    <CustomTextField
                      id="txt-email"
                      placeholder="Email address"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} alignItems="center">
                    <CustomFormLabel htmlFor="txt-enquire" sx={{ mt: 0 }}>
                      Enquire related to *
                    </CustomFormLabel>
                    <CustomSelect
                      fullWidth
                      id="txt-enquire"
                      variant="outlined"
                      value={number}
                      onChange={handleChange3}
                    >
                      {numbers.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </CustomSelect>
                  </Grid>
                  <Grid item xs={12} alignItems="center">
                    <CustomFormLabel htmlFor="txt-message" sx={{ mt: 0 }}>
                      Message
                    </CustomFormLabel>
                    <CustomTextField
                      id="txt-message"
                      multiline
                      rows={4}
                      variant="outlined"
                      placeholder="Write your message here..."
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} alignItems="center">
                    <Button variant="contained" size="large">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={12} lg={4} alignItems="center">
              <Address />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Form;
