"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Grid, Tooltip, MenuItem } from "@mui/material";
import { Typography } from "@mui/material";

import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import { IconX } from "@tabler/icons-react";
import { IconPlus } from "@tabler/icons-react";
import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";

const VariationCard = () => {
  const [age, setAge] = useState("0");
  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <Box p={3}>
      <Typography variant="h5">Variation</Typography>

      <CustomFormLabel sx={{ mt: 3 }}>Add Product Variations</CustomFormLabel>
      <Grid container spacing={3} mb={2}>
        <Grid item xs={12} lg={4}>
          <CustomSelect
            id="p_tax"
            value={age}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value={0}>Size</MenuItem>
            <MenuItem value={1}>XS</MenuItem>
            <MenuItem value={2}>SM</MenuItem>
            <MenuItem value={3}>MD</MenuItem>
            <MenuItem value={4}>LG</MenuItem>
            <MenuItem value={5}>XL</MenuItem>
          </CustomSelect>
        </Grid>
        <Grid item xs={12} lg={4}>
          <CustomTextField placeholder="Variations" fullWidth />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Tooltip title="Delete">
            <Button color="error" aria-label="delete">
              <IconX size={21} />
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Button variant="text" startIcon={<IconPlus size={18} />}>
        Add another variations
      </Button>
    </Box>
  );
};

export default VariationCard;
