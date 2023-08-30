import { Box, Button, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#050215",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#2fdfc6",
          fontFamily: "Arial",
          padding: 5,
          gap: { xs: 3, md: 5 },
        }}
      >
        <Button
          variant="ouline"
          sx={{ fontWeight: "bold", fontSize: { md: 24 } }}
          onClick={() => navigate("/")}
        >
          Home
        </Button>
        <Typography
          sx={{ fontSize: { md: 48 }, fontWeight: "bold", color: "white" }}
        >
          RECORDS
        </Typography>
        <Button
          variant="ouline"
          sx={{ fontWeight: "bold", fontSize: { md: 24 } }}
          onClick={() => navigate("/list")}
        >
          List
        </Button>
      </Box>
      <Outlet />
    </>
  );
}
