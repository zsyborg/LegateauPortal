"use client";
import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Link,
  Chip,
  Button,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IconX } from "@tabler/icons-react";

const NotificationBg = styled(Box)(() => ({
  position: "absolute",
  right: "20%",
  top: 0,
}));

const NotificationBg2 = styled(Box)(() => ({
  position: "absolute",
  right: 0,
  top: 0,
}));

const NotificationBg3 = styled(Box)(() => ({
  position: "absolute",
  left: 0,
  bottom: "-5px",
}));

const HeaderAlert = () => {
  // State to track if the div should be shown or hidden
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  // Function to toggle the visibility
  const handleAlert = () => {
    setIsAlertVisible(false); // Hides the div when the button is clicked
  };

  //   sidebar
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  return (
    <>
      {isAlertVisible ? (
        <Box
          bgcolor="primary.main"
          borderRadius={0}
          textAlign="center"
          py="11px"
          position="relative"
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing="16px"
            justifyContent="center"
            alignItems="center"
          >
            {lgUp ? (
              <Chip
                label="New"
                size="small"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  color: "white",
                  borderRadius: "8px",
                }}
              />
            ) : null}

            <Typography
              variant="body1"
              color="white"
              fontWeight={500}
              sx={{
                opacity: "0.8",
              }}
              fontSize="13px"
            >
              Frontend Pages Included
            </Typography>
          </Stack>
          <IconButton
            onClick={handleAlert}
            color="secondary"
            sx={{
              zIndex: 1,
              position: "absolute",
              right: "6px",
              top: "6px",
            }}
          >
            <IconX size={18} color="white" />
          </IconButton>
          <>
            {lgUp ? (
              <>
                <NotificationBg>
                  <Image
                    src="/images/frontend-pages/homepage/notification-top-right.png"
                    alt="img"
                    width={325}
                    height={30}
                  />
                </NotificationBg>
                <NotificationBg2>
                  <Image
                    src="/images/frontend-pages/homepage/notification-right.png"
                    alt="img"
                    width={200}
                    height={44}
                  />
                </NotificationBg2>
                <NotificationBg3>
                  <Image
                    src="/images/frontend-pages/homepage/notification-left.png"
                    alt="img"
                    width={325}
                    height={44}
                  />
                </NotificationBg3>
              </>
            ) : null}
          </>
        </Box>
      ) : null}
    </>
  );
};

export default HeaderAlert;
