import CodeDialog from "@/app/components/shared/CodeDialog";
import React from "react";
const FormCode = () => {
    return (
        <>
            <CodeDialog>
                {`
"use client";
import * as React from 'react';
import { 
Button, 
Dialog, 
DialogTitle, 
DialogContent, 
DialogContentText, 
DialogActions, 
Box 
} from '@mui/material';

import CustomTextField from "../../forms/theme-elements/CustomTextField";

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};


return (
    <>
        <Button variant="contained" color="warning" fullWidth onClick={handleClickOpen}>
            Open Form Dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <Box mt={2}>
                    <CustomTextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button color="error" onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    </>
);`}
            </CodeDialog>
        </>
    );
};

export default FormCode;