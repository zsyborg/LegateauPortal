import CodeDialog from "@/app/components/shared/CodeDialog";
import React from "react";
const BasicCode = () => {
  return (
    <>
      <CodeDialog>
        {`
"use client";
import * as React from 'react';
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Divider,
} from "@mui/material";
import { IconChevronDown } from "@tabler/icons-react";

<Accordion>
    <AccordionSummary
        expandIcon={<IconChevronDown />}
        aria-controls="panel1a-content"
        id="panel1a-header"
    >
        <Typography variant="h6">Accordion 1</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography variant="subtitle1" color="textSecondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.
        </Typography>
    </AccordionDetails>
</Accordion>
<Divider />
<Accordion>
    <AccordionSummary
        expandIcon={<IconChevronDown />}
        aria-controls="panel2a-content"
        id="panel2a-header"
    >
        <Typography variant="h6">Accordion 2</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography variant="subtitle1" color="textSecondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.
        </Typography>
    </AccordionDetails>
    </Accordion>
    <Divider />
    <Accordion disabled>
    <AccordionSummary
        expandIcon={<IconChevronDown />}
        aria-controls="panel3a-content"
        id="panel3a-header"
    >
        <Typography variant="h6">Disabled Accordion</Typography>
    </AccordionSummary>
    </Accordion>`}
      </CodeDialog>
    </>
  );
};

export default BasicCode;
