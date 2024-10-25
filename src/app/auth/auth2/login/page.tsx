import Link from "next/link";
import { Grid, Box, Card, Stack, Typography } from "@mui/material";

// components
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import PageContainer from "@/app/components/container/PageContainer";
import AuthLogin from "../../authForms/AuthLogin";

export default function Login2() {
  return (
    <PageContainer title="Legateau Portal Login" description="Legateau Portal Login">
      <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            animation: "all 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
            backgroundSize: "cover",
            backgroundImage: "url('/images/backgrounds/cakebg.jpg')"
          },
        }}
        >
        
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={5}
            xl={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "450px" }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                {/* <Logo /> */}
                <h1>Legateau Logo</h1>
              </Box>
              <AuthLogin/>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
