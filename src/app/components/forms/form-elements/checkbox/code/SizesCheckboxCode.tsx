import CodeDialog from "@/app/components/shared/CodeDialog";
import React from "react";
const SizesCheckboxCode = () => {
    return (
        <>
            <CodeDialog>
                {`
"use client";
import * as React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

<FormGroup
    row
    sx={{
        display: 'flex',
        justifyContent: 'center',
    }}
>
    <FormControlLabel
        control={
            <Checkbox color="primary"
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                name="checkednormal"
            />
        }
        label="Normal Size"
    />
    <FormControlLabel
        control={
            <Checkbox color="secondary"
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
                name="checkedsmall"
            />
        }
        label="Small size"
    />
    <FormControlLabel
        control={
            <Checkbox color="error"
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                name="checkedH"
            />
        }
        label="Heart"
    />
</FormGroup>`}
            </CodeDialog>
        </>
    );
};

export default SizesCheckboxCode;